# Eduardo Rojas Velasquez — CV / Portfolio

> IT Operations · Business Software Developer · AI Automation — one-page professional CV website

Sitio one-page de currículum (CV) para **Eduardo Rojas Velasquez**: portfolio bilingüe con demos interactivas en vivo de los sistemas en producción, CV descargable en PDF, SEO (Open Graph, JSON-LD, sitemap) y despliegue en Cloudflare Pages.

**Demo en vivo:** <https://eduardo-cv.pages.dev/>

---

## 🇪🇸 Español

### Descripción

Carta de presentación profesional en una sola vista:

- **Hero:** rol animado (typewriter), tecnologías destacadas, tarjetas de contacto y redes.
- **Demos en vivo (`#demos`):** panel interactivo justo después del hero con pestañas que muestran los sistemas reales en producción:
  - **NoraHR Kanban** — simulación interactiva del board (statuses, tarjetas, drag & click).
  - **FactuRD** — generación de e-CF, plantillas de factura y Kardex FIFO.
  - **Websites** — iframes en vivo de los sitios desplegados: Event Pro Jinaite, FactuRD, Tienda Xtrógeno, Solo el Music, Sharks Launch Pad y Nora Signage Portal.
  - **Digital Signage** — landing real de Nora Signage Portal cargada en vivo.
- **Quick Stats:** métricas de experiencia y proyectos.
- **About:** perfil profesional y "quick facts".
- **Core Expertise:** áreas de especialización (IT Operations, Software Development, AI Automation).
- **Skills:** 7 categorías (IT Infrastructure, Cloud & BaaS, Frontend, Backend & Databases, Security & Networking, Automation & AI, Game Development).
- **Experience:** timeline con experiencia laboral y freelance.
- **Projects:** proyectos con estado Live/Local y enlaces.
- **Case Studies:** estudios de caso destacados.
- **Development Process:** metodología de trabajo.
- **Live Event:** sección de eventos/streams en vivo.
- **Skills Matrix:** matriz de competencias.
- **Current Projects:** proyectos en curso.
- **Why Hire Me:** razones de contratación.
- **Contact / Footer:** enlaces y copyright.

### Stack

- **React 19** + **Vite 8** + **Tailwind CSS 4**
- **framer-motion** (animaciones) y **lucide-react** (iconos)
- Lint con **Oxlint** · Fuente **Inter** local vía `@fontsource`
- Generación de CV en PDF con **Python + reportlab** y OG image con **Pillow**

### Scripts

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo (Vite) |
| `npm run build` | Build de producción (regenera también el CV en PDF) |
| `npm run lint` | Lint con Oxlint |
| `npm run preview` | Preview del build |

### Estructura

```txt
cv-landing/
├── index.html                    # Metadatos SEO (OG, Twitter Cards, JSON-LD)
├── public/
│   ├── CV_Eduardo_Rojas_Velasquez.pdf   # CV descargable
│   ├── og-image.png                     # Imagen para redes sociales (1200×630)
│   ├── favicon.svg / icons.svg
│   ├── robots.txt
│   └── sitemap.xml
├── scripts/
│   ├── generate_cv_pdf.py               # Genera el PDF (reportlab)
│   └── generate_og_image.py             # Genera la OG image (Pillow)
└── src/
    ├── main.jsx / App.jsx               # Entrada y composición de secciones
    ├── components/
    │   ├── Navbar, Hero, DemoPanel, QuickStats, About, CoreExpertise
    │   ├── Skills, Experience, Projects, CaseStudies, DevelopmentProcess
    │   └── LiveEvent, SkillsMatrix, CurrentProjects, WhyHireMe, Contact, Footer
    └── index.css                        # Tailwind + tema
```

### Despliegue

**Cloudflare Pages** (actual: `eduardo-cv.pages.dev`).

- Build command: `npm run build` · Output directory: `dist` · Production branch: `main`
- El proyecto actual usa *Direct Upload*: se publica subiendo la carpeta `dist` (dashboard o `npx wrangler pages deploy dist --project-name eduardo-cv`).
- Compatible también con GitHub Pages, Netlify o Vercel.

### Contacto

