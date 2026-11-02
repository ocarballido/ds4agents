# ds4agents: Estado

Qué sigue abierto. **Corto a propósito**: se carga al empezar cada sesión. El detalle de lo hecho va en `docs/historial.md`.

Última actualización: 2026-11-02, G41: cierre de lo abierto (CodePreview `stable`, G39, `check-ui.sh`). Antes, el mismo día, G40: fase 7 terminada y, con ella, G22; hallazgos principales de la primera tanda de evaluaciones en el capítulo 7. Antes, 2026-11-01: G39 (serie de Figma para su agente) y fase 6 terminada (G38).

## Plan general

| Paso | Frente | Qué | Estado |
|---|---|---|---|
| 1 | Desarrollo | Clon, limpieza y estructura | Hecho (2026-10-20) |
| 2 | Contenido | Validar el tono y el formato de la página modelo | Hecho (2026-10-20): tono aprobado; enfoque de guía (G10) |
| 3 | Contenido | Escribir las páginas a partir de `docs/guia-fuente.md` | Hecho (2026-10-20): 53 páginas, con listas de comprobación (G14); revisión de Oscar pendiente |
| 4 | Diseño | Marca definitiva e ilustración de portada (G16) | Hecho (2026-10-20) |
| 5 | Desarrollo | Despliegue en Vercel y dominio `ds4agents.com` (G17) | Hecho (2026-10-21) |
| 6 | Diseño y desarrollo | Aplicar la guía al propio sistema (G22), en designtokens101 | Hecho (2026-11-02): fases 1 a 7 (G40) |

## Pendiente

Todo está decidido. Lo que queda necesita a Oscar o tiene fecha.

**Para Oscar**
- **En Figma (TokensDS):** publicar la librería con la nota de la versión 1.3.0 y subir `components.md` regenerado (`npm run docs:figma` en designtokens101). Detalle en el `proyecto/estado.md` de designtokens101.
- **Iconos (G16):** `icon.svg`, `favicon.ico` y `apple-icon.png` siguen siendo la marca anterior, y el emoticon del que salían (228:6907) ya no existe en Figma. Hace falta un marco de icono en la sección de la marca (298:6831), con contraste también sobre una pestaña oscura del navegador. Con el marco, se exportan los tres archivos y se actualiza G19.
- **Revisión:** leer las páginas en el navegador. Criterio propio marcado como recomendación: rúbrica, scorecard, extensiones por nivel, categorías funcionales, estructura de páginas, plantillas y scripts.

**Con fecha**
- **Claude Design (G21, G36):** la web independiente (claude.ai/design) cierra el **14 de diciembre de 2026**. Antes, comprobar si Anthropic documenta qué hace `/design-sync` después del cierre, y llevar a Claude lo que cambie del sistema ("Move again" o pedírselo a Claude). Ese día, revisar `/agent-layer/claude-design`, el capítulo 4 (`one-source-many-channels`) y la lista de publicación de `/evaluation/changelog`, y quitar o reducir el aviso.
- **Fuentes que caducan pronto:** sistemas de diseño en Claude (beta; la ayuda cambió el 2026-10-31) y las capacidades de IA de Storybook (preview). Revisar sus páginas y su `lastReviewed` en cada repaso.

**Sin verificar (la guía no lo afirma)**
- Figma: si las guidelines y los ejemplos de la librería llegan por el servidor MCP; si un ejemplo oculto al publicar sigue contando; si Figma exporta `$deprecated`; qué pasa con las instancias de un componente oculto al publicar; por qué el mapa de un marco devuelve iconos sueltos de componentes no conectados; si el agente de Figma elige una skill por su descripción.
- Claude: qué hace `/design-sync` después del cierre de claude.ai/design, y si un sistema creado desde un chat se edita a mano (la ayuda solo dice que los movidos no).
- Las pruebas con el servidor MCP remoto (capítulos 2 y 3, 2026-10-21) son de un archivo: repetirlas si cambia el servidor.
