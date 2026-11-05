# MacBetter — Make Your Mac Better

**English** · [中文](README.zh-CN.md) · [日本語](README.ja.md)

A community-curated directory of free, open-source macOS tools. Find an app for the task, check its requirements, and go straight to the official project.

**[Browse the directory](https://ixiehao.github.io/MacBetter/)** · **[Recommend an app](https://github.com/ixiehao/MacBetter/issues/new?template=recommend-an-app.yml)**

## What you’ll find

- Apps grouped by purpose, with search and filters.
- Project screenshots on hover, with larger previews for touch and keyboard users.
- Short descriptions, practical recommendations, licenses, and official installation links.
- English, Chinese, and Japanese pages.
- **Tested by io** marks apps personally used by iXiehao. Other listings are checked against public project information. Neither is a security audit or a compatibility guarantee.

## Recommend a tool

Share its source repository, license, official installation link, macOS requirements, and one concrete problem it solves. Include any important permissions or limitations.

We look for accessible source code, a clear open-source license, a usable free version, and a practical Mac use case. Paid extras and separate proprietary products should be clearly identified. Stars alone do not establish quality or safety.

Found an outdated link or description? [Open an issue](https://github.com/ixiehao/MacBetter/issues/new) or send a pull request. See the [contribution guide](CONTRIBUTING.md) (Chinese).

## Run locally

The published site is static. After editing catalog data, translations, or the page template, run `npm ci --ignore-scripts` and `npm run build:search` to regenerate all three language editions. Preview from the repository root:

```sh
python3 -m http.server 8000 --bind 127.0.0.1 --directory website
```

Open <http://127.0.0.1:8000/>. Catalog entries live in [`website/data/apps.json`](website/data/apps.json); translations live in [`website/app.js`](website/app.js). Keep all three languages in sync. See the [development and deployment docs](docs/README.md) (Chinese).

## License and credits

Site code: [MIT](LICENSE). Listed projects retain their own licenses; their names and icons belong to their respective owners. Inclusion does not imply endorsement.

The site self-hosts [Inter and Noto Sans](website/assets/fonts/README.md) under SIL OFL 1.1 and uses [Tabler Icons](website/assets/TABLER-ICONS-LICENSE.md) under MIT. See the [brand asset notes](website/assets/BRAND.md) for the site’s io mark.
