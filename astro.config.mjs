// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Dominio principal: Vercel redirige taxixativa.es → www.taxixativa.es
  site: 'https://www.taxixativa.es',
  integrations: [sitemap()],
  build: {
    // CSS incrustado en el HTML: elimina la petición que bloquea el primer render
    inlineStylesheets: 'always',
  },
});
