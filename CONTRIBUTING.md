# Contributing

Thank you for your interest in contributing to this personal website repository. 
The site is built with static HTML, Tailwind CSS, and a small amount of JavaScript, and is deployed via GitHub Pages. Contributions are welcome, but please note the following guidelines:

1. **Design consistency**
   - Follow the existing colour palette and typography defined in `tailwind.config.js`.
   - All new styles should be written using Tailwind utility classes or added to `src/input.css`.

2. **Adding content**
   - Update `index.html` for structural changes or new sections. Keep semantic markup and responsive layout in mind.
   - Images go into `assets/img/`; large files will be resized before committing.

3. **Building CSS**
   - Run `npm install` and `npm run build:css` locally to regenerate `assets/css/tailwind.css`. Commits should include the generated CSS.

4. **Legacy material**
   - Everything under `legacy/` is archived and should not be modified. Use it only for reference.

5. **Testing and deployment**
   - Preview your changes locally by opening `index.html` in a browser or using a simple HTTP server (`python -m http.server`).
   - Once ready, push to the `master` branch; GitHub Pages will automatically update.

6. **Pull requests**
   - Describe your change clearly in the PR description.
   - Small, focused commits are appreciated.

Feel free to reach out to @ctivir.