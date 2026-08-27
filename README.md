# tldr-tab

MV3 extension: one click, tl;dr of any article

Small but I use it weekly.

## Examples

```bash
# open any article, click the icon, get a 5-bullet summary
```

## Features

- Popup shows a 5-bullet summary
- Reads the page, extracts main text, sends to your endpoint
- Options page for API base and key
- Manifest V3 service worker, no build step

## Install

```bash
# chrome://extensions -> load unpacked -> select this folder
# set your API base + key on the options page
```

## Project structure

```text
├── .github/
│   ├── dependabot.yml
│   └── pull_request_template.md
├── docs/
│   ├── development.md
│   ├── faq.md
│   └── usage.md
├── examples/
│   └── quickstart.md
├── src/
│   └── config.js
├── .gitattributes
├── .gitignore
├── CHANGELOG.md
├── CONTRIBUTING.md
├── SECURITY.md
├── background.js
├── manifest.json
├── options.html
├── popup.html
└── popup.js
```

## License

MIT - see [LICENSE](LICENSE).
