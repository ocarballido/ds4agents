# ds4agents: Estado

Qué sigue abierto. **Corto a propósito**: se carga al empezar cada sesión. El detalle de lo hecho va en `docs/historial.md`.

Última actualización: 2026-10-20, sesión de contenido. Las 53 páginas de la guía escritas con las fuentes revisadas ese día, incluidas las novedades de Figma de octubre de 2026 (guidelines de librería, instrucciones para el MCP en Code Connect) y de Claude Design (integrado en Claude). Sin páginas pendientes.

## Plan general

| Paso | Frente | Qué | Estado |
|---|---|---|---|
| 1 | Desarrollo | Clon, limpieza y estructura | Hecho (2026-10-20) |
| 2 | Contenido | Validar el tono y el formato de la página modelo | Hecho (2026-10-20): tono aprobado; enfoque de guía (G10) |
| 3 | Contenido | Escribir las páginas a partir de `docs/guia-fuente.md` | Hecho (2026-10-20): 53 páginas; revisión de Oscar pendiente |
| 4 | Diseño | Logotipo e imagen para compartir (G11, hecho) e ilustración de portada (G08) | Portada pendiente (Oscar) |
| 5 | Desarrollo | Despliegue en Vercel y dominio `ds4agents.com` | Pendiente |

## Pendiente

- **Portada (G08):** sin ilustración; `src/app/page.tsx` tiene el hueco de designtokens101 quitado.
- **`Takeaways` usa el icono `GraduationCap` (birrete),** que suena a curso. Es un componente heredado (G02): cambiarlo exige decidirlo en designtokens101 o aceptar aquí una excepción. Decide Oscar.
- **Logotipo de la cabecera:** a 44 px de alto, "DS" y "4" quedan a unos 8 px; revisar en el navegador si se leen bien.
- **Revisión de Oscar:** leer las 53 páginas en el navegador. Criterio propio marcado como recomendación: rúbrica, scorecard, extensiones por nivel, categorías funcionales, estructura de páginas, plantillas y scripts.
- **Sin verificar (no se afirma):** si las guidelines de Figma llegan por el servidor MCP; si la descripción de un componente llega en el contexto del MCP; si Figma exporta `$deprecated`; qué pasa con las instancias de un componente oculto al publicar.
- **Scripts de la guía:** `build-figma-guidelines.mjs`, `validate-docs.mjs` y `check-ui.sh` probados en la sesión con archivos de ejemplo, no en un sistema real.
- **Fuentes que caducan pronto:** Claude Design (research preview) y las capacidades de IA de Storybook (preview). Revisar `lastReviewed` antes de publicar.
