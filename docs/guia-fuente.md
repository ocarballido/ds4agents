> Copia de la guía extendida (documento de Claude) del 2026-10-20. Es el material de partida de las lecciones: cada sección `##` corresponde a un módulo (G07). No se publica tal cual.

# Guía extendida: sistemas de diseño legibles por agentes de IA

Oct 19, 2026 · @Oscar Armando

Una metodología en siete fases para documentar un sistema de diseño en Figma y convertirlo en un contrato que cualquier agente de IA pueda usar, con un entregable de ejemplo por fase.

## Cómo usar esta guía

**La guía recorre siete fases en orden; cada una termina con un entregable concreto que la siguiente necesita.** Puedes leerla de principio a fin la primera vez y después usarla como referencia por fase.

### Principio rector

Un agente de IA no ve tu Figma como lo ves tú. Solo conoce lo que está escrito de forma estructurada: tokens con nombre, componentes vinculados a código, reglas en Markdown y contexto que le llega por MCP. El objetivo de toda la metodología es convertir decisiones de diseño implícitas en un **contrato explícito y versionado**.

### Las siete fases

| Fase | Pregunta que responde | Entregable principal | Responsable |
| --- | --- | --- | --- |
| 0. Auditoría | ¿Qué tenemos realmente? | `inventory.md` + scorecard | Diseño (lidera) + desarrollo |
| 1. Saneado de Figma | ¿Está el archivo listo para ser leído por máquina? | Librería publicada sin valores sueltos | Diseño |
| 2. Tokens | ¿Cuáles son nuestras decisiones visuales atómicas? | `tokens/*.tokens.json` (DTCG) + build | Diseño + desarrollo |
| 3. Documentación | ¿Cómo y cuándo se usa cada pieza? | `docs/` en Markdown con frontmatter | Diseño |
| 4. Vínculo diseño-código | ¿Qué componente de código corresponde a cada componente de Figma? | Code Connect + Storybook | Desarrollo |
| 5. Capa de agente | ¿Cómo lo consume una IA? | `CLAUDE.md`, skills, MCP, Claude Design | Diseño + desarrollo |
| 6. Evaluación y gobernanza | ¿Funciona y se mantiene? | `evals.md`, `CONTRIBUTING.md`, `CHANGELOG.md` | Dueño del sistema |

### Convenciones de esta guía

- Los bloques de código son **plantillas listas para copiar**; los valores (nombres, colores, rutas) son de ejemplo.
- "Agente" se refiere a cualquier LLM con herramientas: Claude Code, Claude Design, Cursor, Copilot.
- Las afirmaciones sobre herramientas citan documentación oficial en la bibliografía. Donde algo es mi criterio y no un estándar, lo indico.

### Convertir esta guía en una web

Cada sección `##` está pensada como una página independiente y cada `###` como un apartado de esa página. Un generador de sitios estáticos basado en Markdown (Docusaurus, Astro Starlight, VitePress) permite publicarla tal cual: exporta el documento a Markdown, divide por fase y añade un `llms.txt` en la raíz con el índice de páginas para que los propios agentes puedan leer tu sitio.

## Fase 0 — Auditoría

**Objetivo: saber con datos qué tiene el sistema, en qué estado está cada pieza y dónde están los huecos entre Figma y código.** Sin esta fase, documentas a ciegas y priorizas mal.

### Por qué importa para la IA

Un agente trata todo lo que encuentra como válido. Si hay dos botones casi iguales, uno deprecado y otro no, y nada lo indica, el agente elegirá al azar. La auditoría produce la lista de verdad: qué existe, qué es estable y qué no debe usarse.

### Pasos

1. **Inventario de Figma.** Recorre la librería y anota cada componente principal (component set): nombre, nivel atómico, número de variantes, propiedades.
2. **Inventario de código.** Lista los componentes de la librería en código con sus props. Si hay Storybook, sale de ahí.
3. **Cruce.** Para cada componente marca si existe en ambos lados, solo en uno, o con diferencias de nombre o props.
4. **Variables y estilos.** Cuenta variables por colección y detecta valores sueltos (colores o espaciados sin variable) en componentes.
5. **Uso real.** En Figma, las estadísticas de la librería muestran qué componentes se insertan más; prioriza esos.
6. **Puntuación.** Rellena el scorecard para tener una línea base que medirás de nuevo al final.

### Entregable 1: `docs/inventory.md`

```markdown
---
title: Inventario del sistema de diseño
updated: 2026-10-19
owner: Oscar
---
# Inventario

Leyenda de estado: stable · beta · deprecated · figma-only · code-only

| Componente | Nivel | Categoría | Estado | Figma | Código | Code Connect | Doc .md |
|---|---|---|---|---|---|---|---|
| Button | átomo | actions | stable | ✅ | ✅ | ✅ | ✅ |
| IconButton | átomo | actions | beta | ✅ | ✅ | ❌ | ❌ |
| TextField | molécula | forms | stable | ✅ | ✅ | ❌ | ✅ |
| Tag | átomo | data-display | figma-only | ✅ | ❌ | ❌ | ❌ |
| LegacyButton | átomo | actions | deprecated → Button | ✅ | ✅ | ❌ | ❌ |
| DataTable | organismo | data-display | stable | ✅ | ✅ | ❌ | ❌ |

## Diferencias detectadas
- TextField: en Figma `State=Error`; en código `invalid: boolean`. Unificar.
- Tag: no existe en código. Decidir si se implementa o se elimina de Figma.
```

Este archivo se convierte después en el **índice principal** que leerá el agente. Por eso lleva estado y categoría desde el primer día.

### Entregable 2: scorecard de madurez

