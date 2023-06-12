import { Footer, Navbar } from "@/components";

import "./styles/Global.css";

export const metadata = {
  title: "CarHub",
  description: "Descubra os melhores carros do mundo.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="shortcut icon" href="/car-ico.png" type="image/x-icon" />
      </head>
      <body className={"relative"}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
