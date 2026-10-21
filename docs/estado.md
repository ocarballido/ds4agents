# ds4agents: Estado

Qué sigue abierto. **Corto a propósito**: se carga al empezar cada sesión. El detalle de lo hecho va en `docs/historial.md`.

Última actualización: 2026-10-21, sesión de desarrollo. Web publicada en Vercel con `ds4agents.com` (G17).

## Plan general

| Paso | Frente | Qué | Estado |
|---|---|---|---|
| 1 | Desarrollo | Clon, limpieza y estructura | Hecho (2026-10-20) |
| 2 | Contenido | Validar el tono y el formato de la página modelo | Hecho (2026-10-20): tono aprobado; enfoque de guía (G10) |
| 3 | Contenido | Escribir las páginas a partir de `docs/guia-fuente.md` | Hecho (2026-10-20): 53 páginas, con listas de comprobación (G14); revisión de Oscar pendiente |
| 4 | Diseño | Marca definitiva e ilustración de portada (G16) | Hecho (2026-10-20) |
| 5 | Desarrollo | Despliegue en Vercel y dominio `ds4agents.com` (G17) | Hecho (2026-10-21) |

## Pendiente
- **Google Search Console:** dar de alta `ds4agents.com` (propiedad de dominio, verificación por DNS) y enviar `https://ds4agents.com/sitemap.xml`.

- **`Takeaways` (G15):** si designtokens101 cambia el componente, copiar el cambio aquí sin perder la excepción.
- **Tamaño de los logotipos (G16):** a 44 px de alto, "DS4Agents" mide unos 9 px de alto en la cabecera y unos 7 px en el pie (34 px). Se lee en la cabecera; en el pie es pequeño. Decidir si el pie sube de tamaño.
- **Favicon en pestañas oscuras (G16):** el verde del emoticon tiene poco contraste sobre una pestaña oscura del navegador.
- **Revisión de Oscar:** leer las 53 páginas en el navegador. Criterio propio marcado como recomendación: rúbrica, scorecard, extensiones por nivel, categorías funcionales, estructura de páginas, plantillas y scripts.
- **Sin verificar (no se afirma):** si las guidelines de Figma llegan por el servidor MCP; si la descripción de un componente llega en el contexto del MCP; si Figma exporta `$deprecated`; qué pasa con las instancias de un componente oculto al publicar.
- **Scripts de la guía:** `build-figma-guidelines.mjs`, `validate-docs.mjs` y `check-ui.sh` probados en la sesión con archivos de ejemplo, no en un sistema real.
- **Fuentes que caducan pronto:** Claude Design (research preview) y las capacidades de IA de Storybook (preview). Revisar `lastReviewed` antes de publicar.