Puntúa cada criterio de 0 a 3 (0 = no existe, 3 = completo y mantenido). Es mi propuesta de rúbrica, no un estándar publicado.

| Criterio | Qué mide | Puntuación (0–3) |
| --- | --- | --- |
| Cobertura de componentes | % de componentes de Figma que existen en código |  |
| Uso de variables | % de propiedades de componentes enlazadas a variables |  |
| Nomenclatura | Capas y props con nombres semánticos y alineados con código |  |
| Auto layout | Componentes que responden bien al redimensionar |  |
| Documentación | Componentes con descripción y reglas de uso |  |
| Vínculo diseño-código | Componentes con Code Connect o equivalente |  |
| Tokens versionados | Tokens exportados en un formato estándar en el repo |  |
| Gobernanza | Dueño, proceso de contribución y changelog |  |

**Lectura honesta:** si la media es menor que 1,5, no empieces por la integración con IA; las fases 1 a 3 te darán más retorno que cualquier herramienta.

### Errores comunes

- Auditar solo Figma e ignorar el código: el agente generará código, así que el código manda.
- Intentar documentarlo todo en la primera pasada. Elige un piloto de 5 componentes y 2 patrones.
- No registrar los deprecados. Son la principal fuente de errores del agente.

## Fase 1 — Saneado de Figma

**Objetivo: que el archivo de Figma comunique estructura e intención, no solo apariencia.** Figma documenta oficialmente seis prácticas que mejoran lo que el agente recibe por MCP: usar componentes, conectarlos con Code Connect, usar variables, nombrar con claridad, usar auto layout, y añadir anotaciones y dev resources.

### Estructura de páginas de la librería

Una estructura previsible ayuda a humanos y agentes a encontrar cosas:

```
📄 Cover            — nombre, versión, estado, enlace al repo
📄 Changelog        — resumen de versiones (el detalle vive en CHANGELOG.md)
📄 Foundations      — color, tipografía, espaciado, radios, elevación, iconos
📄 ── Atoms
📄 Button
📄 TextField
📄 ── Molecules
📄 ── Organisms
📄 ── Patterns      — plantillas de pantalla anotadas (login, listado, detalle)
📄 🗄 Deprecated    — componentes retirados, sin publicar
```

Una página por componente complejo, con tres zonas: el component set, un frame de especificación (anatomía, espaciados) y ejemplos de uso correcto e incorrecto.

### Convenciones de nombres

| Elemento | Convención | Ejemplo correcto | Ejemplo a evitar |
| --- | --- | --- | --- |
| Componente | PascalCase, igual que en código | `TextField` | `input text v2 FINAL` |
| Propiedad de variante | camelCase, igual que la prop | `variant`, `size` | `Type`, `Tamaño` |
| Valor de variante | minúscula, igual que el valor en código | `primary`, `md` | `Primary Button`, `Medium` |
| Booleano | prefijo de estado | `disabled`, `hasIcon` | `Off/On` |
| Capa interna | función, no forma | `Label`, `LeadingIcon`, `HelperText` | `Frame 1268`, `Group 5` |
| Variable | ruta por capas | `color/action/primary` | `azul bonito` |

Alinear nombres de Figma y código no es estética: reduce a casi cero el trabajo de mapeo en Code Connect y evita que el agente traduzca mal.

### Plantilla para el campo *Description*

El campo *Description* del componente principal acepta texto con formato y enlaces. Úsalo siempre con la misma estructura:

```text
Botón para disparar una acción en la vista actual.

Usar: acción principal o secundaria de formularios y diálogos.
No usar: para navegar (usa Link); más de un primary por vista.
Tokens: button.primary.*, space.200, radius.md
Docs: https://ds.ejemplo.com/components/button
```

Cinco líneas, siempre en el mismo orden. Un agente las interpreta mejor que un párrafo libre.

### Anotaciones: qué y cómo

Las anotaciones de Dev Mode sirven para lo que no se ve en un estático. Ejemplos de anotaciones bien escritas:

| Dónde | Anotación de ejemplo |
| --- | --- |
| TextField | "Al perder el foco valida el campo. El mensaje de error sustituye al HelperText, no se añade debajo." |
| Card | "En anchos < 360 px la imagen pasa arriba y ocupa el 100 % del ancho." |
| DataTable | "Más de 50 filas: paginación. Nunca scroll infinito dentro de la tabla." |
| Modal | "El foco se atrapa dentro del modal. Esc cierra salvo en modo destructivo." |

Reglas: anota en el componente principal, no en instancias (hay reportes en el foro de Figma de anotaciones de instancias anidadas que no llegan al MCP); una idea por anotación; usa verbos y condiciones medibles.

### Dev resources

En Dev Mode añade a cada componente enlaces al `.md` de documentación, a la story de Storybook y al archivo de código. Figma indica que el agente recibe esos enlaces como contexto.

### Entregable: checklist "Ready for AI" por componente

```markdown
## Ready for AI — TextField
- [ ] Es un component set con variantes nombradas como en código
- [ ] Todas las propiedades visuales enlazadas a variables (0 valores sueltos)
- [ ] Auto layout en todos los niveles; probado redimensionando
- [ ] Capas internas con nombres funcionales
- [ ] Description con la plantilla de 5 líneas
- [ ] Anotaciones de comportamiento (validación, foco, error)
- [ ] Dev resources: doc, story, código
- [ ] Publicado en la librería con nota de versión
```

### Cómo verificarlo

Con el MCP de Figma conectado, selecciona el componente y pide al agente que te muestre el contexto que recibe y las variables usadas. Si una regla o un token no aparece en esa respuesta, para el agente no existe.

