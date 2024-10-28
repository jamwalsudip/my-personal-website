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
  title: "Sudip S Jamwal",
  description: "Product | Strategy | Growth",
  keywords: ["Product Manager", "Strategy", "Growth", "Portfolio"],
  authors: [{ name: "Sudip S Jamwal" }],
  openGraph: {
    title: "Sudip S Jamwal",
    description: "Product | Strategy | Growth",
    url: "https://meetsudip.me",
    siteName: "Sudip S Jamwal",
    images: [
      {
        url: "/favicon.png",
        width: 250,  /* 1200 is the default */
        height: 250,  /* 630 is the default */
      },
    ],
    type: "website",
  },
  icons: {
    icon: [
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
  appleWebApp: {
    title: 'Sudip Jamwal',
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
