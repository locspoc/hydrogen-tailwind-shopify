# JavaScript Example

Hydrogen is a React framework and SDK that you can use to build fast and dynamic Shopify custom storefronts.

[Check out the docs](https://shopify.dev/custom-storefronts/hydrogen)

[Run this template in JavaScript on StackBlitz](https://stackblitz.com/github/Shopify/hydrogen/tree/dist/templates/hello-world-js?file=package.json)

[Run this template in TypeScript on StackBlitz](https://stackblitz.com/github/Shopify/hydrogen/tree/dist/templates/hello-world-js?file=package.json)

## Getting started

**Requirements:**

-   Node.js version 16.14.0 or higher
-   Yarn

```bash
npm init @shopify/hydrogen@latest --template hello-world-ts
```

Remember to update `hydrogen.config.js` with your shop's domain and Storefront API token!

## Building for production

```bash
yarn build
```

## Previewing a production build

To run a local preview of your Hydrogen app in an environment similar to Oxygen, build your Hydrogen app and then run `yarn preview`:

```bash
yarn build
yarn preview
```

# hydrogen-tailwind-shopify

Hydrogen Tailwind Shopify

# Testing

Initial commit

# 1. Install Hydrogen

```
yarn create @shopify/hydrogen
https://shopify.dev/custom-storefronts/hydrogen/getting-started/quickstart
```

# 2. Install Tailwind CSS With PostCSS And Autoprefixer

```
npm install -D tailwindcss postcss autoprefixer

npx tailwindcss init -p

https://www.youtube.com/watch?v=O3_qDL4Ls_s

src/index.css

@tailwind base;
@tailwind components;
@tailwind utilities;

```

# 3. GraphIQL

```
http://localhost:3000/graphiql
```

# 4. Caching Issue

```
yarn dev --force
```
