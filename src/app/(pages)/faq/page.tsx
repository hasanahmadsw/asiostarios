import { Metadata } from "next";
import FAQ from "./faq";

export const metadata: Metadata = {
  title: "Frequently asked questions",
  description:
    "You're in the right place. Adiostarios is your one stop for everything you need to build and grow your business.",
  openGraph: {
    title: "FAQ",
    description:
      "You're in the right place. Adiostarios is your one stop for everything you need to build and grow your business.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/faq`,
    images: `${process.env.NEXT_PUBLIC_BASE_URL}/opengraph-image.png`,
  },
};
const Page = () => {
  return <FAQ />;
};

export default Page;
