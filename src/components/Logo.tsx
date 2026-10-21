// Logotipos como SVG (D22), en public/brand/ (C10). Fuera de la regla "solo tokens".
// Cada logotipo tiene una versión para Light y otra para Dark (V20); se muestra una u otra con la
// variante dark:, que sigue los mismos selectores que el modo Dark de los tokens (V10).
// En ds4agents (G19): cabecera con el logotipo horizontal en color (202 × 48 en Figma) a 44 px de
// alto, como en designtokens101; pie con el vertical en gris (144 × 78) a 56 px, para que
// "DS4Agents" se lea (unos 13 px de alto). El ancho mantiene la proporción del SVG exportado.

const LOGOS = {
  colored: { light: '/brand/logo-horizontal-colored.svg', dark: '/brand/logo-horizontal-colored-dark.svg', width: 185, height: 44 },
  gray: { light: '/brand/logo-vertical-gray.svg', dark: '/brand/logo-vertical-gray-dark.svg', width: 103, height: 56 },
};

/** Imagen decorativa: el nombre accesible lo pone el enlace que la contiene. */
export function Logo({ variant }: { variant: keyof typeof LOGOS }) {
  const { light, dark, width, height } = LOGOS[variant];
  return (
    <>
      <img src={light} alt="" width={width} height={height} className="block dark:hidden" />
      <img src={dark} alt="" width={width} height={height} className="hidden dark:block" />
    </>
  );
}
