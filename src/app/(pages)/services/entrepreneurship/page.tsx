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
    url: "https://hasanahmad.net/services/entrepreneurship",
  },
};
const Page = () => {
  return <StartupServices />;
};

export default Page;
