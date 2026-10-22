# ds4agents: Historial

Detalle de lo hecho en cada frente, con fecha. Lo más reciente, arriba.

## 2026-10-22 · Diseño, desarrollo y contenido · Fase 4 de G22 terminada (G30)

- En designtokens101 (D67, commit 085a34a): `docs/` del piloto con el fundamento de color, cinco documentos de componente (CodePreview dentro de `code-block.md`), dos patrones (página de lección y lista de comprobación), voz y tono y reglas; guidelines de Figma generadas con `docs:figma` y subidas a TokensDS; `validate-docs` en CI; en Figma, línea Docs: y enlace de documentación al Markdown.
- Scripts de la guía comparados con los de designtokens101 y probados con las plantillas de la guía (`text-field.md` del capítulo 4, inventario de `/audit/checklist`, árbol de `docs/` de Por qué Markdown). Las diferencias de `tools/validate-docs.mjs` (listas en varias líneas, variantes como CodePreview) y de `tools/build-figma-guidelines.mjs` (grupo de componentes, borrado de la salida, tamaño por archivo) son adaptaciones al repositorio. Corregido en `09-validate-docs` (`lastReviewed` 2026-10-22): `tokens: []` pasaba como si tuviera tokens; ahora la lista vacía cuenta como vacía, y el texto lo dice.
- Errata en `03-tokens/02-semantic-first` y `03-tokens/04-checklist`: "dilo y propón el token que falta".

## 2026-10-21 · Contenido · Capítulo 3 con lo comprobado en el MCP (fase 3)

- `03-tokens/03-descriptions-in-dtcg` (`lastReviewed` 2026-10-21), en "De Figma a DTCG": `get_design_context` no entrega la descripción de las variables (da el nombre como `var(--…)` con su valor de reserva, los estilos de texto, las descripciones de componente y las anotaciones) y `get_variable_defs` tampoco (nombre y valor); el agente recibe las descripciones de token por el repositorio. Punto nuevo en "En resumen". Comprobado en designtokens101, commit 5eb5a04.
- `estado.md`: fuera de "Sin verificar"; añadido a lo comprobado con el servidor MCP remoto.

## 2026-10-21 · Desarrollo · Copia de D65 y D66 de designtokens101 (G02)

- Exportaciones de Figma copiadas de `main` de designtokens101 (commits 4896240 y c5eb8fe): `tokens/figma/semantic-color/` (Light y Dark), `tokens/figma/semantic-size/Value.tokens.json` y `tokens/figma/layout/` (Desktop y Mobile). `primitives/` y `code-only.tokens.json`, sin cambios. `npm run tokens` regenera `tokens/dtcg/` (idéntico al de designtokens101) y `src/styles/`: `--t101-radius-group` y las descripciones nuevas, sin rastro de `nested`. `tokens.css` solo difiere en las rutas de las fuentes de los tokens de código (`docs/…`).
- `tools/check-tokens.mjs`: punto 9 (descripciones de Semantic color, Semantic size y Layout no vacías y sin referencias internas), con la ruta de ds4agents (`docs/sistema/sistema-tokens-v1.md`).
- `CodeBlock.tsx` (carril de CodeTabs) y `ThemeToggle.tsx`: `rounded-300` pasa a `rounded-group`.
- `docs/sistema/sistema-tokens-v1.md` (versión 1.2.0, `radius/group` en §4.3 y §7, descripciones de los semánticos en §7, registro de cambios) y `docs/sistema/componentes-v1.md` (carril de CodeTabs con `radius/group`).
- No se copian `docs/rules/rules-tokens.md` ni `docs/inventory.md`: viven en designtokens101 (G22); cómo los consume ds4agents se decide en la fase 6.
- Cerrado en `estado.md` el pendiente de `radius/nested` en CodeTabs: aplicado en Figma y en código con D66.
- Rutas antiguas de la especificación heredada corregidas a `docs/sistema/` (`sistema-tokens-v1.md`, `componentes-v1.md`, `paso-7-tokens.md` y `entrega-diseno.md`) en `tokens/code-only.tokens.json` (y, regenerado, `tokens.css`), `terrazzo.config.mjs`, `tools/`, los comentarios de cabecera de `src/` y `docs/sistema/`. Queda sin cambiar `docs/investigacion-herramientas.md` en `tools/figma-to-dtcg.mjs`: no existe en ds4agents.

