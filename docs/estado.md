# ds4agents: Estado

Qué sigue abierto. **Corto a propósito**: se carga al empezar cada sesión. El detalle de lo hecho va en `docs/historial.md`.

Última actualización: 2026-10-20, sesión de contenido. Las prácticas pasan a ser listas de comprobación al final de cada capítulo (G14) y `Takeaways` usa `BookOpenText` en lugar del birrete (G15).

## Plan general

| Paso | Frente | Qué | Estado |
|---|---|---|---|
| 1 | Desarrollo | Clon, limpieza y estructura | Hecho (2026-10-20) |
| 2 | Contenido | Validar el tono y el formato de la página modelo | Hecho (2026-10-20): tono aprobado; enfoque de guía (G10) |
| 3 | Contenido | Escribir las páginas a partir de `docs/guia-fuente.md` | Hecho (2026-10-20): 53 páginas, con listas de comprobación (G14); revisión de Oscar pendiente |
| 4 | Diseño | Logotipo e imagen para compartir (G11, hecho) e ilustración de portada (G08) | Portada pendiente (Oscar) |
| 5 | Desarrollo | Despliegue en Vercel y dominio `ds4agents.com` | Pendiente |

## Pendiente

- **Portada (G08):** sin ilustración; `src/app/page.tsx` tiene el hueco de designtokens101 quitado.
- **Icono de `Takeaways` (G15):** comprobar en el navegador que `BookOpenText` se ve bien en Light y Dark. Si designtokens101 cambia `Takeaways`, copiar el cambio aquí sin perder la excepción.
- **Logotipo de la cabecera:** a 44 px de alto, "DS" y "4" quedan a unos 8 px; revisar en el navegador si se leen bien.
- **Revisión de Oscar:** leer las 53 páginas en el navegador. Criterio propio marcado como recomendación: rúbrica, scorecard, extensiones por nivel, categorías funcionales, estructura de páginas, plantillas y scripts.
- **Sin verificar (no se afirma):** si las guidelines de Figma llegan por el servidor MCP; si la descripción de un componente llega en el contexto del MCP; si Figma exporta `$deprecated`; qué pasa con las instancias de un componente oculto al publicar.
- **Scripts de la guía:** `build-figma-guidelines.mjs`, `validate-docs.mjs` y `check-ui.sh` probados en la sesión con archivos de ejemplo, no en un sistema real.
- **Fuentes que caducan pronto:** Claude Design (research preview) y las capacidades de IA de Storybook (preview). Revisar `lastReviewed` antes de publicar.