- Email: `norascript@gmail.com` · Teléfono: `809-943-1727`
- Ubicación: Santo Domingo, República Dominicana
- [LinkedIn](https://linkedin.com/in/eduardo-velasquez-437a3422a) · [GitHub](https://github.com/NostradamesP)

---

## 🇺🇸 English

### Overview

A single-page CV website for **Eduardo Rojas Velasquez**: bilingual portfolio with live interactive demos of production systems, downloadable PDF CV, SEO (Open Graph, JSON-LD, sitemap) and Cloudflare Pages deployment.

**Live demo:** <https://eduardo-cv.pages.dev/>

### Sections

- **Hero:** typewriter role animation, key technologies, contact cards and social links.
- **Live Demos (`#demos`):** interactive panel right after the hero with tabs showing the real production systems:
  - **NoraHR Kanban** — interactive board simulation (statuses, task cards, drag & click).
  - **FactuRD** — e-CF generation, invoice templates and FIFO Kardex.
  - **Websites** — live iframes of deployed sites: Event Pro Jinaite, FactuRD, Tienda Xtrógeno, Solo el Music, Sharks Launch Pad and Nora Signage Portal.
  - **Digital Signage** — the real Nora Signage Portal landing loaded live.
- **Quick Stats:** experience and project metrics.
- **About:** professional profile and quick facts.
- **Core Expertise:** specialization areas (IT Operations, Software Development, AI Automation).
- **Skills:** 7 categories (IT Infrastructure, Cloud & BaaS, Frontend, Backend & Databases, Security & Networking, Automation & AI, Game Development).
- **Experience:** employment and freelance timeline.
- **Projects:** projects with Live/Local status and links.
- **Case Studies:** featured case studies.
- **Development Process:** working methodology.
- **Live Event:** live events/streams section.
- **Skills Matrix:** competency matrix.
- **Current Projects:** ongoing projects.
- **Why Hire Me:** reasons to hire.
- **Contact / Footer:** links and copyright.

### Stack

- **React 19** + **Vite 8** + **Tailwind CSS 4**
- **framer-motion** and **lucide-react**
- **Oxlint** for linting · Local **Inter** font via `@fontsource`
- PDF CV generation with **Python + reportlab** and OG image with **Pillow**

### Scripts

| Command | Description |
|---|---|
| `npm run dev` | Vite dev server |
| `npm run build` | Production build (also regenerates the PDF CV) |
| `npm run lint` | Oxlint |
| `npm run preview` | Preview the production build |

### Structure

```txt
cv-landing/
├── index.html                    # SEO metadata (OG, Twitter Cards, JSON-LD)
├── public/
│   ├── CV_Eduardo_Rojas_Velasquez.pdf   # Downloadable CV
│   ├── og-image.png                     # Social sharing image (1200×630)
│   ├── favicon.svg / icons.svg
│   ├── robots.txt
│   └── sitemap.xml
├── scripts/
│   ├── generate_cv_pdf.py               # PDF generation (reportlab)
│   └── generate_og_image.py             # OG image generation (Pillow)
└── src/
    ├── main.jsx / App.jsx               # Entry point and section composition
    ├── components/
    │   ├── Navbar, Hero, DemoPanel, QuickStats, About, CoreExpertise
    │   ├── Skills, Experience, Projects, CaseStudies, DevelopmentProcess
    │   └── LiveEvent, SkillsMatrix, CurrentProjects, WhyHireMe, Contact, Footer
    └── index.css                        # Tailwind + theme
```

### Deployment

**Cloudflare Pages** (currently `eduardo-cv.pages.dev`).

- Build command: `npm run build` · Output directory: `dist` · Production branch: `main`
- The project currently uses *Direct Upload*: publish by uploading the `dist` folder (dashboard or `npx wrangler pages deploy dist --project-name eduardo-cv`).
- Also works with GitHub Pages, Netlify or Vercel.

### Contact

- Email: `norascript@gmail.com` · Phone: `809-943-1727`
- Location: Santo Domingo, Dominican Republic
- [LinkedIn](https://linkedin.com/in/eduardo-velasquez-437a3422a) · [GitHub](https://github.com/NostradamesP)

---

© Eduardo Rojas Velasquez