## 2026-10-21 · Diseño y desarrollo · Fase 3 de G22 terminada (G29)

- Tokens del piloto en designtokens101 (D65, commit 4896240): descripciones de 46 tokens en TokensDS con dos partes (para qué sirve y restricción principal), sin valor ni referencias internas; token nuevo `radius/nested` para un elemento dentro de un contenedor (creado el 2026-10-21 en la colección Semantic size de TokensDS, alias de `radius/300`, registrado en D65); `docs/rules/rules-tokens.md` con la regla de capas por categoría (color y texto solo semánticos o estilos de texto; espaciado y grosor de borde con su escala, sin capa semántica, S22); punto 9 de `check:tokens`, que vigila las descripciones. Scorecard del piloto de 1,88 a 2,00 en `docs/inventory.md`.
- `get_variable_defs` devuelve nombre y valor de cada variable, no la descripción (comprobado el 2026-10-21).
- Capítulo 3 (`lastReviewed` 2026-10-21): en `semantic-first`, recomendación para las escalas publicadas sin capa semántica, con la regla de designtokens101 como ejemplo; en la lista de comprobación, primera línea del ejemplo de `rules-tokens.md` con ese matiz y criterio nuevo ("La regla dice, por categoría, qué capa se usa").

## 2026-10-21 · Diseño y desarrollo · Fase 2 de G22 terminada (G28)

- Piloto preparado en TokensDS (D64 en designtokens101): marcos por nivel, capas por función, descripciones con la plantilla, diez anotaciones, dev resources al código y `anti-patterns.md` en las guidelines (V61). Inventario y scorecard en `docs/inventory.md` de designtokens101 (media de 1,50 a 1,88).
- Comprobación con el servidor MCP remoto de Figma (`get_design_context` en los ocho componentes, antes y después de los cambios): llegan la descripción, con los dev resources dentro, y las anotaciones como atributos `data-…-annotations`, pero solo si están en un componente o en una variante. También llegan las descripciones de los componentes anidados. La capa interna del icono llegaba con el nombre del icono por defecto (`li:circle-plus`); se renombró a `Glyph`.
- Capítulo 2 con lo comprobado (`lastReviewed` 2026-10-21): la descripción llega (03), anotaciones en la variante (04), dev resources dentro de la descripción (05), cómo aparecen en la respuesta (07) y el criterio de variables de la lista de comprobación, que ya no depende de `get_variable_defs` (08).
- La API de plugins no permite añadir dev resources ni gestionar guidelines: los pone y los sube una persona.

## 2026-10-21 · Diseño y desarrollo · Fase 1 de G22 terminada (G26 y G27)

- Inventario del piloto (G25) en designtokens101, `docs/inventory.md`, con lo comprobado en TokensDS: scorecard con media 1,50. Oscar resuelve las nueve decisiones pendientes del borrador.
- G26: categoría funcional `content` (Takeaways, CodeBlock, bloques de código con vista previa; Callout es `feedback`), añadida a la lista de `/audit/figma-inventory`. Ningún otro sitio de `content/` ni los scripts de la guía (`validate-docs` no comprueba categorías) enumeran las categorías; `docs/guia-fuente.md` es el índice de la fuente y no se toca.
- G27: el estado no depende de la documentación (columna Doc). Corregida la fila `beta` de `/audit/figma-inventory`, que ahora coincide con el ejemplo de `/audit/checklist`, con una frase sobre la columna Doc. En `/evaluation/contributing`, "Sin todos los puntos, el estado del componente es beta" pasa a "el componente no está terminado", con una nota que remite a los estados del inventario; el resumen, igual.
- `lastReviewed` a 2026-10-21 en `contributing` (`figma-inventory` ya la tenía).
- `docs/guia-fuente.md`: la frase de la Definition of Done ("Sin todos los puntos, el estado es `beta`"), alineada con G27. Las dos filas con `data-display` (Tag y DataTable) no son componentes editoriales y se quedan así (G26).