## Fase 2 — Tokens como contrato

**Objetivo: que cada decisión visual tenga un nombre, un valor y un significado, en un formato estándar que lean herramientas y agentes.** El estándar es la especificación del W3C Design Tokens Community Group, estable desde la versión 2025.10 (octubre de 2025).

### Taxonomía en tres capas

| Capa | Qué expresa | Ejemplo de nombre | ¿Lo usa el agente? |
| --- | --- | --- | --- |
| Primitivos | Paleta y escalas en bruto | `color.blue.600`, `dimension.16` | No directamente |
| Semánticos | Intención | `color.action.primary`, `space.inset.md` | Sí: es la capa principal |
| Componente | Decisión de un componente | `button.primary.background` | Sí, dentro de su componente |

La regla que escribirás en CLAUDE.md: **el agente usa tokens semánticos o de componente; nunca primitivos ni valores literales.** Así un cambio de marca o de tema no rompe nada generado.

### Ejemplo: `tokens/primitives.tokens.json`

En DTCG 2025.10 el color es un objeto con espacio de color y componentes, y las dimensiones separan valor y unidad:

```json
{
  "color": {
    "$type": "color",
    "blue": {
      "600": {
        "$value": { "colorSpace": "srgb", "components": [0.11, 0.39, 0.85], "hex": "#1C64D9" }
      }
    },
    "neutral": {
      "0":   { "$value": { "colorSpace": "srgb", "components": [1, 1, 1], "hex": "#FFFFFF" } },
      "900": { "$value": { "colorSpace": "srgb", "components": [0.07, 0.09, 0.12], "hex": "#11171F" } }
    }
  },
  "dimension": {
    "$type": "dimension",
    "8":  { "$value": { "value": 8,  "unit": "px" } },
    "16": { "$value": { "value": 16, "unit": "px" } }
  }
}
```

### Ejemplo: `tokens/semantic.tokens.json`

Los semánticos son **alias** a primitivos y llevan `$description`, que es donde el agente aprende la intención:

```json
{
  "color": {
    "$type": "color",
    "action": {
      "primary": {
        "$value": "{color.blue.600}",
        "$description": "Fondo de la acción principal. Máximo uno por vista."
      }
    },
    "text": {
      "default": {
        "$value": "{color.neutral.900}",
        "$description": "Texto de cuerpo sobre fondos claros. Contraste AA garantizado."
      }
    }
  },
  "space": {
    "$type": "dimension",
    "inset": {
      "md": { "$value": "{dimension.16}", "$description": "Padding interior de cards y paneles." }
    }
  }
}
```

Escribir `$description` en los semánticos es la forma más barata de documentar para IA: el texto viaja con el token a cualquier herramienta.

### Exportar desde Figma

Tres caminos, de más simple a más controlado:

1. **Plugin de exportación de variables o Tokens Studio** con salida DTCG. Tokens Studio exporta formato DTCG por defecto en sus versiones actuales.
2. **API REST de variables de Figma** en un script de CI. Revisa qué plan exige tu cuenta antes de diseñarlo.
3. **Manual con revisión:** exportar, normalizar con un script y revisar el diff en un pull request. Es lo que recomiendo al principio: ver los cambios de tokens en un diff es formativo para el equipo.

### Transformar con Style Dictionary

Style Dictionary v5 adoptó DTCG 2025.10 como formato base. Configuración mínima (`config.js`):

```js
export default {
  source: ['tokens/**/*.tokens.json'],
  platforms: {
    css: {
      transformGroup: 'css',
      buildPath: 'build/css/',
      files: [{
        destination: 'variables.css',
        format: 'css/variables',
        options: { outputReferences: true }
      }]
    },
    ts: {
      transformGroup: 'js',
      buildPath: 'build/ts/',
      files: [{ destination: 'tokens.ts', format: 'javascript/es6' }]
    }
  }
};
```

Salida esperada (`build/css/variables.css`), con referencias conservadas para que el agente vea la relación semántica:

```css
:root {
  --color-blue-600: #1c64d9;
  --color-action-primary: var(--color-blue-600);
  --space-inset-md: 16px;
}
```

### Temas y modos

Los modos de Figma (claro/oscuro, marcas) se representan como archivos separados que sobrescriben los semánticos (`themes/dark.tokens.json`). La especificación 2025.10 incluye un módulo *Resolver* para describir conjuntos y modificadores; comprueba que tus herramientas lo soportan antes de depender de él.

### Entregable

- `tokens/` con primitivos, semánticos y temas en DTCG 2025.10.
- `$description` en todos los tokens semánticos.
- Build automatizado que genera CSS y TS.
- `docs/foundations/tokens.md` explicando la taxonomía y la regla "solo semánticos".

## Fase 3 — Documentación en Markdown

**Objetivo: escribir una vez, en Markdown con frontmatter, las reglas que hoy viven en la cabeza del equipo.** Es la fase con más trabajo humano y la que más mejora el resultado del agente.

### Por qué Markdown y no otro formato

- Lo leen nativamente los agentes: CLAUDE.md, AGENTS.md y SKILL.md son Markdown.
- Tiene estructura (encabezados, tablas, listas) que el modelo usa para orientarse; un `.txt` la pierde.
- El frontmatter YAML convierte cada archivo en un registro consultable y validable por script.
- Los generadores de sitios (Docusaurus, Astro, VitePress) lo publican como web sin conversión.

### Cómo escribir para un agente

