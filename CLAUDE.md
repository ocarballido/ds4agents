# ds4agents

Guía web abierta (G10) que reúne nuestra investigación sobre cómo documentar un sistema de diseño de Figma y conectarlo con agentes de IA (Claude Code, Claude Design, MCP) para que usen sus componentes, tokens y reglas. No es un curso: se escribe como documentación que compartimos con la comunidad (`content/README.md`). Es un clon técnico de DesignToken101 (https://designtokens101.com): mismo stack, mismo sistema de diseño y mismos componentes. Autor: Oscar Carballido.

Los documentos de `docs/` son la fuente de verdad compartida entre las sesiones de contenido, diseño y desarrollo. Escribe siempre en español.

## Lee primero

@docs/decisiones.md
@docs/estado.md

Lee bajo demanda, cuando el trabajo lo pida:
- `docs/historial.md`: detalle de lo hecho en cada frente.
- `docs/sistema/`: especificación del sistema de diseño **heredada de designtokens101** (tokens, componentes, entrega de diseño, paso a código). Los códigos de decisión que aparecen ahí (V12, D17, S27…) y en los comentarios del código son los de designtokens101.
- `docs/sistema/libreria/`: la documentación del sistema (componentes, fundamentos, patrones, reglas y contenido), copia literal del `docs/` de designtokens101 (G35). No se edita aquí: un cambio se hace primero en designtokens101 y se copia. Como las copias son literales, sus rutas `docs/…` corresponden aquí a `docs/sistema/libreria/…` (por ejemplo, `docs/components/callout.md` → `docs/sistema/libreria/components/callout.md`).
- `docs/guia-fuente.md`: índice de la guía extendida de la que sale el contenido, con el reparto por capítulo.
- `content/README.md`: convenciones de las páginas MDX.

## Excepciones a la librería

- **Takeaways (G15):** usa el icono `BookOpenText` de lucide-react, no `li:graduation-cap`. Figma y `docs/sistema/libreria/components/takeaways.md` muestran el birrete; en ds4agents manda esta excepción.
- **Página de lección (`patterns/lesson-page.md`):**
  - En ds4agents, el capítulo 98 es Plantillas; no hay `content/es/98-tools/`.
  - `ColorScale` no existe en ds4agents (G06).
  - La página de ds4agents no es una lección (G10): para su estructura mandan `content/README.md`, la lista de comprobación de cada capítulo (G14) y el cierre "En resumen".

## Reglas de trabajo

- **No improvises sobre la especificación.** Si algo falta o se contradice, plantea las opciones a Oscar y espera su decisión.
- **Quien decide, escribe:** en el mismo commit, la decisión en `docs/decisiones.md` y el documento afectado. Numeración de ds4agents: `G01`, `G02`…
- **Sistema de diseño compartido (G02):** no cambies tokens, estilos ni componentes heredados por tu cuenta. Un cambio en el sistema se hace primero en designtokens101 y se copia aquí.
- **Al terminar un bloque de trabajo**, añade el detalle a `docs/historial.md` y deja en `docs/estado.md` solo lo que sigue abierto.
- **Verifica antes de afirmar:** cada afirmación sobre una herramienta (Figma, Claude, Storybook, DTCG) enlaza a su documentación oficial. Lo no verificado no se publica. Separa lo que dice la fuente de la recomendación de ds4agents (`<Callout variant="recommendation">`).
- **Solo tokens:** ningún color, espacio, radio, grosor ni tamaño escrito a mano en los componentes. Todo sale de las variables `--t101-*` (prefijo heredado, G03).
- **Accesibilidad (WCAG 2.2 AA):** foco visible con `:focus-visible`, objetivos de 24 × 24 px como mínimo, sin scroll horizontal de página a 320 px.

## Estructura del repositorio

- `content/es/NN-seccion/NN-pagina.mdx`: páginas de la guía, una carpeta por capítulo. Solo español.
- `docs/`: documentos compartidos.
- `tools/`: comprobación del contenido compilado (`npm run build && npm run check:content`), comprobación de tokens (`npm run check:tokens`), normalización de la exportación de Figma (`figma-to-dtcg.mjs`) y scripts de escalas y contraste del sistema (`python3 tools/scales.py`, `python3 tools/semantic.py`).
- `tests/`: `npm test` comprueba la estructura del contenido (frontmatter y `meta.json`).
- `src/`: la aplicación Next.js. `app/[section]/[lesson]/page.tsx` carga las lecciones; `lib/content.ts` lee `content/`; `mdx-components.tsx`, los componentes del MDX.
- `messages/es.json`: textos de la interfaz (next-intl).
- `tokens/`: el sistema de tokens de designtokens101. `src/styles/tokens.css` y `src/styles/theme.css` son **generados**: `npm run tokens` y después `npm run check:tokens`.

## Stack

Next.js (App Router), TypeScript, Tailwind CSS v4, next-intl, `@next/mdx`, Terrazzo, despliegue en Vercel.
