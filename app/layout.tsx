import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700"],
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
      <body className={`${cormorant.variable} ${inter.variable} min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}
