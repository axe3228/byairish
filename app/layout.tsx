import type { Metadata } from "next";
import { Cormorant_Garamond, Syncopate, Syne } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

const syncopate = Syncopate({
  subsets: ["latin"],
  variable: "--font-syncopate",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Airish Jane Absin",
  description:
    "UI/UX and Creative Designer crafting thoughtful digital products and visual identities. Based in Iloilo, working globally.",
  openGraph: {
    title: "Airish Jane Absin",
    description: "Crafting experiences that matter. Portfolio of Airish Jane Absin.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${cormorant.variable} ${syne.variable} ${syncopate.variable} min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}
