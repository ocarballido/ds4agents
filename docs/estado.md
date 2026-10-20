# ds4agents: Estado

Qué sigue abierto. **Corto a propósito**: se carga al empezar cada sesión. El detalle de lo hecho va en `docs/historial.md`.

Última actualización: 2026-10-20, sesión de desarrollo. Oscar aprueba el tono de la página modelo y pide enfoque de guía, no de curso (G10). Logotipos, favicon e imagen para compartir desde Figma (G11).

## Plan general

| Paso | Frente | Qué | Estado |
|---|---|---|---|
| 1 | Desarrollo | Clon, limpieza y estructura | Hecho (2026-10-20) |
| 2 | Contenido | Validar el tono y el formato de la página modelo | Hecho (2026-10-20): tono aprobado; enfoque de guía (G10) |
| 3 | Contenido | Escribir las 49 páginas restantes a partir de `docs/guia-fuente.md` | Pendiente |
| 4 | Diseño | Logotipo e imagen para compartir (G11, hecho) e ilustración de portada (G08) | Portada pendiente (Oscar) |
| 5 | Desarrollo | Despliegue en Vercel y dominio `ds4agents.com` | Pendiente |

## Pendiente

- **Portada (G08):** sin ilustración; `src/app/page.tsx` tiene el hueco de designtokens101 quitado.
- **`Takeaways` usa el icono `GraduationCap` (birrete),** que suena a curso. Es un componente heredado (G02): cambiarlo exige decidirlo en designtokens101 o aceptar aquí una excepción. Decide Oscar.
- **Logotipo de la cabecera:** a 44 px de alto, "DS" y "4" quedan a unos 8 px; revisar en el navegador si se leen bien.
- **Páginas:** todas menos la modelo llevan `<Callout variant="pending">`. Cada una se escribe con las reglas de `content/README.md`: fuentes oficiales enlazadas, recomendaciones propias en `<Callout variant="recommendation">` (la rúbrica, el scorecard y las extensiones orientativas de la guía son criterio propio).
- **Fuentes que caducan pronto:** Claude Design (research preview) y las capacidades de IA de Storybook (preview). Revisar `lastReviewed` antes de publicar.
- **Plantillas (98):** decidir si cada plantilla tiene su página o van todas en una.
