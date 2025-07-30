# kris-gatsby-codex

This repository contains a simple Gatsby site configured for deployment on Netlify. It includes a basic portfolio starter library in `src/components/Portfolio.js`.

The project uses **Gatsby v5** with **React 18** and the `gatsby-plugin-netlify` plugin. Ensure your Node.js version is compatible with Gatsby (Node 18 is recommended).

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the development server:
   ```bash
   npm start
   ```
3. Create a production build:
   ```bash
   npm run build
   ```

## Deploying to Netlify

Connect this repository to Netlify and set the build command to `npm run build` and the publish directory to `public`.
If you encounter build issues on Netlify related to Node or dependencies, ensure the Node version is set to `18` in your Netlify build settings.
