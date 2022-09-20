import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
      </Head>
      <body style={{ background: "#f8f9fa" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
