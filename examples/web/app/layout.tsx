import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chalk TS - Modern Terminal Styling for TypeScript",
  description:
    "A powerful, type-safe alternative to chalk with TrueColor support, 20+ built-in colors, gradients, and modern visual effects for your terminal applications.",
  keywords: [
    "chalk",
    "typescript",
    "terminal-styling",
    "ansi-colors",
    "cli-tools",
    "gradient-text",
    "truecolor",
    "rgb-colors",
  ],
  authors: [{ name: "Noor Mohammad", url: "https://github.com/noorjsdivs" }],
  creator: "Noor Mohammad",
  publisher: "ReactBD",
  openGraph: {
    title: "Chalk TS - Modern Terminal Styling for TypeScript",
    description:
      "A powerful, type-safe alternative to chalk with TrueColor support, 20+ built-in colors, gradients, and modern visual effects.",
    url: "https://chalk.reactbd.com",
    siteName: "Chalk TS",
    images: [
      {
        url: "https://res.cloudinary.com/duehd78sl/image/upload/v1755416064/npm-packages/chalk_z6fjpf.jpg",
        width: 1200,
        height: 630,
        alt: "Chalk TS Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chalk TS - Modern Terminal Styling for TypeScript",
    description:
      "A powerful, type-safe alternative to chalk with TrueColor support, 20+ built-in colors, gradients, and modern visual effects.",
    images: [
      "https://res.cloudinary.com/duehd78sl/image/upload/v1755416064/npm-packages/chalk_z6fjpf.jpg",
    ],
    creator: "@reactjsBD", // Assuming user has this handle based on README links
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