## 2026-10-21 · Diseño y desarrollo · La guía aplicada al propio sistema

- Decisiones G22 a G25 (la librería es designtokens101, `proyecto/` allí, TokensDS como librería de Figma, piloto) y notas de procedencia de `docs/sistema/` apuntando a `proyecto/` de designtokens101 (P28).

## 2026-10-21 · Contenido · Revisión con G20 y G21

- `why-agents-cant-see-figma`: las filas de color y de botón de la tabla, como condicionales completas.
- `figma-inventory`: las siete categorías funcionales en lista, con qué entra y ejemplos; los valores van en inglés porque son los del inventario y del campo `category`.
- Término "scorecard" (la scorecard) en toda la web, en lugar de "puntuación de madurez". Fuera de su página se marca como rúbrica propia y enlaza a `/audit/maturity-scorecard#una-rúbrica-propia`. Entrada nueva en el glosario. `content/README.md` no tiene lista de términos.
- G20: `docs/` en la raíz del repositorio de la librería de componentes, en Requisitos (Código), Por qué Markdown y Plantillas. Árbol de `docs/` con los archivos como entradas e incluye `radius.md`; los nombres citados en los capítulos 4 y 6 y en Plantillas coinciden con él.
- `validate-docs`: sección "Cómo ejecutarlo" (`scripts/`, raíz del repositorio, `npm run docs:check` y `docs:figma`, workflow `.github/workflows/docs.yml` con `actions/checkout@v7` y `actions/setup-node@v7`, versiones comprobadas en la API de GitHub, y el código de salida). El script compara además `docs/components/*.md` con la primera tabla de `docs/inventory.md`: cada documento tiene que estar en el inventario, y cada fila con Doc "Sí" tiene que tener documento. La promesa del texto se ajusta a eso, porque la plantilla del inventario tiene filas con Doc "No". Enlace a npm en v12, la versión vigente (v10 y v11 están marcadas como Legacy).
- `one-source-many-channels`: `dist/figma-guidelines/`, `.gitignore` y la subida a mano.
- Los dos scripts, extraídos tal como se publican, probados en una carpeta de ejemplo del scratchpad (sin errores, con errores y desde una subcarpeta) con `node` y `npm run`; YAML del workflow validado con `yaml`.
- `jsdoc`: sección "JSDoc y TypeScript" (forma frente a intención, etiquetas de documentación en `.ts`, por qué JSDoc y no Code Connect), con fuentes de TypeScript y JSDoc.
- G21: `/agent-layer/claude-design` pasa a "Sistemas de diseño en Claude", con la web independiente como aviso fechado. Fuentes de la ayuda de Claude revisadas el 2026-10-21: get started, set up your design system, migrate from standalone y admin guide for Team and Enterprise plans. Alineadas las páginas que hablaban del "sistema publicado" y la errata `claudae` en el contenido y en `docs/guia-fuente.md`.

## 2026-10-21 · Diseño y desarrollo · Marca nueva (G19)

- Inspección con el MCP de Figma (TokensDS, sección "DS4Agents · Marca (2026-10-21)", 298:6831): logotipo horizontal 202 × 48 y vertical 144 × 77,07, cada uno en color y gris, Light y Dark; `home` 440 × 441 y `share` 1200 × 630. Los nombres de los marcos son los de los archivos.
- Exportados con `download_assets` sin forzar formato ni escala (se usa el ajuste de exportación de cada marco) y descargados con `curl`: SVG sin fondo del lienzo, solo los dos rellenos de cada variante; los verticales salen a 144 × 78. `home.png` sale a 880 × 882 porque el marco mide 440 × 441. Única edición: la nota de procedencia en la segunda línea de cada SVG (comprobado con `diff`).
- `public/brand/`: los ocho `logo-{horizontal,vertical}-{colored,gray}(-dark).svg`, `home.png` y `share.png`. Borrados `logo-colored(-dark).svg`, `logo-gray(-dark).svg` y `symbol.svg` (este ya no tenía uso).
- `Logo.tsx`: cabecera con el horizontal en color a 185 × 44 (la altura de designtokens101; "DS4Agents" mide unos 16 px de alto); pie con el vertical en gris a 103 × 56 (unos 13 px; a 34 px serían 8). Texto alternativo de `share.png` actualizado en `src/lib/metadata.ts`; comentarios de la portada.
- Oscar confirma las alturas. El marco `home` (298:6888) pasa a 440 × 440 en Figma con `resizeWithoutConstraints` (los hijos no se mueven; se recorta 1 px abajo) y `home.png` se exporta de nuevo a 880 × 880.
- Comprobado: `npm test` (14 pruebas), `check:tokens`, `build`, `check:content`, sin errores; capturas con Chrome sin interfaz a 1280 px y en un iframe de 320 px, en Light y Dark: el logotipo y el botón de menú caben sin scroll horizontal.