| Hazlo así | En lugar de |
| --- | --- |
| "Máximo un `primary` por vista." | "Intenta no abusar del botón principal." |
| "Si el texto supera 3 palabras, usa `variant=secondary`." | "Los textos largos quedan mejor en secundario." |
| "Nunca uses `Tag` para acciones; usa `Chip`." | "El Tag es más bien informativo." |
| Nombres exactos de props y tokens en `código` | Descripciones visuales ("el azul") |
| Un ejemplo correcto y uno incorrecto | Solo el correcto |

Palabras clave recomendadas: **siempre, nunca, solo si, máximo, mínimo, en su lugar usa**. Son verificables.

### Profundidad según el nivel atómico

| Nivel | Secciones obligatorias | Extensión orientativa |
| --- | --- | --- |
| Átomo | Propósito, cuándo usar/no, props, tokens, accesibilidad, ejemplo | 40–80 líneas |
| Molécula | Lo anterior + anatomía, composición permitida, estados | 80–150 líneas |
| Organismo | Lo anterior + responsive, contenido, rendimiento, errores comunes | 150–250 líneas |
| Patrón | Problema, componentes usados, receta paso a paso, variantes, anti-patrones | 100–200 líneas |

### Plantilla A — Fundamento (`docs/foundations/color.md`)

```markdown
---
title: Color
type: foundation
status: stable
tokens_source: tokens/semantic.tokens.json
---
# Color

## Principios
- El color comunica estado y jerarquía; nunca es el único indicador (WCAG 1.4.1).
- Contraste mínimo 4.5:1 para texto, 3:1 para elementos de interfaz.

## Tokens semánticos
| Token | Uso | No usar para |
|---|---|---|
| color.action.primary | Fondo de acción principal | Enlaces de texto |
| color.feedback.error | Mensajes y bordes de error | Botones destructivos (usa color.action.danger) |

## Reglas para agentes
- Usa solo tokens semánticos. Los primitivos están prohibidos fuera de /tokens.
- En tema oscuro no inviertas colores a mano: los tokens ya resuelven el modo.
```

### Plantilla B — Componente (molécula: `docs/components/text-field.md`)

```markdown
---
name: TextField
level: molecule
category: forms
status: stable
since: 1.2.0
figma: https://www.figma.com/design/<file>?node-id=<id>
code: src/components/TextField/TextField.tsx
storybook: https://sb.ejemplo.com/?path=/docs/forms-textfield
composes: [Label, Input, HelperText, Icon]
tokens: [textfield.border.*, space.inset.sm, color.feedback.error]
replaces: [LegacyInput]
---
# TextField

Campo de entrada de texto de una línea con etiqueta, ayuda y validación.

## Cuándo usar / cuándo no
- Usar: entrada de texto corto (nombre, email, búsqueda dentro de formulario).
- No usar: texto de varias líneas → TextArea. Selección de opciones → Select.

## Anatomía
1. Label (obligatoria, visible)
2. Input
3. HelperText (opcional; se sustituye por el mensaje de error)
4. LeadingIcon / TrailingIcon (opcionales)

## Props
| Prop | Tipo | Valores | Por defecto | Notas |
|---|---|---|---|---|
| label | string | — | — | Obligatoria |
| size | enum | sm, md | md | sm solo en tablas y filtros |
| invalid | boolean | — | false | Requiere errorMessage |
| errorMessage | string | — | — | — |
| disabled | boolean | — | false | — |

## Estados
default · hover · focus · invalid · disabled · read-only

## Reglas y restricciones
- Nunca uses placeholder como sustituto de label.
- Si invalid=true, errorMessage es obligatorio y describe cómo corregir.
- Máximo un icono a cada lado.

## Accesibilidad
- Label asociada con htmlFor/id. Error enlazado con aria-describedby.

## Ejemplos
✅ Correcto
<TextField label="Email" type="email" invalid errorMessage="Introduce un email con @" />

❌ Incorrecto
<TextField placeholder="Email" invalid />
```

### Plantilla C — Patrón (`docs/patterns/login.md`)

Los patrones son las recetas que el agente sigue para crear pantallas completas. Son el tipo de documento que más falta en la mayoría de sistemas.

```markdown
---
name: Login
type: pattern
status: stable
components: [Card, TextField, Button, Link, Alert]
figma: https://www.figma.com/design/<file>?node-id=<id>
---
# Patrón: inicio de sesión

## Problema
El usuario se identifica con email y contraseña.

## Receta
1. Contenedor: Card centrada, ancho máximo 400 px, padding space.inset.lg.
2. Título: heading.md, "Inicia sesión".
3. TextField type=email, label "Email", autocomplete="email".
4. TextField type=password, label "Contraseña", con toggle de visibilidad.
5. Link "¿Has olvidado tu contraseña?" alineado a la derecha.
6. Button variant=primary, ancho completo, "Entrar".
7. Errores de servidor: Alert variant=error encima del formulario, no en los campos.

## Variantes
- Con SSO: añadir Button variant=secondary por proveedor, debajo de un Divider con texto "o".

## Anti-patrones
- Dos botones primary.
- Validar mientras el usuario escribe la contraseña.
```

### Plantilla D — Contenido (`docs/content/voice-and-tone.md`)

```markdown
# Voz y tono
- Tuteo. Frases de máximo 20 palabras.
- Botones: verbo en infinitivo + objeto ("Guardar cambios"), máximo 3 palabras.
- Errores: qué pasó + cómo resolverlo. Nunca culpar al usuario.
- Prohibido: "Ups", signos de exclamación en errores, mayúsculas sostenidas.
```

### Validación automática

Un script en CI (unas decenas de líneas en Node o Python) que lea el frontmatter de `docs/components/*.md` y falle si un componente `stable` no tiene `figma`, `code` o `tokens`. Así la documentación no se degrada en silencio.

### Entregable

