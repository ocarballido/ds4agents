# ds4agents: Estado

Qué sigue abierto. **Corto a propósito**: se carga al empezar cada sesión. El detalle de lo hecho va en `docs/historial.md`.

Última actualización: 2026-11-01, hallazgos de la fase 6 en el capítulo 6 (G36): conector de claude.ai para el MCP de Figma, `/design-sync` en dos pasos (sube a claude.ai/design y se mueve a Claude), `/design-login` y `_ds_sync.json`; datos de la ayuda de Claude Design puestos al día. Antes, 2026-10-23: copia del `docs/` de designtokens101 (G35) y excepción de G15 en `CLAUDE.md`.

## Plan general

| Paso | Frente | Qué | Estado |
|---|---|---|---|
| 1 | Desarrollo | Clon, limpieza y estructura | Hecho (2026-10-20) |
| 2 | Contenido | Validar el tono y el formato de la página modelo | Hecho (2026-10-20): tono aprobado; enfoque de guía (G10) |
| 3 | Contenido | Escribir las páginas a partir de `docs/guia-fuente.md` | Hecho (2026-10-20): 53 páginas, con listas de comprobación (G14); revisión de Oscar pendiente |
| 4 | Diseño | Marca definitiva e ilustración de portada (G16) | Hecho (2026-10-20) |
| 5 | Desarrollo | Despliegue en Vercel y dominio `ds4agents.com` (G17) | Hecho (2026-10-21) |
| 6 | Diseño y desarrollo | Aplicar la guía al propio sistema (G22), en designtokens101 | En curso: fases 1 a 5 terminadas (2026-10-22); fase 6 (capa de agente) en curso |

## Pendiente

- **Fase 6 (G22), en curso:**
  - Hecho en ds4agents: cómo consume el `docs/` de designtokens101 (copia en `docs/sistema/libreria/`, G35) y la excepción de G15 (`BookOpenText` en Takeaways) en `CLAUDE.md`.
  - Hecho en designtokens101: `AGENTS.md` (D73), skills `build-ui` y `review-ui` (D74), servidor MCP de Figma conectado (por el conector de claude.ai, no por el plugin) y el sistema DesignToken101 subido con `/design-sync` a claude.ai/design, probado en Light y Dark (D75).
  - Hecho en ds4agents: los hallazgos en el capítulo 6 (G36).
  - Preparado en designtokens101 (D76, 2026-11-01): `@kind other` en las variables `--tw-*` y en duración, curva y opacidad, y `Takeaways` en JSX en `takeaways.md` (ya copiado aquí). Falta, de Oscar: subirlo con `/design-sync` desde una sesión en designtokens101, comprobar en Claude Design si desaparecen los avisos y si `Takeaways` sale bien, y mover DesignToken101 a Claude **antes del 14 de diciembre de 2026**. Si `@kind` funciona o no, es un hallazgo para el capítulo 6.
  - Falta: paso 6 (Project, opcional, trabaja solo); la primera prueba con Claude Code del capítulo 6.

- **CodePreview (G18):** los tres puntos abiertos de V60 (contraste de la pestaña en `active` en Dark, `hover` en el carril, código en línea de la vista previa) se deciden en designtokens101 y se copian aquí (G02).

- **`Takeaways` (G15):** si designtokens101 cambia el componente, copiar el cambio aquí sin perder la excepción.
- **Iconos (G16):** `icon.svg`, `favicon.ico` y `apple-icon.png` siguen siendo la marca anterior, y el emoticon del que salían (228:6907) ya no existe en Figma. Falta un marco de icono en la sección de la marca (298:6831).
- **Favicon en pestañas oscuras (G16):** el verde del emoticon tiene poco contraste sobre una pestaña oscura del navegador.
- **Revisión de Oscar:** leer las 53 páginas en el navegador. Criterio propio marcado como recomendación: rúbrica, scorecard, extensiones por nivel, categorías funcionales, estructura de páginas, plantillas y scripts.
- **Sin verificar (no se afirma):** si las guidelines de Figma llegan por el servidor MCP; si Figma exporta `$deprecated`; qué pasa con las instancias de un componente oculto al publicar; por qué el mapa de un marco devuelve iconos sueltos de componentes no conectados (pendiente en designtokens101).
- **Comprobado con el servidor MCP remoto (2026-10-21), ya en el capítulo 2:** la descripción y los dev resources llegan con `get_design_context`; las anotaciones, solo en un componente o una variante, no en el conjunto. Ya en el capítulo 3 (`/tokens/descriptions-in-dtcg`): ni `get_design_context` ni `get_variable_defs` entregan la descripción de una variable. Es una prueba en un archivo: repetirla si cambia el servidor.
- **Scripts de la guía:** `validate-docs.mjs` y `build-figma-guidelines.mjs` ya se usan, adaptados, en designtokens101 (D67); `check-ui.sh` sigue probado solo con archivos de ejemplo.
- **Claude Design (G21, G36):** la web independiente (claude.ai/design) cierra el **14 de diciembre de 2026**. Antes, comprobar si Anthropic documenta qué hace `/design-sync` después del cierre; ese día, revisar `/agent-layer/claude-design`, el capítulo 4 (`one-source-many-channels`) y la lista de publicación de `/evaluation/changelog`, y quitar o reducir el aviso. Los sistemas de diseño en Claude siguen en beta (Pro, Max, Ultra, Team y Enterprise). La ayuda de Claude Design cambió el 2026-10-31: revisarla otra vez antes de publicar.
- **Sin verificar en la ayuda de Claude:** qué hace `/design-sync` después del cierre de claude.ai/design, y si un sistema creado desde un chat se edita a mano (la ayuda solo dice que los movidos no).
- **Fuentes que caducan pronto:** sistemas de diseño en Claude (beta) y las capacidades de IA de Storybook (preview). Revisar `lastReviewed` antes de publicar.
