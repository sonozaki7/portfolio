# So Nozaki — portfolio

The public portfolio for So Nozaki, an AI-first SaaS founder and product engineer working across Japan and Thailand.

Live site: [sonozaki7.github.io/portfolio](https://sonozaki7.github.io/portfolio/)

## What is here

- Current public products and open-source systems
- A live twelve-month founder operating report sourced from the GitHub profile tracker
- Working principles for fast, guarded AI product delivery
- Selected technical background and contact links

The portfolio intentionally avoids private repository names, customer data, operational credentials, and unverified business claims.

## Local development

```bash
npm ci
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build and deployment

```bash
npm run build:static
```

Pushes to `main` build and publish the static export through GitHub Actions. Production uses `BASE_PATH=/portfolio` so assets and routes work under GitHub Pages.
