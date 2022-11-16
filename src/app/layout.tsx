import { Averia_Serif_Libre } from "@next/font/google";

import { Navigation } from "../components/Navigation";
import "./globals.css";

const averia = Averia_Serif_Libre({ weight: "400", subsets: ["latin"] });

export default function RootLayout({
  children,
}: Required<React.PropsWithChildren>) {
  return (
    <html lang="en" className={averia.className}>
      <head>
        <meta charSet="utf-8" />
        <title>Samuel Newman</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Navigation>{children}</Navigation>
      </body>
    </html>
  );
}
