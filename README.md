# ds4agents

Guía web abierta, en español, con nuestra investigación sobre cómo documentar un sistema de diseño de Figma y conectarlo con agentes de IA: auditoría, preparación de Figma, tokens, documentación en Markdown, vínculo con el código, capa de agente y evaluación.

Usa el mismo sistema de diseño, componentes y stack que [DesignToken101](https://designtokens101.com) ([repositorio](https://github.com/ocarballido/design-tokens-101)).

## Estado

En construcción. El avance está en [`docs/estado.md`](docs/estado.md) y las decisiones, en [`docs/decisiones.md`](docs/decisiones.md).

## Desarrollo

```bash
npm install
npm run dev            # http://localhost:3000
npm run build && npm run check:content
npm test
```

## Estructura

| Carpeta | Contenido |
|---|---|
| `content/` | Páginas de la guía en MDX |
| `docs/` | Decisiones, estado y especificación del sistema de diseño (heredada) |
| `tools/` | Comprobaciones del contenido y de los tokens |

## Autoría

Oscar Carballido, con la ayuda de Claude (Anthropic).
