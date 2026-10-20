// Logotipos como SVG (D22), en public/brand/ (C10). Fuera de la regla "solo tokens".
// Cada logotipo tiene una versión para Light y otra para Dark (V20); se muestra una u otra con la
// variante dark:, que sigue los mismos selectores que el modo Dark de los tokens (V10).
// En ds4agents (G16), Logo y LogoMonocrome de Figma (571 × 331) y sus variantes Dark, a 44 y 34 px
// de alto como en designtokens101; el ancho mantiene la proporción del SVG exportado.

const LOGOS = {
  colored: { light: '/brand/logo-colored.svg', dark: '/brand/logo-colored-dark.svg', width: 76, height: 44 },
  gray: { light: '/brand/logo-gray.svg', dark: '/brand/logo-gray-dark.svg', width: 59, height: 34 },
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