Carpeta `docs/` con fundamentos, todos los componentes del piloto, al menos dos patrones y la guía de contenido, más el script de validación.

## Fase 4 — Vínculo diseño-código

**Objetivo: que cuando un agente vea un componente en Figma reciba el import y las props reales de tu librería, no una aproximación.** Figma describe Code Connect como la forma más eficaz de conseguir que el agente reutilice tus componentes.

### Code Connect: qué es y requisitos

Code Connect vincula cada componente de Figma con su implementación y mapea propiedades de Figma a props de código. Dev Mode muestra entonces fragmentos reales en lugar de código autogenerado, y el MCP de Figma usa ese vínculo como contexto. Soporta React (y React Native), Storybook, HTML (Web Components, Angular, Vue), SwiftUI y Jetpack Compose. Requiere plan Organization o Enterprise y un asiento Full o Dev.

### Ejemplo: `src/components/Button/Button.figma.tsx`

```tsx
import figma from '@figma/code-connect';
import { Button } from './Button';

figma.connect(Button, 'https://www.figma.com/design/<file>?node-id=<id>', {
  props: {
    label: figma.string('label'),
    variant: figma.enum('variant', {
      primary: 'primary',
      secondary: 'secondary',
      ghost: 'ghost',
      danger: 'danger',
    }),
    size: figma.enum('size', { sm: 'sm', md: 'md', lg: 'lg' }),
    disabled: figma.boolean('disabled'),
    icon: figma.boolean('hasIcon', {
      true: figma.instance('icon'),
      false: undefined,
    }),
  },
  example: ({ label, variant, size, disabled, icon }) => (
    <Button variant={variant} size={size} disabled={disabled} icon={icon}>
      {label}
    </Button>
  ),
});
```

Observa que el mapeo es casi 1:1 porque en la Fase 1 alineaste nombres. Si no lo hiciste, aquí acabarás escribiendo tablas de traducción por cada componente.

### Flujo de trabajo

1. `npx figma connect create '<enlace al component set>'` genera el archivo base.
2. Ajusta el mapeo de props; el asistente de la CLI propone mapeos automáticos que conviene revisar.
3. `npx figma connect publish` publica los vínculos.
4. Verifica en Dev Mode que el fragmento cambia al cambiar las propiedades del componente.
5. Alternativa con agente: la skill oficial `code-connect-components` del repositorio de Figma analiza el componente, busca su equivalente en el código y propone el vínculo.

### Prioriza

No hace falta Code Connect para todo. Empieza por los componentes con más inserciones (dato de la auditoría) y por los organismos donde el agente más se equivoca.

### Storybook como segunda fuente para el agente

Si trabajas con React, el addon MCP de Storybook expone un manifiesto de componentes y props generado por análisis estático de tus stories y tipos. Su documentación pide explícitamente al agente no inventar props y consultar el MCP antes de usarlas. Las capacidades de IA de Storybook están en *preview* y el manifiesto completo solo se genera en algunos frameworks.

```bash
npx storybook add @storybook/addon-mcp
# servidor disponible en http://localhost:6006/mcp
```

Storybook recomienda JSDoc en el componente y en cada prop porque se incorpora al manifiesto:

```tsx
/**
 * Dispara una acción en la vista actual.
 * Para navegar entre páginas usa `Link`.
 * Máximo un `variant="primary"` por vista.
 */
export function Button(props: ButtonProps) { /* … */ }

export interface ButtonProps {
  /** Jerarquía visual. `danger` solo para acciones destructivas irreversibles. */
  variant?: 'primary' | 'secondary' | 'ghost' | 'danger';
  /** `sm` solo dentro de tablas y barras de filtros. */
  size?: 'sm' | 'md' | 'lg';
}
```

Y una story mínima que sirve de ejemplo canónico:

```tsx
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = { component: Button, title: 'Actions/Button' } satisfies Meta<typeof Button>;
export default meta;

export const Primary: StoryObj<typeof meta> = {
  args: { variant: 'primary', children: 'Guardar cambios' },
};

// Story de anti-patrón: visible para humanos, excluida del manifiesto de IA
export const TwoPrimaries: StoryObj<typeof meta> = {
  tags: ['!manifest'],
};
```

### Entregable

- Archivos `*.figma.tsx` publicados para los componentes piloto.
- Storybook con addon MCP, JSDoc en componentes y props, y anti-patrones excluidos del manifiesto.
- Columna "Code Connect" del `inventory.md` actualizada.

## Fase 5 — Capa de agente

**Objetivo: que cualquier agente, al empezar a trabajar, sepa qué reglas aplicar siempre, dónde buscar el detalle y qué procedimiento seguir.** Se construye con tres piezas: un archivo de instrucciones siempre cargado, skills que se cargan bajo demanda, y servidores MCP que dan contexto en vivo.

### Qué va en cada pieza

| Pieza | Se carga | Contenido | Tamaño |
| --- | --- | --- | --- |
| `CLAUDE.md` / `AGENTS.md` | En cada sesión | Reglas no negociables, mapa de carpetas, flujo general | Corto (orientativo: < 150 líneas) |
| Skills (`SKILL.md`) | Cuando la tarea coincide con su descripción | Procedimientos de varios pasos y plantillas | < 500 líneas por SKILL.md, según Claude Code |
| `docs/` | Cuando el agente lo lee | Detalle de cada componente y patrón | Sin límite práctico |
| MCP Figma / Storybook | Cuando el agente llama a la herramienta | Contexto vivo del diseño y del código | — |

La idea es la **divulgación progresiva**: lo mínimo siempre cargado, el resto cuando haga falta. Meter toda la documentación en CLAUDE.md empeora el resultado porque diluye las reglas importantes.

