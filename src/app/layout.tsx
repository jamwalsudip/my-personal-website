import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const effra = localFont({
  src: [
    {
      path: '../fonts/Effra.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../fonts/Effra-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../fonts/Effra-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../fonts/Effra-MediumItalic.woff2',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../fonts/Effra-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../fonts/Effra-BoldItalic.woff2',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../fonts/Effra-Heavy.woff2',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../fonts/EffraHeavy-Italic.woff2',
      weight: '800',
      style: 'italic',
    },
    {
      path: '../fonts/Effra-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../fonts/Effra-LightItalic.woff2',
      weight: '300',
      style: 'italic',
    },
  ],
  variable: '--font-effra',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://meetsudip.me'),
  title: "Sudip S Jamwal",
  description: "Product | Strategy | Growth",
  keywords: ["Product Manager", "Strategy", "Growth", "Portfolio"],
  authors: [{ name: "Sudip S Jamwal" }],
  openGraph:
  {
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
    icon: '/favicon.ico', 
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
    <html lang="en" style ={{ scrollBehavior: 'smooth', background: 'black' }}>
      <body className={`${effra.variable} antialiased`}>
        {children}
      </body>
      <GoogleAnalytics />
    </html>
  );
}