## 2026-10-21 · Desarrollo · CodePreview (G18)

- Copiado de designtokens101 el commit `8712a45` (V60): `CodeBlock.tsx`, `Table.tsx` (prop `header` de `Th`), `src/lib/render-markdown-preview.tsx`, `tools/rehype-code-meta.mjs`, `tools/check-content.mjs` (aviso de `preview` fuera de markdown) y `tests/rehype-code-meta.test.mjs`, idénticos byte a byte. `src/mdx-components.tsx`, `messages/es.json` (claves `tabs`, `markdown`, `preview`, `frontmatter`), `package.json` y §3.11 de `docs/sistema/componentes-v1.md`, con el mismo cambio sobre lo propio de ds4agents.
- `package-lock.json` regenerado con `npm install` (el parche no se aplicaba); las cuatro dependencias nuevas resuelven a las mismas versiones que en designtokens101: `hast-util-to-jsx-runtime` 2.3.6, `remark-parse` 11.0.0, `remark-rehype` 11.1.2, `unified` 11.0.5.
- G18 y sintaxis `preview` en `content/README.md`.
- De los 19 bloques ```` ```markdown ```` del contenido, 13 llevan `preview`: `docs/inventory.md`, `anti-patterns.md`, `docs/rules/rules-tokens.md`, `docs/foundations/color.md`, `docs/components/text-field.md`, `docs/patterns/login.md`, `docs/content/voice-and-tone.md`, `AGENTS.md`, `.claude/rules/stories.md`, los dos `SKILL.md`, `evals/evals.md` y `CHANGELOG.md`. Sin `preview` (fragmentos o texto plano, con Oscar): Ready for AI, `button.md (cabecera)`, Escenario, `CONTRIBUTING.md (fragmento)`, Lista de publicación y `CLAUDE.md` (cuatro líneas, la primera un import `@AGENTS.md`). `rules-tokens.md` y `stories.md` se quedan: `#` y lista, y frontmatter en `stories.md`.
- Comprobado: `npm test` (14 pruebas, 3 nuevas), `check:tokens`, `build` y `check:content` (13 bloques con `preview`), sin errores; `role="tablist"` en el HTML compilado. Oscar lo revisa en el navegador.

## 2026-10-21 · Desarrollo · Despliegue en Vercel y dominio (G17)

- Oscar publica la web en Vercel con el dominio `ds4agents.com`, canónico sin www (G17).
- Comprobado en producción con `curl`:
  - `canonical` y `og:url`: `https://ds4agents.com` en la portada y la URL de cada página en las páginas de la guía (por ejemplo, `https://ds4agents.com/figma/naming`). En `www.ds4agents.com` el canonical también apunta a `ds4agents.com`.
  - `og:image` y `twitter:image`: `https://ds4agents.com/brand/share.png`, 1200 × 630, responde 200 (`image/png`).
  - `sitemap.xml`: 200, 54 URL (portada y 53 páginas), todas con `https://ds4agents.com`, ninguna con www.
  - `robots.txt`: `Allow: /` y `Sitemap: https://ds4agents.com/sitemap.xml`.
  - `http://ds4agents.com` → 308 a `https://ds4agents.com`; `http://www.ds4agents.com` → 308 a `https://www.ds4agents.com`.
  - `https://www.ds4agents.com` respondía 200, sin redirigir (Vercel, `x-vercel-cache: HIT`). Oscar configura www como redirección en Vercel: primero sale 307 (el código por defecto) y, cambiado a 308, `https://www.ds4agents.com/<ruta>` → 308 a `https://ds4agents.com/<ruta>`, conservando la ruta. Desde `http://www` son dos saltos (308 a `https://www` y 308 al dominio sin www).