### Entregable 1: `CLAUDE.md` completo

```markdown
# Sistema de diseño Acme — instrucciones para agentes

Este repositorio contiene el sistema de diseño Acme: tokens, componentes React y su documentación.

## Reglas no negociables
1. Usa solo componentes de `src/components`. Si lo que necesitas no existe, detente y pregunta; no lo crees.
2. Nunca escribas valores literales de color, espaciado, radio o tipografía. Usa tokens semánticos (`var(--color-action-primary)`).
3. Nunca inventes props. Antes de usar una prop, compruébala en `docs/components/<nombre>.md` o con el MCP de Storybook.
4. No uses componentes con `status: deprecated` en su frontmatter; usa el indicado en `replaces`.
5. Accesibilidad WCAG 2.2 AA: contraste, etiquetas, foco visible.

## Dónde está cada cosa
- Índice de componentes y estado: `docs/inventory.md`
- Recetas de pantallas: `docs/patterns/`
- Fundamentos: `docs/foundations/`
- Voz y tono: `docs/content/voice-and-tone.md`
- Tokens: `tokens/` (generados desde Figma; no editar a mano)

## Flujo para crear UI
1. Busca en `docs/patterns/` un patrón que encaje y síguelo.
2. Si partes de un diseño de Figma, usa el MCP de Figma para obtener contexto y variables.
3. Compón solo con componentes existentes.
4. Al terminar, ejecuta la skill `review-ui`.

## Comandos
- `npm run tokens` — regenera tokens
- `npm run storybook` — Storybook con MCP en :6006/mcp
- `npm run lint:docs` — valida frontmatter de docs
```

Si trabajas con varios agentes (Cursor, Copilot, Codex), mantén `AGENTS.md` con el mismo contenido. Storybook, por ejemplo, documenta sus instrucciones de agente pensando en AGENTS.md o CLAUDE.md indistintamente.

### Entregable 2: skill `build-ui`

Las skills de Claude Code siguen el estándar abierto Agent Skills: una carpeta con un `SKILL.md` cuyo frontmatter lleva `name` y `description`. La descripción decide cuándo se activa, así que escríbela en términos de la tarea.

```markdown
---
name: build-ui
description: Crear o modificar pantallas y componentes de interfaz usando el sistema de diseño Acme. Usar cuando se pida construir una vista, formulario, página o implementar un diseño de Figma.
---
# Construir UI con el sistema Acme

## Pasos
1. Lee `docs/inventory.md` para saber qué componentes existen y cuáles están deprecados.
2. Busca un patrón en `docs/patterns/`. Si existe, sigue su receta paso a paso.
3. Si hay un enlace de Figma, llama a las herramientas del MCP de Figma para obtener contexto y variables. Trata el código que devuelve como referencia visual, no como código final.
4. Para cada componente que uses, lee su `.md` y comprueba las props.
5. Sustituye cualquier valor literal por su token semántico.
6. Escribe la UI. Añade una story si es un componente nuevo de composición.
7. Ejecuta la skill `review-ui` antes de dar la tarea por terminada.

## Si algo no encaja
- Falta un componente: no lo inventes. Explica qué falta y propón la composición más cercana.
- Conflicto entre Figma y docs: prevalece `docs/`; señala la discrepancia.
```

### Entregable 3: skill `review-ui`

```markdown
---
name: review-ui
description: Revisar una interfaz o un diff contra las reglas del sistema de diseño Acme. Usar antes de terminar cualquier tarea de UI o cuando se pida una revisión de diseño.
---
# Revisión contra el sistema

Revisa los archivos cambiados y devuelve una tabla con: regla, archivo:línea, problema, corrección.

## Comprobaciones
- [ ] Ningún color, espaciado o radio literal (busca #, px, rgb fuera de /tokens)
- [ ] Ningún import de componentes deprecated
- [ ] Todas las props usadas existen en la doc del componente
- [ ] Máximo un Button primary por vista
- [ ] Todo TextField tiene label
- [ ] Textos siguen docs/content/voice-and-tone.md
```

### Conectar los servidores MCP en Claude Code

```bash
# MCP oficial de Figma (remoto)
claude mcp add --transport http figma https://mcp.figma.com/mcp

# Storybook local
claude mcp add --transport http storybook http://localhost:6006/mcp
```

Figma publica además skills oficiales (`implement-design`, `code-connect-components`, `create-design-system-rules`). La última genera un primer borrador de reglas analizando tu código: úsala como punto de partida y edítala, no la publiques tal cual.

### Claude Design: publicar el sistema

Anthropic recomienda configurar el sistema de diseño antes de abrir Claude Design al equipo; sin él, el resultado es funcional pero genérico. Proceso según la documentación oficial:

1. Crea la organización en Claude Design (requiere permisos de administración para el sistema de diseño).
2. Sube las fuentes: el repositorio con la librería de componentes, archivos de diseño, fuentes y logotipos. Claude extrae colores, tipografía, componentes y patrones de maquetación.
3. Revisa el sistema generado y pruébalo con un proyecto real.
4. Activa *Published*: los proyectos nuevos de la organización lo heredan.
5. Para cambios posteriores, abre el sistema desde la configuración de organización y modifícalo conversando con Claude, o sincroniza desde Claude Code con `/design-sync`.

Limitación a tener en cuenta: Claude Design está en *research preview*, sin registros de auditoría ni residencia de datos por ahora. Para clientes institucionales eso puede ser decisivo.

### Project en claude.ai para el equipo

Sube como conocimiento `CLAUDE.md`, `inventory.md`, fundamentos, patrones y voz y tono. Instrucciones del proyecto de ejemplo:

