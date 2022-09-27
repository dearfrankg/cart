## Intro

This is an example ecommerce app.

- [install solid + tailwind starter][install-starter]
- [install router][install-router] - `npm i @solidjs/router`
- install font icons - `npm i @fortawesome/fontawesome-free`
- [finished app repo on github][my-finished-app]
- [finished example apps using react and solid][finished-app]
- [youtube walkthrough][youtube-walkthrough]

[install-starter]: https://tailwindcss.com/docs/guides/solidjs
[install-router]: https://github.com/solidjs/solid-router
[my-finished-app]: https://github.com/dearfrankg/cart
[finished-app]: https://github.com/jherr/react-vs-solid-fight
[youtube-walkthrough]: https://www.youtube.com/watch?v=OqcHoLWyyIw&ab_channel=JackHerrington

## Update CSS

```css
/* css index.css */
@import "@fortawesome/fontawesome-free/css/all.css";
@tailwind base;
@tailwind components;

.tooltip {
  @apply invisible absolute;
}

.has-tooltip:hover .tooltip {
  @apply visible z-50;
}

@tailwind utilities;

.description {
  position: relative;
  height: calc(1.75rem * 3);
  max-height: calc(1.75rem * 3);
  overflow: hidden;
  padding-right: 1rem;
}

.cart {
  width: 23rem;
  margin-top: 1.5rem;
  margin-left: -20rem;
  background: white;
  padding: 0.5rem;
  color: black;
  border: 1px solid black;
}
```

## Package Managers

- `pnpm-lock.yaml` optional
- any package manager can be used: npm, yarn, pnpm

## Available Scripts

- `npm dev` run in dev mode reloads on edit
- `npm start` run in dev mode reloads on edit
- `npm run build` builds the app for production to the `dist` folder - minified with hashes
