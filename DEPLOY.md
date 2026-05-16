# Inkstone Capital Deployment

## GitHub to web server auto deploy

This project is configured for GitHub Actions deployment through FTP.

Workflow file:

- `.github/workflows/deploy.yml`

Trigger rules:

- Push to `main`
- Manual run from the GitHub Actions page

The workflow will:

1. Install dependencies with `npm ci`
2. Run `npm run build`
3. Upload the generated `out/` directory to your web server

## Required GitHub Secrets

Add the following repository secrets in GitHub:

- `FTP_SERVER`
  Example: `ftp.inkstonecapital.com`
- `FTP_USERNAME`
  Example: your FTP login account
- `FTP_PASSWORD`
  Example: your FTP password
- `FTP_SERVER_DIR`
  Example: `public_html/`

GitHub path:

- `Settings` -> `Secrets and variables` -> `Actions` -> `New repository secret`

## First-time setup checklist

1. Push this repository to GitHub
2. Confirm your production branch is `main`
3. Add the four FTP secrets above
4. Push a small change to trigger deployment
5. Check the `Actions` tab for build and upload logs

## Manual local build

```bash
npm install
npm run build
```

After the build finishes, the static output will be generated in `out/`.

## Updating news

This site no longer uses a server-side admin API.

To update the "最新消息與媒體報導" section:

1. Edit `src/data/news.json`
2. Commit the change
3. Push to `main`
4. GitHub Actions will build and deploy automatically
