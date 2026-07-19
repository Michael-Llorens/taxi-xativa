// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { readdir, readFile, writeFile } from 'fs/promises';
import { join } from 'path';
import { fileURLToPath } from 'url';

/** Converts Astro's page-specific CSS <link> tags to async after build */
const makePageCSSAsync = () => ({
  name: 'make-page-css-async',
  hooks: {
    'astro:build:done': async ({ dir }) => {
      const distPath = fileURLToPath(dir);

      async function processDir(currentPath) {
        const entries = await readdir(currentPath, { withFileTypes: true });
        for (const entry of entries) {
          const fullPath = join(currentPath, entry.name);
          if (entry.isDirectory() && !entry.name.startsWith('_')) {
            await processDir(fullPath);
          } else if (entry.name.endsWith('.html')) {
            const html = await readFile(fullPath, 'utf-8');
            const updated = html.replace(
              /<link rel="stylesheet" href="(\/_astro\/[^"]+\.css)">/g,
              (_, href) =>
                `<link rel="preload" as="style" href="${href}" onload="this.onload=null;this.rel='stylesheet'">` +
                `<noscript><link rel="stylesheet" href="${href}"></noscript>`
            );
            if (updated !== html) await writeFile(fullPath, updated, 'utf-8');
          }
        }
      }

      await processDir(distPath);
    },
  },
});

// https://astro.build/config
export default defineConfig({
  site: 'https://taxixativa.es',
  integrations: [sitemap(), makePageCSSAsync()],
});
