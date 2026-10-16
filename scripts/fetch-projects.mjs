// Récupère les dépôts épinglés GitHub AU BUILD et écrit un JSON statique.
// Le token n'est lu que depuis l'environnement de TA machine : il n'est jamais embarqué dans l'app.
import {mkdir, readFile, writeFile} from 'node:fs/promises';
import {dirname} from 'node:path';

const LOGIN = 'Antoinehrt';
const OUT = 'src/assets/data/projects.json';
const DEFAULT_IMAGE = 'assets/img/logos/default_project_icon.png';
const TOKEN = process.env.GITHUB_TOKEN;

if (!TOKEN) {
    const exists = await readFile(OUT).then(() => true, () => false);
    console.warn(`[projects] GITHUB_TOKEN absent : ${exists ? 'on garde le fichier existant' : 'aucun fichier généré'}.`);
    process.exit(exists ? 0 : 1);
}

const query = `
query {
  user(login: "${LOGIN}") {
    pinnedItems(first: 6, types: [REPOSITORY]) {
      nodes {
        ... on Repository {
          name description url homepageUrl createdAt updatedAt diskUsage
          languages(first: 20, orderBy: {field: SIZE, direction: DESC}) {
            totalSize
            edges { size node { name color } }
          }
          repositoryTopics(first: 20) { nodes { topic { name } } }
          readme: object(expression: "HEAD:README.md") { ... on Blob { text } }
        }
      }
    }
  }
}`;

const res = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
        Authorization: `Bearer ${TOKEN}`,
        'Content-Type': 'application/json',
        'User-Agent': 'portfolio-build'
    },
    body: JSON.stringify({query})
});
if (!res.ok) throw new Error(`GitHub API : HTTP ${res.status}`);
const json = await res.json();
if (json.errors) throw new Error(JSON.stringify(json.errors));

function extractImage(repoName, readme) {
    if (!readme) return DEFAULT_IMAGE;
    const md = readme.match(/!\[.*?\]\(([^)]+)\)/);
    const html = readme.match(/<img[^>]+src=["']([^"']+)["'][^>]*>/i);
    let url = md?.[1] ?? html?.[1];
    if (!url) return DEFAULT_IMAGE;
    if (!url.startsWith('http')) {
        url = `https://raw.githubusercontent.com/${LOGIN}/${repoName}/HEAD/${url.replace(/^\.?\//, '')}`;
    }
    return url;
}

const projects = (json.data?.user?.pinnedItems?.nodes ?? []).map(repo => {
    const total = repo.languages?.totalSize || 0;
    return {
        name: repo.name ?? 'Untitled Project',
        description: repo.description || 'No description available',
        repoUrl: repo.url ?? '',
        liveUrl: repo.homepageUrl ?? '',
        createdAt: repo.createdAt,
        updateAt: repo.updatedAt,
        size: repo.diskUsage ?? 0,
        languages: (repo.languages?.edges ?? []).map(e => ({
            name: e.node.name,
            color: e.node.color,
            percentage: total ? Math.round((e.size / total) * 1000) / 10 : 0
        })),
        topics: (repo.repositoryTopics?.nodes ?? []).map(n => n.topic?.name).filter(Boolean),
        imageUrl: extractImage(repo.name, repo.readme?.text)
    };
});

await mkdir(dirname(OUT), {recursive: true});
await writeFile(OUT, JSON.stringify(projects, null, 2) + '\n');
console.log(`[projects] ${projects.length} projets écrits dans ${OUT}`);
