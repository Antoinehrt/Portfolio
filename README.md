# My Portfolio

This repository contains the source code for my personal portfolio, built using [Angular CLI](https://github.com/angular/angular-cli) version 18.2.6. The portfolio is designed to showcase my skills, experiences, projects, and educational background in a clean, interactive, and professional way.

## Features

- **Dynamic Timeline**: Interactive timeline highlighting my education, internships, and professional experiences.
- **Project Showcase**: Detailed sections for each project, including descriptions, technologies used, and key outcomes.
- **Technology Stack**: Comprehensive overview of the tools and technologies I’ve mastered.
- **Responsive Design**: Fully optimized for mobile, tablet, and desktop devices.

# Getting started

## Prerequisites

Make sure you have the following installed:

- Node.js (v16 or higher)
- Angular CLI (v17 or higher)
- A package manager (npm or yarn)

## Installation

1. Clone the repository

```bash
  git clone https://github.com/Antoinehrt/Portfolio.git
```

2. Navigate to the project directory

```bash
  cd portfolio
```

3. Install dependencies

```bash
  npm install
```

## API Keys

This project requires a properly configured environment file to enable the Contact Me section of the portfolio. The EmailJS integration depends on three key variables:

- `EMAILJS_USER_ID`: Your EmailJS User ID.
- `EMAILJS_SERVICE_ID`: Your EmailJS Service ID.
- `EMAILJS_TEMPLATE_ID`: Your EmailJS Template ID.

1. configure the environment file

   Create environment using this command:

```bash
  ng generate environments
```

2. Add Your EmailJS Credentials

   Open src/environments/environment.local.ts and populate it with your EmailJS credentials:

```ts
export const environment = {
  production: false,
  EMAILJS_USER_ID: 'your-emailjs-user-id',
  EMAILJS_SERVICE_ID: 'your-emailjs-service-id',
  EMAILJS_TEMPLATE_ID: 'your-emailjs-template-id',
};
```

3. Update Your Angular Build Configuration (Optional)

  If you need to use different credentials for different environments (e.g., development and production), modify your angular.json file to include appropriate environment replacements.

Example for local environment:

```json
"configurations": {
  "local": {
    "fileReplacements": [
      {
        "replace": "src/environments/environment.ts",
        "with": "src/environments/environment.local.ts"
      }
    ]
  }
}
  ```

## Development Server

Run the development server locally:

```bash
  ng server
```

## Build for Production

To build the project for production:

```bash
  ng build --configuration production
```

# File Structure

```scss
src/
├── app/
│ ├── pages/ // Page-level components (e.g., Home, Timeline, Projects)
│ └── core/
│     ├── models/ // TypeScript interfaces and models
│     ├── pipes/ // Pipes for transforming data
│     ├── services/ // Services for state management
│     └── styles/ // Global styles and SCSS variables 
├── assets/ // Images, icons, and other static assets
└── environments/ // Environment-specific configurations
```

# License

Logos used in this portfolio are the property of their respective owners and are shown here for illustrative purposes only. No copyright infringement is intended.

# Contact

Feel free to reach out if you have any questions or feedback:

- **Email**: hauret.antoine@gmail.com
- **LinkedIn**: [/in/antoine-hauret](https://www.linkedin.com/in/antoine-hauret)
