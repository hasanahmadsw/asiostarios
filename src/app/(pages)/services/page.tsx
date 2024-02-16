import { Metadata } from "next";
import ServicesPage from "./services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "I also specialize in several fields, such as software development, business development, entrepreneurship, and marketing. I have very good experience in these fields, in addition to the fact that I study media and public relations.",
  openGraph: {
    title: "Services",
    description:
      "I also specialize in several fields, such as software development, business development, entrepreneurship, and marketing. I have very good experience in these fields, in addition to the fact that I study media and public relations.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/services`,
    images: `${process.env.NEXT_PUBLIC_BASE_URL}/opengraph-image.png`,
  },
};
const Page = () => {
  return <ServicesPage />;
};

export default Page;
