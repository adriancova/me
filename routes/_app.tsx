import { type PageProps } from "$fresh/server.ts";
const gTagScript = `
window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-0FZ0XEZG7W');`;
export default function App({ Component }: PageProps) {
  return (
    <html>
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="favicon/favicon-16x16.png"
        />

        <link rel="icon" type="image/x-icon" href="favicon/favicon.ico"></link>
        <link rel="manifest" href="favicon/site.webmanifest" />
        <title>AdrianCova's Website</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400;1,500;1,600&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/styles.css" />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-0FZ0XEZG7W"
        >
        </script>
        <script dangerouslySetInnerHTML={{ __html: gTagScript }} />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
