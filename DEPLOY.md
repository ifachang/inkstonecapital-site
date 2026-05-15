# Inkstone Capital Static Deployment

## Build static files

```bash
npm install
npm run build
```

After the build finishes, deploy the generated files in the `out/` directory.

## Upload target

Upload the contents of `out/` to any static hosting provider or traditional web hosting space, such as:

- cPanel hosting
- Netlify
- Cloudflare Pages
- GitHub Pages

## Updating news

This site no longer uses a server-side admin API.

To update the "最新消息與媒體報導" section:

1. Edit `src/data/news.json`
2. Run `npm run build`
3. Re-upload the refreshed `out/` files
