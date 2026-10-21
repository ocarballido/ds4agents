# ds4agents: Estado

Qué sigue abierto. **Corto a propósito**: se carga al empezar cada sesión. El detalle de lo hecho va en `docs/historial.md`.

Última actualización: 2026-10-21, sesión de contenido. Revisión de contenido: `docs/` en el repositorio de la librería (G20), Claude Design dentro de Claude (G21), término "scorecard" y cómo ejecutar los scripts. Antes, el mismo día: marca nueva (G19), CodePreview (G18) y web publicada en Vercel (G17).

## Plan general

| Paso | Frente | Qué | Estado |
|---|---|---|---|
| 1 | Desarrollo | Clon, limpieza y estructura | Hecho (2026-10-20) |
| 2 | Contenido | Validar el tono y el formato de la página modelo | Hecho (2026-10-20): tono aprobado; enfoque de guía (G10) |
| 3 | Contenido | Escribir las páginas a partir de `docs/guia-fuente.md` | Hecho (2026-10-20): 53 páginas, con listas de comprobación (G14); revisión de Oscar pendiente |
| 4 | Diseño | Marca definitiva e ilustración de portada (G16) | Hecho (2026-10-20) |
| 5 | Desarrollo | Despliegue en Vercel y dominio `ds4agents.com` (G17) | Hecho (2026-10-21) |
| 6 | Diseño y desarrollo | Aplicar la guía al propio sistema (G22), en designtokens101 | En curso: fase 1, auditoría del piloto |

## Pendiente

- **Fase 6 (G22):** decidir cómo consume ds4agents el `docs/` de designtokens101 (enlace, submódulo o paquete).
- **G24:** separar la marca de la librería en TokensDS (Oscar).

- **CodePreview (G18):** los tres puntos abiertos de V60 (contraste de la pestaña en `active` en Dark, `hover` en el carril, código en línea de la vista previa) se deciden en designtokens101 y se copian aquí (G02).

- **`Takeaways` (G15):** si designtokens101 cambia el componente, copiar el cambio aquí sin perder la excepción.
- **Iconos (G16):** `icon.svg`, `favicon.ico` y `apple-icon.png` siguen siendo la marca anterior, y el emoticon del que salían (228:6907) ya no existe en Figma. Falta un marco de icono en la sección de la marca (298:6831).
- **Favicon en pestañas oscuras (G16):** el verde del emoticon tiene poco contraste sobre una pestaña oscura del navegador.
- **Revisión de Oscar:** leer las 53 páginas en el navegador. Criterio propio marcado como recomendación: rúbrica, scorecard, extensiones por nivel, categorías funcionales, estructura de páginas, plantillas y scripts.
- **Sin verificar (no se afirma):** si las guidelines de Figma llegan por el servidor MCP; si la descripción de un componente llega en el contexto del MCP; si Figma exporta `$deprecated`; qué pasa con las instancias de un componente oculto al publicar.
- **Scripts de la guía:** `build-figma-guidelines.mjs`, `validate-docs.mjs` y `check-ui.sh` probados en la sesión con archivos de ejemplo, no en un sistema real.
- **Claude Design (G21):** la web independiente (claude.ai/design) cierra el **14 de diciembre de 2026**. Ese día, revisar `/agent-layer/claude-design` y quitar o reducir el aviso de migración. Los sistemas de diseño en Claude siguen en beta (Pro, Max, Team y Enterprise).
- **Sin verificar en la ayuda de Claude:** si volver a ejecutar `/design-sync` actualiza un sistema existente o crea otro, y cómo se edita a mano un sistema creado en Claude (la ayuda solo lo dice de los migrados). La página lo dice así.
- **Fuentes que caducan pronto:** sistemas de diseño en Claude (beta) y las capacidades de IA de Storybook (preview). Revisar `lastReviewed` antes de publicar.