```text
Eres el asistente del sistema de diseño Acme. Responde solo con componentes, props y tokens que aparezcan en los documentos del proyecto. Si algo no está documentado, dilo y sugiere a quién preguntar. Cita el documento del que sacas cada regla.
```

Recuerda que los archivos subidos son una copia: actualízalos tras cada versión del sistema.

### Entregable

`CLAUDE.md` (y `AGENTS.md`), skills `build-ui` y `review-ui`, MCP de Figma y Storybook configurados, sistema publicado en Claude Design y Project del equipo.

## Fase 6 — Evaluación y gobernanza

**Objetivo: medir si los agentes realmente usan el sistema y mantenerlo vivo sin que la documentación se degrade.** Sin medición, no sabrás si un cambio en la documentación mejoró o empeoró el resultado.

### Diseñar las evaluaciones

Una evaluación es una tarea fija que das al agente y una forma objetiva de puntuar el resultado. Elige 10–20 tareas que cubran lo que tu equipo construye de verdad:

- 4–6 pantallas basadas en patrones documentados (login, listado, detalle, ajustes).
- 3–4 pantallas sin patrón, para ver cómo improvisa.
- 2–3 implementaciones desde un frame de Figma.
- 2–3 trampas: piden algo que no existe o que viola una regla ("pon dos botones principales").

Las trampas son las más reveladoras: un buen sistema hace que el agente diga "eso no está permitido" o "ese componente no existe".

### Entregable 1: `evals/evals.md`

```markdown
---
system_version: 1.4.0
agent: Claude Code
date: 2026-10-19
---
# Evaluaciones del sistema de diseño

## Tareas
| ID | Tarea | Tipo |
|---|---|---|
| E01 | Pantalla de login con email y contraseña | patrón |
| E02 | Tabla de pedidos con filtro por estado y paginación | patrón |
| E03 | Página de ajustes de notificaciones | sin patrón |
| E04 | Implementar el frame <enlace Figma> | desde Figma |
| E05 | "Añade un botón verde de confirmar junto al principal" | trampa |

## Resultados
| ID | Componentes DS (%) | Valores literales | Props inventadas | Reglas violadas | Nota (0–3) |
|---|---|---|---|---|---|
| E01 | 100 | 0 | 0 | 0 | 3 |
| E02 | 85 | 2 | 1 | 1 | 1 |
| E05 | — | — | — | Avisó de la regla | 3 |

## Hallazgos y acciones
- E02: inventó `DataTable.filterable`. → Documentar filtros en data-table.md y crear patrón.
```

### Entregable 2: rúbrica de puntuación

Rúbrica propuesta (criterio propio, ajústala):

| Nota | Significado |
| --- | --- |
| 3 | Solo componentes y tokens del sistema; sin props inventadas; respeta todas las reglas |
| 2 | Uno o dos valores literales o desviaciones menores, sin romper reglas explícitas |
| 1 | Inventa props o componentes, o viola una regla explícita |
| 0 | Ignora el sistema: HTML/CSS genérico |

Métricas automatizables con un script sobre el código generado: porcentaje de imports desde la librería, número de valores hexadecimales o en px fuera de tokens, imports de componentes deprecated.

### Cuándo evaluar

- Al terminar el piloto (línea base).
- Tras cada versión mayor del sistema o cambio grande en CLAUDE.md o skills.
- Al cambiar de modelo o de herramienta.

Si la nota baja, revisa primero la documentación del componente implicado: casi siempre falta una regla explícita o un ejemplo incorrecto.

### Entregable 3: `CONTRIBUTING.md`

```markdown
# Cómo contribuir al sistema de diseño

## Proceso
1. Propuesta: abre un issue con el problema, capturas y dónde se usaría.
2. Revisión: el dueño del sistema responde en 5 días hábiles.
3. Diseño en Figma en una rama de la librería.
4. Implementación en código + story.
5. Documentación .md con frontmatter.
6. Code Connect.
7. Entrada en CHANGELOG.md y publicación.

## Definition of Done de un componente
- [ ] Checklist "Ready for AI" de Figma completa
- [ ] Tokens semánticos; 0 valores literales
- [ ] Doc .md que pasa `npm run lint:docs`
- [ ] Code Connect publicado
- [ ] Story con JSDoc en props
- [ ] Evaluación relevante ejecutada sin regresiones
Sin todos los puntos, el estado es `beta`.

## Deprecación
- Marca `status: deprecated` y `replaces`/`replaced_by` en el frontmatter.
- Mueve el componente a la página Deprecated de Figma.
- Mantén el componente al menos una versión mayor antes de eliminarlo.
```

### Entregable 4: `CHANGELOG.md`

Con versionado semántico (mayor = cambio que rompe; menor = componente nuevo; parche = corrección):

```markdown
# Changelog

## [1.4.0] — 2026-10-19
### Añadido
- DataTable: filtros por columna (`filters` prop). Doc y patrón actualizados.
### Cambiado
- TextField: `State=Error` en Figma renombrado a `invalid` para alinear con código.
### Deprecado
- LegacyButton → usar Button.

## [1.3.0] — 2026-09-02
…
```

El agente también lee el changelog: si lo mencionas en CLAUDE.md, puede advertir del uso de APIs antiguas.

### Roles mínimos

| Rol | Responsabilidad |
| --- | --- |
| Dueño del sistema | Decide, revisa contribuciones, publica versiones |
| Referente de diseño | Calidad de la librería Figma y de la documentación |
| Referente de desarrollo | Componentes, tokens, Code Connect, CI |
| Contribuidores | Proponen y construyen siguiendo CONTRIBUTING.md |

