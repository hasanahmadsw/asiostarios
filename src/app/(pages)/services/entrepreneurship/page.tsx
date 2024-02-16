import { Metadata } from "next";
import StartupServices from "./startup";

export const metadata: Metadata = {
  title: "Entrepreneurship and Startups Services",
  description:
    "Expert guidance for aspiring entrepreneurs and startups to navigate the complexities of launching a successful business. Strategic advice on product development, funding, and market entry.",
  openGraph: {
    title: "Entrepreneurship and Startups Services",
    description:
      "Expert guidance for aspiring entrepreneurs and startups to navigate the complexities of launching a successful business. Strategic advice on product development, funding, and market entry.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/services/entrepreneurship`,
    images: `${process.env.NEXT_PUBLIC_BASE_URL}/opengraph-image.png`,
  },
};
const Page = () => {
  return <StartupServices />;
};

export default Page;
