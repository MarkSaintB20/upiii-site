import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://upiiiagencia.com.br"),
  title: {
    default: "Agência Upiii | Marketing Híbrido: Guerrilha, Digital e Vídeo",
    template: "%s | Agência Upiii",
  },
  description:
    "Combine guerrilha, marketing digital e produção profissional de vídeo. A Upiii acelera geração de demanda e posiciona sua marca onde seu cliente está.",
  robots: { index: true, follow: true },
  openGraph: {
    siteName: "Agência Upiii",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={`${geistSans.variable} font-sans`}>
      <head>
         {/* Analytics placeholders */}
         {process.env.NEXT_PUBLIC_GA4_ID && (
            <script defer src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA4_ID}`}></script>
         )}
      </head>
      <body className="antialiased flex flex-col min-h-screen">
        {children}
      </body>
    </html>
  );
}