En un equipo pequeño o como freelance, una persona cubre varios roles; lo importante es que el proceso esté escrito.

## Glosario

| Término | Definición |
| --- | --- |
| Agente | Modelo de lenguaje con acceso a herramientas (archivos, terminal, MCP) que ejecuta tareas de varios pasos. |
| Agent Skills | Estándar abierto para empaquetar procedimientos en carpetas con un `SKILL.md`; lo usan Claude Code y otras herramientas. |
| AGENTS.md / CLAUDE.md | Archivo Markdown en la raíz del repositorio con instrucciones que el agente carga al empezar. |
| Alias (token) | Token cuyo valor referencia a otro token, p. ej. `{color.blue.600}`. |
| Atomic Design | Metodología de Brad Frost que organiza interfaces en átomos, moléculas, organismos, plantillas y páginas. |
| Code Connect | Herramienta de Figma que vincula componentes de diseño con su código y mapea propiedades. |
| Component set | Componente principal de Figma que agrupa todas sus variantes. |
| Dev resources | Enlaces añadidos a un nodo en Dev Mode (documentación, código, tickets). |
| Divulgación progresiva | Cargar en contexto solo lo necesario y el detalle bajo demanda. |
| DTCG | Design Tokens Community Group del W3C; publica la especificación de formato de tokens (estable 2025.10). |
| Frontmatter | Bloque YAML al principio de un Markdown con metadatos estructurados. |
| llms.txt | Convención de un archivo en la raíz de un sitio web con el índice de su documentación para LLMs. |
| Manifiesto (Storybook) | JSON generado que describe componentes, props y docs para agentes. |
| MCP | Model Context Protocol: estándar abierto para que un agente use herramientas y fuentes de datos externas. |
| Patrón | Receta documentada de una pantalla o flujo recurrente, compuesta por componentes del sistema. |
| Style Dictionary | Herramienta open source que transforma tokens en código por plataforma. |
| Token semántico | Token que expresa intención (`color.action.primary`), no un valor bruto. |
| Variables (Figma) | Valores reutilizables con modos en Figma; equivalentes de diseño de los tokens. |

## Bibliografía comentada

Ordenada por fase. Prioriza siempre la documentación oficial: estas herramientas cambian cada pocos meses.

### Metodología y fundamentos

- [Atomic Design — Brad Frost](https://atomicdesign.bradfrost.com/) — El libro de referencia, gratuito en línea. Lee los capítulos sobre la metodología y sobre mantener sistemas.

### Tokens (Fase 2)

- [W3C DTCG — anuncio de la versión estable 2025.10](https://www.w3.org/community/design-tokens/2025/10/28/design-tokens-specification-reaches-first-stable-version/) — Contexto y alcance de la especificación.
- [designtokens.org — FAQ](https://www.designtokens.org/faq/) — Estado del estándar, herramientas compatibles y relación con JSON Schema.
- [zeroheight — migración a Style Dictionary v5 y DTCG 2025.10](https://help.zeroheight.com/hc/en-us/articles/48049028236187) — Útil para ver el formato antiguo frente al nuevo.

### Figma (Fases 1 y 4)

- [Figma — Structure your Figma file for better code](https://developers.figma.com/docs/figma-mcp-server/structure-figma-file/) — Las prácticas oficiales para que el MCP devuelva buen contexto.
- [Figma — Add custom rules and instructions](https://developers.figma.com/docs/figma-mcp-server/add-custom-rules/) — Ejemplos de reglas para el agente.
- [Figma — MCP server guide y skills oficiales](https://github.com/mcp/com.figma.mcp/mcp) — Instalación en Claude Code y skills `implement-design`, `code-connect-components`, `create-design-system-rules`.
- [Figma — Code Connect (repositorio)](https://github.com/figma/code-connect) — Requisitos, frameworks soportados y guías por plataforma.
- [Mozilla Firefox — guía interna de Code Connect](https://firefox-source-docs.mozilla.org/browser/components/storybook/docs/README.figma-code-connect.stories.html) — Caso real de adopción con Web Components.
- [Foro de Figma — anotaciones en instancias anidadas](https://forum.figma.com/report-a-problem-6/figma-mcp-server-not-displaying-annotations-from-nested-component-instances-42958) — Limitación reportada por usuarios.

### Storybook (Fase 4)

- [Storybook — MCP server](https://storybook.js.org/docs/ai/mcp/overview) — Instalación del addon e instrucciones de agente.
- [Storybook — Best practices for using Storybook with AI](https://storybook.js.org/docs/ai/best-practices) — JSDoc, curación del manifiesto, exclusión de anti-patrones.
- [Storybook — Manifests](https://storybook.js.org/docs/11/ai/manifests.md) — Qué contiene el manifiesto de componentes.

### Claude (Fase 5)

- [Claude Code — Extend Claude with skills](https://code.claude.com/docs/en/skills.md) — Formato de SKILL.md, ubicaciones y buenas prácticas.
- [Claude Help — Set up your design system in Claude Design](https://support.claude.com/en/articles/14604397-set-up-your-design-system-in-claude-design) — Paso a paso oficial.
- [Claude Help — Claude Design admin guide](https://support.claude.com/en/articles/14604406-claude-design-admin-guide) — Despliegue por fases y limitaciones actuales.
- [Claude Help — Get started with Claude Design](https://support.claude.com/en/articles/14604416-get-started-with-claudae-design) — Uso diario y sincronización con Claude Code.

### Casos públicos para estudiar

- [Singapore Government Design System — Figma MCP](https://www.designsystem.tech.gov.sg/ai/mcp-server) — Un sistema público que documenta cómo usarlo con agentes; buen modelo para tu futura web.
