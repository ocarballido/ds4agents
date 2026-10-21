# ds4agents: Historial

Detalle de lo hecho en cada frente, con fecha. Lo más reciente, arriba.

## 2026-10-21 · Desarrollo · Despliegue en Vercel y dominio (G17)

- Oscar publica la web en Vercel con el dominio `ds4agents.com`, canónico sin www (G17).
- Comprobado en producción con `curl`:
  - `canonical` y `og:url`: `https://ds4agents.com` en la portada y la URL de cada página en las páginas de la guía (por ejemplo, `https://ds4agents.com/figma/naming`). En `www.ds4agents.com` el canonical también apunta a `ds4agents.com`.
  - `og:image` y `twitter:image`: `https://ds4agents.com/brand/share.png`, 1200 × 630, responde 200 (`image/png`).
  - `sitemap.xml`: 200, 54 URL (portada y 53 páginas), todas con `https://ds4agents.com`, ninguna con www.
  - `robots.txt`: `Allow: /` y `Sitemap: https://ds4agents.com/sitemap.xml`.
  - `http://ds4agents.com` → 308 a `https://ds4agents.com`; `http://www.ds4agents.com` → 308 a `https://www.ds4agents.com`.
  - `https://www.ds4agents.com` respondía 200, sin redirigir (Vercel, `x-vercel-cache: HIT`). Oscar configura www como redirección en Vercel: primero sale 307 (el código por defecto) y, cambiado a 308, `https://www.ds4agents.com/<ruta>` → 308 a `https://ds4agents.com/<ruta>`, conservando la ruta. Desde `http://www` son dos saltos (308 a `https://www` y 308 al dominio sin www).
- Search Console: sin meta `google-site-verification` ni registro TXT en el DNS; se da por no hecha.

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
