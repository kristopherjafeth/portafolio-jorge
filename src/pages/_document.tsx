import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="es">
      <Head />
      <body>
        <Head>
          <title>Jorge Portafolio | Diseñador Gráfico y Creativo</title>
          <meta name="description" content="Portafolio de Jorge: diseño gráfico, branding, identidad visual, creatividad y soluciones visuales para marcas y empresas. Descubre proyectos que inspiran, transforman y conectan." />
          <meta name="keywords" content="diseño gráfico, portafolio, branding, creatividad, identidad visual, diseñador, Jorge, soluciones visuales, marcas, freelance" />
          <meta name="author" content="Jorge" />
          <meta property="og:title" content="Jorge Portafolio | Diseñador Gráfico y Creativo" />
          <meta property="og:description" content="Portafolio de Jorge: diseño gráfico, branding, identidad visual, creatividad y soluciones visuales para marcas y empresas." />
          <meta property="og:type" content="website" />
          <meta property="og:locale" content="es_ES" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Jorge Portafolio | Diseñador Gráfico y Creativo" />
          <meta name="twitter:description" content="Portafolio de Jorge: diseño gráfico, branding, identidad visual, creatividad y soluciones visuales para marcas y empresas." />
        </Head>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
