# Eduardo Rojas Velasquez — CV / Portfolio

> IT Support Specialist & Full-Stack Developer · one-page professional CV website

Sitio one-page de currículum (CV) para **Eduardo Rojas Velasquez**, IT Support Specialist & Full-Stack Developer. Incluye hero con efecto typewriter, perfil, skills, experiencia, proyectos y contacto, con CV descargable en PDF.

---

## 🇪🇸 Español

### Descripción

Carta de presentación profesional en una sola vista:

- **Hero:** rol animado (typewriter), tecnologías destacadas, tarjetas de contacto y redes.
- **About:** perfil profesional y "quick facts".
- **Skills:** 7 categorías (IT Infrastructure, Cloud & BaaS, Frontend, Backend & Databases, Security & Networking, Automation & AI, Game Development).
- **Experience:** timeline con experiencia laboral (IT Support Specialist en Carol Morgan School) y freelance (Full-Stack Developer & Software Architect).
- **Projects:** 9 proyectos con estado Live/Local y enlaces.
- **Contact / Footer:** enlaces y copyright.

### Stack

- **React 19** + **Vite 8** + **Tailwind CSS 4**
- **framer-motion** (animaciones) y **lucide-react** (iconos)
- Lint con **Oxlint** · Fuente **Inter** local vía `@fontsource`
- Generación de CV en PDF con **Python + reportlab**

### Scripts

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo (Vite) |
| `npm run build` | Build de producción (genera también el CV en PDF) |
| `npm run lint` | Lint con Oxlint |
| `npm run preview` | Preview del build |

### Estructura

```txt
cv-landing/
├── index.html
├── public/
│   └── CV_Eduardo_Rojas_Velasquez.pdf   # CV descargable
├── scripts/
│   └── generate_cv_pdf.py               # Genera el PDF (reportlab)
└── src/
    ├── main.jsx / App.jsx               # Entrada y composición de secciones
    ├── components/                      # Navbar, Hero, About, Skills, Experience, Projects, Footer
    └── index.css                        # Tailwind + tema
```

### Despliegue

Compatible con **Cloudflare Pages** (actual: `eduardo-cv.pages.dev`) o cualquier hosting estático (GitHub Pages, Netlify, Vercel).

### Contacto

- Email: `norascript@gmail.com` · Teléfono: `809-943-1727`
- Ubicación: Santo Domingo, República Dominicana
- [LinkedIn](https://linkedin.com/in/eduardo-velasquez-437a3422a) · [GitHub](https://github.com/NostradamesP)

---

## 🇺🇸 English

### Overview

A single-page CV website for **Eduardo Rojas Velasquez**, IT Support Specialist & Full-Stack Developer, featuring an animated hero, skills, experience, projects and a downloadable PDF CV.

### Sections

- **Hero:** typewriter role animation, key technologies, contact cards and social links.
- **About:** professional profile and quick facts.
- **Skills:** 7 categories (IT Infrastructure, Cloud & BaaS, Frontend, Backend & Databases, Security & Networking, Automation & AI, Game Development).
- **Experience:** timeline covering employment (IT Support Specialist at Carol Morgan School) and freelance work (Full-Stack Developer & Software Architect).
- **Projects:** 9 projects with Live/Local status and links.
- **Contact / Footer:** links and copyright.

### Stack

- **React 19** + **Vite 8** + **Tailwind CSS 4**
- **framer-motion** and **lucide-react**
- **Oxlint** for linting · Local **Inter** font via `@fontsource`
- PDF CV generation with **Python + reportlab**

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
├── index.html
├── public/
│   └── CV_Eduardo_Rojas_Velasquez.pdf   # Downloadable CV
├── scripts/
│   └── generate_cv_pdf.py               # PDF generation (reportlab)
└── src/
    ├── main.jsx / App.jsx               # Entry point and section composition
    ├── components/                      # Navbar, Hero, About, Skills, Experience, Projects, Footer
    └── index.css                        # Tailwind + theme
```

### Deployment

Works with **Cloudflare Pages** (currently `eduardo-cv.pages.dev`) or any static host (GitHub Pages, Netlify, Vercel).

### Contact

- Email: `norascript@gmail.com` · Phone: `809-943-1727`
- Location: Santo Domingo, Dominican Republic
- [LinkedIn](https://linkedin.com/in/eduardo-velasquez-437a3422a) · [GitHub](https://github.com/NostradamesP)

---

© Eduardo Rojas Velasquez
