# ds4agents: Decisiones

Qué se ha decidido, en una línea por decisión. **Si algo aquí contradice una conversación, prevalece este documento.**

Estados: **Cerrada** · **Provisional** (puede cambiar antes de publicar) · **Sustituida** · **Abierta**.

## Protocolo

El protocolo entre sesiones (contenido, diseño, desarrollo) es el de designtokens101 (`docs/decisiones.md` de ese repositorio), con estas diferencias:

1. Numeración única de ds4agents: `G01`, `G02`… Las decisiones con otros prefijos (P, T, C, S, D, V) son de designtokens101 y siguen vigentes para el sistema de diseño heredado.
2. Un hueco o una contradicción no se improvisa: se plantean las opciones y **Oscar decide**.
3. Quien decide, escribe la decisión aquí y cambia el documento afectado en el mismo commit.

## Decisiones

| ID | Decisión | Estado |
|---|---|---|
| G01 | ds4agents nace como copia del repositorio de designtokens101 (no fork ni paquete compartido). Si los dos sitios acaban arreglando lo mismo, se extraerá el sistema a un paquete. | Cerrada (2026-10-20) |
| G02 | El sistema de diseño (tokens, estilos, componentes) es el de designtokens101. Los cambios se hacen allí primero y se copian aquí. | Cerrada (2026-10-20) |
| G03 | Se mantiene el prefijo `--t101-*` de los tokens. | Cerrada (2026-10-20) |
| G04 | Dominio `ds4agents.com`, nombre `ds4agents`. | Cerrada (2026-10-20) |
| G05 | Solo español, como designtokens101 (P24). | Provisional |
| G06 | Se quitan los componentes y herramientas exclusivos del curso de tokens: `ScaleGenerator`, `ScalePreview`, `ChromaChart`, `ColorScale`, `ExportNormalizer`, `ExportNormalizerForm`, `TypeDecision`, `tools/scales.mjs`, `tools/zip.mjs`, `lib/download.ts`. Se conservan `tools/figma-to-dtcg.mjs` (lo usa `npm run tokens`) y los scripts de escalas en Python. | Cerrada (2026-10-20) |
| G07 | Estructura de la guía en capítulos 00 a 07 más Plantillas (98) y Recursos (99), uno por fase. El capítulo de tokens remite a designtokens101 en lugar de repetirlo. | Provisional |
| G08 | Logotipos y portada provisionales hasta que Oscar entregue los de ds4agents (logotipos e imagen para compartir: sustituida por G11; la ilustración de la portada sigue pendiente). | Provisional |
| G09 | GitHub Actions ejecuta `npm test`, `check:tokens`, `build` y `check:content` en cada push a `main` y en cada pull request (`.github/workflows/ci.yml`). | Cerrada (2026-10-20) |
| G10 | ds4agents es una guía, no un curso: nuestra investigación, abierta a la comunidad. Se dice guía, capítulo y página; el cierre de cada página es "En resumen"; portada con "Leer la guía". Las prácticas se sustituyen por listas de comprobación (G14). | Cerrada (2026-10-20) |
| G11 | Logotipos, favicon e imagen para compartir exportados de Figma (TokensDS: Symbol 225:6835 y Opengraph 225:6859). El logotipo de la cabecera y el pie es el lockup de la Open Graph (símbolo y "DS 4 Agents"), a 80 × 44 y 62 × 34 px; el gris recorta paneles y boca, como la versión blanca de la Open Graph. | Cerrada (2026-10-20) |
| G12 | Páginas nuevas por las novedades de octubre de 2026: "Guidelines de la librería" (capítulo 2), "Una fuente, varios destinos" (capítulo 4) e "Instrucciones para el MCP" (capítulo 5). | Cerrada (2026-10-20) |
| G13 | Plantillas: una sola página índice (`/templates/templates`) que enlaza cada plantilla en la página que la explica; las plantillas no se duplican. | Cerrada (2026-10-20) |
| G14 | Sin prácticas ni ejercicios: cada capítulo termina con una "Lista de comprobación" (`NN-checklist`, URL `/<capítulo>/checklist`) con el entregable de la fase, los pasos numerados y los criterios para darla por terminada. | Cerrada (2026-10-20) |
| G15 | Excepción a G02: en `Takeaways`, el icono `GraduationCap` (birrete) se sustituye por `BookOpenText`, solo en ds4agents, porque la guía no es un curso. El resto del componente sigue igual que en designtokens101. | Cerrada (2026-10-20) |