- Google Search Console: Oscar da de alta `ds4agents.com` como propiedad de dominio y envía `https://ds4agents.com/sitemap.xml`. La verificación es un registro TXT `google-site-verification` en el DNS de cdmon (donde está el dominio; Vercel solo sirve la web), que no se debe borrar. Comprobado con `dig` que el TXT responde en `ns1.cdmon.net` y en `8.8.8.8`; la verificación y el envío del sitemap en Search Console los confirma Oscar.

## 2026-10-20 · Diseño y desarrollo · Marca definitiva (G16)

- Inspección con el MCP de Figma (TokensDS, página Templates): Logo 228:6874 y LogoMonocrome 229:6939 (571 × 331), Symbol 228:6906 (252 × 224), emoticon 228:6907 (89 × 106), Opengraph 225:6859 (1200 × 630) e Illustration 228:6911 (440 × 441). Ninguno tenía variante para Dark.
- Cambios en Figma, con el visto bueno de Oscar: sin relleno blanco en los frames de Logo, LogoMonocrome y emoticon; Illustration a 440 × 440 y sin radio (el radio va en CSS); nuevos `Logo-dark` (230:6789; verde `#105950` → emerald-400 `#4FD7A6`, el rosa no cambia) y `LogoMonocrome-dark` (230:6795; `#414141` → `#BFBFBF` y `#999999` → `#666666`), en la misma página. El verde y el gris oscuro quedaban por debajo de 2,5:1 sobre el fondo de Dark.
- `download_assets` añade al SVG el fondo del lienzo (`#F5F5F5`); los SVG salen de `exportAsync` (solo lectura), como en G11. Los de Dark se generan desde el export de Light cambiando colores e id del recorte, y sus trazados se han comparado con los de Figma: iguales.
- `public/brand/`: `logo-colored(-dark).svg`, `logo-gray(-dark).svg`, `symbol.svg`, `share.png` (1200 × 630) y `home.png` (880 × 880, a 2×). `src/app/`: `icon.svg` y `favicon.ico` (16 y 32 px) desde el emoticon, que se lee mejor que el robot a 16 px; `apple-icon.png` (180 px, fondo blanco) desde el símbolo. Renderizados con Chrome (Playwright).
- `Logo.tsx` a 76 × 44 y 59 × 34. Portada con la rejilla de dos columnas de designtokens101 y una sola imagen para los dos temas, porque la ilustración tiene fondo propio. Texto alternativo nuevo de `share.png`.
- Comprobado: `npm test`, `check:tokens`, `build`, `check:content`; capturas a 1440 y 375 px en Light y Dark; sin scroll horizontal a 320 px en la portada ni en una página de la guía; `BookOpenText` de "En resumen" (G15) visible en los dos temas.

## 2026-10-20 · Contenido · Listas de comprobación (G14) e icono de Takeaways (G15)

- Oscar confirma que la guía no tiene prácticas. Las siete páginas `NN-practice-…` se sustituyen por `NN-checklist` ("Lista de comprobación"): el entregable de la fase, los pasos numerados y los criterios para darla por terminada. La plantilla de `inventory.md` pasa a la lista de la auditoría.
- Enlaces actualizados en la scorecard, "Por qué Markdown", Plantillas y "Qué contiene la guía"; convención en `content/README.md`; G10 corregida.
- `Takeaways`: `BookOpenText` en lugar de `GraduationCap`, como excepción a G02 (G15).

## 2026-10-20 · Contenido · Las 53 páginas

