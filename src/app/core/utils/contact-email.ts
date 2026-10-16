const LOCAL = 'aGF1cmV0LmFudG9pbmU=';
const DOMAIN = 'Z21haWwuY29t';

export function getContactEmail(): string {
    return atob(LOCAL) + '@' + atob(DOMAIN);
}
