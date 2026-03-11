# Cecilia Tivir — Personal Portfolio

This repository contains the source for my personal website, deployed via GitHub Pages.

## Structure (modernized)

```
/ (root)
├─ index.html                ← main entry (new Tailwind-based homepage)
├─ tailwind.config.js        ← Tailwind custom theme
├─ postcss.config.js         ← PostCSS pipeline (Tailwind + autoprefixer)
├─ package.json              ← build scripts and dependencies
├─ src/                      ← source files for building CSS, etc.
│  └─ input.css              ← Tailwind directives
├─ assets/                   ← static assets
│  ├─ css/
│  │  └─ tailwind.css        ← generated stylesheet
│  ├─ js/                    ← project scripts (new work goes here)
│  ├─ img/                   ← images
│  └─ fonts/                 ← custom fonts
└─ legacy/                   ← original template and old assets
   ├─ index.old.html
   ├─ README.orig.txt
   ├─ assets/                ← previous CSS/JS/image bundle
   └─ …                      ← anything else deprecated
```

### Notes

- **Tailwind CSS** is used for styling; run `npm install` then `npm run build:css` to generate `assets/css/tailwind.css`.
- The old Bootstrap-based template and unrelated quotes have been archived under `legacy/`.
- Links in `index.html` have been updated to reference the new CSS/JS locations.
- Use the `src` folder for any preprocessors or input files you may add later.

Feel free to prune the `legacy/` directory once you’ve confirmed the new layout is complete.
