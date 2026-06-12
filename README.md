# 🚕 Taxi Xàtiva — Ricardo Llorens

Web oficial de **Taxi Xàtiva**, servicio de taxi en Xàtiva (Valencia) con más de 10 años de
experiencia. Sitio rápido, responsive y optimizado para SEO local, construido con **Astro**.

🔗 **Producción:** _(pendiente de desplegar en Vercel)_

---

## ✨ Características

- **Hero** con slideshow de fondo (efecto Ken Burns) y titular animado.
- **Calculadora de presupuesto** en vivo (10 €/km días normales · 15 €/km festivos) que genera
  una reserva por WhatsApp con la estimación.
- **Reseñas reales de Google** (5★) de clientes.
- **Zonas de servicio** (Xàtiva y toda La Costera).
- **Formulario de reserva** que abre WhatsApp con los datos rellenados.
- **Botón flotante de WhatsApp** con popup tipo chat (apertura automática).
- **Barra fija en móvil** con accesos rápidos a *Llamar* y *WhatsApp*.
- **FAQ** con acordeón + datos estructurados `FAQPage`.
- Aviso de **cookies**, páginas legales (aviso legal, privacidad, cookies) y página **404**.

## 🚀 SEO y rendimiento

- Datos estructurados **JSON-LD** (`TaxiService` + `LocalBusiness`) con geolocalización,
  dirección, horario, área de servicio y enlace a la ficha de Google.
- **Schema `FAQPage`** para resultados enriquecidos.
- `sitemap-index.xml` y `robots.txt` automáticos.
- Imágenes optimizadas a **WebP** con `astro:assets` (con `srcset` responsive).
- Open Graph, Twitter Cards, canonical, `theme-color` y `noindex` en la 404.
- Tipografía fluida (`clamp`) y diseño **responsive** verificado de 360px a 1280px+.

## 🛠️ Tecnología

- [Astro](https://astro.build) (sitio estático)
- HTML + CSS moderno (sin frameworks de UI) + JavaScript vanilla
- `@astrojs/sitemap`

## 📦 Estructura

```text
public/            Imágenes estáticas, robots.txt, favicon
src/
  assets/img/      Imágenes optimizadas en build (astro:assets)
  components/      Header, Hero, QuienSoy, PorQue, Servicios, Calculadora,
                   Zonas, Opiniones, Faq, Contacto, Footer, Whatsapp,
                   BarraMovil, Cookies
  layouts/         Layout.astro (SEO, JSON-LD, scripts globales)
  pages/           index.astro, aviso-legal, politica-privacidad,
                   politica-cookies, 404
  styles/          global.css
astro.config.mjs   Configuración (site + sitemap)
```

## 💻 Desarrollo

Requisitos: **Node.js 18+**.

```bash
npm install        # instalar dependencias
npm run dev        # servidor de desarrollo en http://localhost:4321
npm run build      # genera el sitio en /dist
npm run preview    # previsualiza el build de producción
```

## ✏️ Editar contenido

- **Reseñas:** array `opiniones` en `src/components/Opiniones.astro`.
- **Zonas de servicio:** array `zonas` en `src/components/Zonas.astro`.
- **Tarifas de la calculadora:** `TARIFA_NORMAL` / `TARIFA_FESTIVO` en `src/components/Calculadora.astro`.
- **Teléfono / WhatsApp / email:** búscalos en los componentes (`722 26 76 68`, `34722267668`,
  `ricardotaxixativa@gmail.com`).
- **Textos legales:** páginas en `src/pages/`.

## ☁️ Despliegue (Vercel)

1. Sube el repositorio a GitHub.
2. En [vercel.com](https://vercel.com) → **Add New → Project** → importa el repositorio.
3. Vercel detecta Astro automáticamente (build: `astro build`, salida: `dist`).
4. **Deploy**. ¡Listo!

---

© 2025 Taxi Xàtiva — Ricardo Llorens. Todos los derechos reservados.
