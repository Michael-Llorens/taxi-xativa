# 🚕 Taxi Xàtiva — Ricardo Llorens

Web oficial de **Taxi Xàtiva**, servicio de taxi en Xàtiva (Valencia) con más de 10 años de
experiencia. Sitio rápido, responsive y optimizado para SEO local, construido con **Astro**.

🔗 **Producción:** [taxixativa.es](https://taxixativa.es)

---

## ✨ Características

- **Hero** con slideshow de fondo (efecto Ken Burns) y titular animado.
- **Calculadora de presupuesto** en vivo (1,37 €/km días normales · 1,59 €/km nocturno/festivo)
  que genera una reserva por WhatsApp con la estimación.
- **Horario** con indicador "Disponible ahora" / "Cerrado ahora" calculado en tiempo real.
- **Reseñas reales de Google** (5★) de clientes.
- **Zonas de servicio** (Xàtiva y toda La Costera) y páginas dedicadas por ruta: aeropuertos de
  Valencia y Alicante, y trayectos a Gandia, Alicante ciudad y Ontinyent.
- **Formulario de reserva** que abre WhatsApp con los datos rellenados.
- **Botón flotante de WhatsApp** con popup tipo chat (apertura automática).
- **FAQ** con acordeón + datos estructurados `FAQPage`.
- Aviso de **cookies** con gestión real de consentimiento (Google Tag Manager solo se carga si
  se acepta, y se puede revocar desde "Configurar cookies" en el pie de página), páginas legales
  (aviso legal, privacidad, cookies) y página **404**.

## 🚀 SEO y rendimiento

- Datos estructurados **JSON-LD** (`TaxiService` + `LocalBusiness`) con geolocalización,
  dirección, horario real, área de servicio (Xàtiva y los 14 municipios de La Costera) y enlace
  a la ficha de Google.
- **Schema `FAQPage`** y `BreadcrumbList` (en las páginas de ruta) para resultados enriquecidos.
- `sitemap-index.xml` y `robots.txt` automáticos.
- Imágenes optimizadas a **WebP** con `astro:assets` (con `srcset` responsive) e indexables por
  Google Imágenes (sin `background-image` decorativos para contenido relevante).
- Open Graph, Twitter Cards, canonical, `theme-color`, favicon en PNG (96/192px) + `site.webmanifest`,
  y `noindex` en la 404.
- Fuentes autoalojadas (sin Google Fonts), Google Tag Manager diferido y condicionado al consentimiento.
- Tipografía fluida (`clamp`) y diseño **responsive** verificado de 360px a 1280px+.
- Auditado con Lighthouse: 100/100 en Accesibilidad, Buenas Prácticas y SEO.

## 🛠️ Tecnología

- [Astro](https://astro.build) (sitio estático)
- HTML + CSS moderno (sin frameworks de UI) + JavaScript vanilla
- `@astrojs/sitemap`

## 📦 Estructura

```text
public/            Favicons, site.webmanifest, robots.txt, imágenes referenciadas por URL fija (OG, logo del JSON-LD)
src/
  assets/img/      Imágenes optimizadas en build (astro:assets)
  components/      Header, Hero, Ventajas, QuienSoy, PorQue, Servicios, ComoReservar,
                   Calculadora, Zonas, Opiniones, Faq, Contacto, Footer, Whatsapp,
                   Cookies, RutaInfo
  layouts/         Layout.astro (SEO, JSON-LD, scripts globales)
  pages/           index.astro, taxi-aeropuerto-valencia, taxi-aeropuerto-alicante,
                   taxi-gandia, taxi-alicante, taxi-ontinyent, aviso-legal,
                   politica-privacidad, politica-cookies, 404
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
- **Zonas de servicio:** array `zonas` en `src/components/Zonas.astro` (mantener sincronizado
  con `areaServed` en `src/layouts/Layout.astro` para el SEO local).
- **Horario:** array `horario` en `src/components/Contacto.astro` (mantener sincronizado con
  `openingHoursSpecification` en `src/layouts/Layout.astro`).
- **Tarifas de la calculadora:** `TARIFA_NORMAL` / `TARIFA_FESTIVO` en `src/components/Calculadora.astro`.
- **Teléfono / WhatsApp / email:** búscalos en los componentes (`722 26 76 68`, `34722267668`,
  `ricardotaxixativa@gmail.com`).
- **Textos legales:** páginas en `src/pages/`.

## ☁️ Despliegue (Vercel)

El proyecto está desplegado en Vercel con despliegue automático al hacer `push` a `main`.

1. Sube el repositorio a GitHub.
2. En [vercel.com](https://vercel.com) → **Add New → Project** → importa el repositorio.
3. Vercel detecta Astro automáticamente (build: `astro build`, salida: `dist`).
4. **Deploy**. ¡Listo!

---

© 2026 Taxi Xàtiva — Ricardo Llorens. Todos los derechos reservados.
