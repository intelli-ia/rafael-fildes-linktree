import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairoBold = Cairo({
  subsets: ["latin"],
  display: "swap",
  weight: "700",
  variable: "--font-heading",
});

const cairoRegular = Cairo({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-body",
});

export const metadata: Metadata = {
  title: "Rafael Fildes",
  description: "Links úteis de Rafael Fildes.",
  icons: {
    icon: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/favicon.png", type: "image/png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${cairoBold.variable} ${cairoRegular.variable}`}
    >
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
