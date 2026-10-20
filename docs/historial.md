# ds4agents: Historial

Detalle de lo hecho en cada frente, con fecha. Lo más reciente, arriba.

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
