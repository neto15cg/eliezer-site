# Eliezer Marques - Personal Website

Personal site and résumé built with Next.js and TypeScript. The published site has a [Portuguese version](https://eliezer-marques.click/) and an [English version](https://eliezer-marques.click/en.html).

## Development

```bash
npm ci
npm run dev
```

The development routes are `/` and `/en`. To preview the production export, run:

```bash
npm run build
npm run serve
```

## Deployment

Pushes to `main` trigger GitHub Actions to publish the contents of `out/` to S3 and invalidate the CloudFront cache. The English page is served as `/en.html` from the static export.

## Author

Eliezer Marques - [GitHub Profile](https://github.com/neto15cg)
