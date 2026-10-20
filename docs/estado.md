# ds4agents: Estado

Qué sigue abierto. **Corto a propósito**: se carga al empezar cada sesión. El detalle de lo hecho va en `docs/historial.md`.

Última actualización: 2026-10-20, sesión de desarrollo. Clon inicial de designtokens101 con la estructura de módulos y una lección modelo (`start-here/why-agents-cant-see-figma`), subido a `main`. CI en GitHub Actions (G09): `npm test`, `check:tokens`, `build` y `check:content` sin errores.

## Plan general

| Paso | Frente | Qué | Estado |
|---|---|---|---|
| 1 | Desarrollo | Clon, limpieza y estructura | Hecho (2026-10-20) |
| 2 | Contenido | Validar el tono y el formato de la lección modelo | Pendiente (Oscar) |
| 3 | Contenido | Escribir las 49 lecciones restantes a partir de `docs/guia-fuente.md` | Pendiente |
| 4 | Diseño | Logotipo, imagen para compartir e ilustración de portada de ds4agents (G08) | Pendiente (Oscar) |
| 5 | Desarrollo | Despliegue en Vercel y dominio `ds4agents.com` | Pendiente |

## Pendiente

- **Marca (G08):** `public/brand/logo-*.svg` son provisionales; falta `public/brand/share.png` (1200 × 630) que usan los metadatos.
- **Lecciones:** todas menos la modelo llevan `<Callout variant="pending">`. Cada una se escribe con las reglas de `content/README.md`: fuentes oficiales enlazadas, recomendaciones propias en `<Callout variant="recommendation">` (la rúbrica, el scorecard y las extensiones orientativas de la guía son criterio propio).
- **Fuentes que caducan pronto:** Claude Design (research preview) y las capacidades de IA de Storybook (preview). Revisar `lastReviewed` antes de publicar.
- **Plantillas (98):** decidir si cada plantilla tiene su página o van todas en una.