- Fuentes revisadas el 2026-10-20: ayuda y documentación para desarrolladores de Figma (servidor MCP, herramientas, Code Connect UI y plantillas, guidelines, anotaciones, descripciones, dev resources, analíticas, skills, Config India 2026), Claude Code (memoria, skills, MCP, visión general), ayuda de Claude (Claude Design, sistemas de diseño, Projects), blog de ingeniería de Anthropic (contexto y evaluaciones), Storybook 10.6 (MCP, manifiestos, buenas prácticas), DTCG 2025.10, Style Dictionary, AGENTS.md, llms.txt, SemVer y Keep a Changelog.
- Novedades que cambian el planteamiento de la guía-fuente: las guidelines de librería de Figma (beta abierta, 6 y 14 de octubre de 2026) y las instrucciones para el MCP de Code Connect UI son vías documentadas para las reglas de uso; Claude Design se integra en Claude (claude.ai/design cierra el 14 de diciembre de 2026) y `/design-sync` crea el sistema desde Claude Code; Code Connect pasa a Professional y recomienda archivos de plantilla; Claude Code lee `AGENTS.md`.
- Páginas nuevas (G12) y plantillas en una sola página índice (G13).
- La página modelo cambia "Lo que no le llega nunca" por "Lo que no se ve en el dibujo", con los cuatro sitios donde se escriben las reglas.
- Scripts de las páginas (`build-figma-guidelines.mjs`, `validate-docs.mjs`, `check-ui.sh`) probados con archivos de ejemplo.
- Comprobación local de cada capítulo antes de subirlo (frontmatter, enlaces internos, anclas, llaves fuera de código, guiones largos) y CI en cada push.

## 2026-10-20 · Desarrollo · Guía en lugar de curso (G10) y marca (G11)

- Oscar aprueba el tono de la página modelo y pide que la web sea una guía con nuestra investigación, no un curso.
- Textos de la interfaz (`messages/es.json`): portada ("Nuestra investigación, abierta a la comunidad", botón "Leer la guía"), etiqueta del sidebar ("Contenido") y de la navegación entre páginas.
- Siete ejercicios pasan a prácticas, con nuevo slug (`NN-practice-…`); "Qué enseñamos" pasa a "Qué contiene la guía" (`/start-here/guide-map`). La página modelo usa guía, capítulo y "En resumen".
- `content/README.md`, `CLAUDE.md` y `README.md` con el nuevo enfoque.
- Desde Figma (TokensDS) con el MCP de Figma: símbolo y texto "DS 4 Agents" en SVG (`exportAsync`, solo lectura) y la imagen Open Graph en PNG de 1200 × 630 (`get_screenshot`). Desde la terminal no se llega a figma.com (proxy).
- `public/brand/`: `logo-colored(-dark).svg` y `logo-gray(-dark).svg` compuestos como el lockup de la Open Graph; `symbol.svg`; `share.png`. Quitado `logo-symbol-colored.svg` de designtokens101 (sin uso). `src/app/`: `icon.svg`, `favicon.ico` (16 y 32 px) y `apple-icon.png` (180 px, fondo blanco) desde el símbolo, renderizados con Chromium.

## 2026-10-20 · Desarrollo · Clon inicial

- Copiado el repositorio de designtokens101 (commit de `main` del 2026-10-20) sin `content/`, `docs/` ni `tests/` (G01).
- Quitados los componentes y herramientas del curso de tokens y sus textos `ToolScales` y `ToolNormalize` de `messages/` (G06).
- Marca: `SITE_URL`, `SITE_NAME`, textos de la portada y de la cabecera, enlace de issues del pie y de la plantilla de GitHub. Portada sin ilustración. Logotipos provisionales en `public/brand/` (G08).
- `docs/sistema/`: especificación del sistema copiada de designtokens101, con nota de procedencia.
- Estructura de contenido con 10 secciones y la lección modelo `start-here/why-agents-cant-see-figma`. El resto de lecciones son esqueletos marcados con `<Callout variant="pending">`.
- `tests/content.test.mjs`: sustituye a las pruebas de las herramientas quitadas.
- CI en GitHub Actions (G09). `tools/ci-step.sh` publica la salida de un paso que falla como anotaciones, porque las sesiones de Claude no pueden descargar los registros de Actions.
- La CI encontró dos errores, ya corregidos: títulos con dos puntos sin comillas en el frontmatter de los ejercicios, y `check:tokens` leyendo la especificación en la ruta antigua (`docs/sistema-tokens-v1.md` → `docs/sistema/`).
- La sesión no tuvo acceso al registro de npm: build y comprobaciones solo en CI.
