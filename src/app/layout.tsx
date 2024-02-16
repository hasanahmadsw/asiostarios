import { Metadata } from "next";
import NextApp from "./app";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
export const metadata: Metadata = {
  metadataBase: new URL(`${process.env.NEXT_PUBLIC_BASE_URL}`),
  title: {
    default: "Hasan Ahmad",
    template: "%s | Hasan Ahmad",
  },
  description:
    "Hi, I'm Hasan Ahmad. I help people develop their businesses and integrate modern technologies into it",
  generator: "Next.js",
  applicationName: "Hasan Ahmad Official Website",
  keywords: [
    "Hasan Ahmad",
    "Hasan",
    "Hasan Ahmad Business",
    "Media Production",
    "Hasan Website",
    "حسن أحمد",
    "Hasan",
    "Entrepreneurship UAE",
  ],
  authors: [
    { name: "Hasan Ahmad" },
    { name: "Hasan Ahmad", url: `${process.env.NEXT_PUBLIC_BASE_URL}` },
  ],
  creator: "Hasan Ahmad",
  publisher: "Hasan Ahmad",
  openGraph: {
    title: {
      default: "Hasan Ahmad",
      template: "%s | Hasan Ahmad",
    },
    description:
      "Hi, I'm Hasan Ahmad. I help people develop their businesses and integrate modern technologies into it",
    url: `https://www.hasanahmad.net`,
    images: `https://www.hasanahmad.net/opengraph-image.png`,
    siteName: "Hasan Ahmad",
    type: "website",
  },
};
export default function RootLayout({ children }: any) {
  return (
    <NextApp>
      {children}
      <Analytics />
      <SpeedInsights />
    </NextApp>
  );
}
