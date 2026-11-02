# ds4agents: Estado

Qué sigue abierto. **Corto a propósito**: se carga al empezar cada sesión. El detalle de lo hecho va en `docs/historial.md`.

Última actualización: 2026-11-02, G40: fase 7 terminada y, con ella, G22; hallazgos principales de la primera tanda de evaluaciones en el capítulo 7. Antes, 2026-11-01: G39 (serie de Figma para su agente) y fase 6 terminada (G38).

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

- **Después de G22, en designtokens101:** Oscar revisa las dos propuestas de `CONTRIBUTING.md` y decide los hallazgos de `evals/evals.md` ("Sin decidir"); publicar TokensDS con la nota de la versión 1.3.0. Lo abierto está en el `proyecto/estado.md` de designtokens101.
- **DesignToken101 en Claude:** desde el traslado, `/design-sync` no llega a Claude ("Move again" o pedírselo a Claude, antes del 14 de diciembre de 2026).

- **De G39, en designtokens101:** decidir si los marcos Lesson de TokensDS (Templates, 35:843…) pasan a ser ejemplos (componentes en una página Examples o con el sufijo `_example`), y revisar si el `components.md` de las guidelines repite las descripciones de los componentes (Figma pide la guía de cada componente en su descripción).
- **De G39, para Oscar:** ver el vídeo "Make your Figma design system agent-ready" (no se pudo leer su transcripción) y confirmar que no dice nada que no esté en los artículos, por ejemplo en "Keep variants focused". Sin decidir: la opción C (consejos para preparar la librería con el agente de Figma: renombrar capas, auto layout, descripciones en bloque, revisión antes de publicar, Check designs). El artículo del servidor MCP se titula ahora "Guide to the Figma MCP server"; los enlaces dicen "Figma MCP server".

- **CodePreview (G18):** los tres puntos abiertos de V60 (contraste de la pestaña en `active` en Dark, `hover` en el carril, código en línea de la vista previa) se deciden en designtokens101 y se copian aquí (G02).

- **`Takeaways` (G15):** si designtokens101 cambia el componente, copiar el cambio aquí sin perder la excepción.
- **Iconos (G16):** `icon.svg`, `favicon.ico` y `apple-icon.png` siguen siendo la marca anterior, y el emoticon del que salían (228:6907) ya no existe en Figma. Falta un marco de icono en la sección de la marca (298:6831).
- **Favicon en pestañas oscuras (G16):** el verde del emoticon tiene poco contraste sobre una pestaña oscura del navegador.
- **Revisión de Oscar:** leer las 53 páginas en el navegador. Criterio propio marcado como recomendación: rúbrica, scorecard, extensiones por nivel, categorías funcionales, estructura de páginas, plantillas y scripts.
- **Sin verificar (no se afirma):** si las guidelines de Figma llegan por el servidor MCP; si Figma exporta `$deprecated`; qué pasa con las instancias de un componente oculto al publicar; por qué el mapa de un marco devuelve iconos sueltos de componentes no conectados (pendiente en designtokens101); si los ejemplos de la librería llegan por el servidor MCP y si un ejemplo oculto al publicar sigue contando; si el agente de Figma elige una skill por su descripción (la ayuda dice que se invoca con `/` y también habla de invocación automática).
- **Comprobado con el servidor MCP remoto (2026-10-21), ya en el capítulo 2:** la descripción y los dev resources llegan con `get_design_context`; las anotaciones, solo en un componente o una variante, no en el conjunto. Ya en el capítulo 3 (`/tokens/descriptions-in-dtcg`): ni `get_design_context` ni `get_variable_defs` entregan la descripción de una variable. Es una prueba en un archivo: repetirla si cambia el servidor.
- **Scripts de la guía:** `validate-docs.mjs` y `build-figma-guidelines.mjs` ya se usan, adaptados, en designtokens101 (D67); `check-ui.sh` sigue probado solo con archivos de ejemplo.
- **Claude Design (G21, G36):** la web independiente (claude.ai/design) cierra el **14 de diciembre de 2026**. Antes, comprobar si Anthropic documenta qué hace `/design-sync` después del cierre; ese día, revisar `/agent-layer/claude-design`, el capítulo 4 (`one-source-many-channels`) y la lista de publicación de `/evaluation/changelog`, y quitar o reducir el aviso. Los sistemas de diseño en Claude siguen en beta (Pro, Max, Ultra, Team y Enterprise). La ayuda de Claude Design cambió el 2026-10-31: revisarla otra vez antes de publicar.
- **Sin verificar en la ayuda de Claude:** qué hace `/design-sync` después del cierre de claude.ai/design, y si un sistema creado desde un chat se edita a mano (la ayuda solo dice que los movidos no).
- **Fuentes que caducan pronto:** sistemas de diseño en Claude (beta) y las capacidades de IA de Storybook (preview). Revisar `lastReviewed` antes de publicar.
