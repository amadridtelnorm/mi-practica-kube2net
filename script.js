# Kube2net — Landing Page

Landing page para **Kube2net** (comunicaciones unificadas para el piso financiero).
Disponible en **español** e **inglés**. Hecha en HTML + CSS + JavaScript vanilla, sin build ni dependencias.

---

## 📁 Archivos del proyecto

```
Kube2net.html         → Landing en ESPAÑOL (página principal)
Kube2net-EN.html      → Landing en INGLÉS
Kube2net-print.html   → Versión optimizada para imprimir / exportar a PDF (español)

styles.css            → Estilos compartidos por las 3 páginas (tokens, secciones, modo oscuro)
script.js             → Lógica de la versión en español (tabs, tabla filtrable, tweaks)
script-en.js          → Lógica de la versión en inglés

assets/               → Imágenes reales del producto
  ├── image2.png      → Login
  ├── image4.png      → Create Conference
  ├── image6.png      → My Conferences
  ├── image7.png      → Grid View (imagen principal del hero)
  ├── image9.png      → Configure Button
  ├── image11.png     → Call History
  ├── image12.png     → AI Transcription Search
  ├── image13.png     → Recording Details
  ├── image14.png     → K2N Gateway K2NN100 (foto del hardware)
  ├── image18.png     → Diagrama oficial de arquitectura
  └── image19.png     → Logo Kube2net
```

> ⚠️ Las imágenes `image1, 3, 5, 8, 10, 15, 16, 17` del documento original NO se usan en la landing y no se incluyen.

---

## 🔗 Qué archivo necesita qué

| Página | Necesita |
|---|---|
| `Kube2net.html` (ES) | `styles.css` + `script.js` + `assets/` |
| `Kube2net-EN.html` (EN) | `styles.css` + `script-en.js` + `assets/` |
| `Kube2net-print.html` | `styles.css` + `script.js` + `assets/` |

**Todos los archivos deben mantenerse en la misma estructura de carpetas.** Si mueves los HTML, deja `styles.css`, los `.js` y la carpeta `assets/` junto a ellos.

---

## 🚀 Cómo correrlo localmente

No requiere instalación. Opción rápida:

```bash
# Con Python:
python3 -m http.server 8000
# o con Node:
npx serve .
```

Luego abre `http://localhost:8000/Kube2net.html` en el navegador.

---

## 🌐 Publicar en GitHub Pages

1. Sube todos estos archivos a un repositorio.
2. En el repo: **Settings → Pages → Source: Deploy from a branch → `main` / root**.
3. La página quedará en `https://TU-USUARIO.github.io/TU-REPO/Kube2net.html`.

> Si quieres que la página principal sea la de español, renombra `Kube2net.html` a `index.html`.

---

## 🎨 Sistema de diseño

- **Color de acento**: `#F47820` (naranja Kube2net) — variable `--accent` en `:root` de `styles.css`
- **Tipografía**: Geist (display + body), Geist Mono (etiquetas técnicas) — desde Google Fonts
- **Modo oscuro**: se aplica con `data-mode="dark"` en `<html>`
- **Temas alternativos**: `data-theme="orange|amber|graphite|crimson"`

---

## ✏️ Cómo editar contenido

- **Tabla de funcionalidades**: edita el array `FEATURES` en `script.js` (ES) / `script-en.js` (EN).
- **Modelos de adquisición**: edita el array `MODELS` en los mismos archivos.
- **Datos de contacto**: busca `apalacios@teltech-inc.com` y `+1 (972) 743-3325` en los HTML.
- **Imágenes**: reemplaza los archivos en `assets/` manteniendo los nombres.

---

## ⚠️ Pendientes para producción (para el equipo de desarrollo)

1. **Formulario de demo**: hoy el CTA usa `mailto:`. Conectar un formulario real al CRM/inbox.
2. **Analytics**: agregar Google Analytics 4 (o Plausible) en el `<head>`.
3. **SEO**: agregar Open Graph, Twitter Cards, favicon, `sitemap.xml`, `robots.txt`.
4. **Imágenes**: si hay versiones de mayor resolución, reemplazarlas. Considerar convertir a WebP.
5. **Legal**: páginas de Privacidad y Términos (importante para clientes financieros).
6. **Performance**: minificar CSS/JS en producción.

---

© 2026 Teltech Inc. · Kube2net™ — uso interno.
