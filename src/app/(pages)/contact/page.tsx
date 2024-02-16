import { Metadata } from "next";
import Contact from "./contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "👋 Hi, I'm Hasan Ahmad. I help people develop their businesses and integrate modern technologies into it, Let's Contact!I also specialize in several fields, such as software development, business development, entrepreneurship, and marketing. I have very good experience in these fields, in addition to the fact that I study media and public relations.",
  openGraph: {
    title: "Contact",
    description:
      "👋 Hi, I'm Hasan Ahmad. I help people develop their businesses and integrate modern technologies into it, Let's Contact!I also specialize in several fields, such as software development, business development, entrepreneurship, and marketing. I have very good experience in these fields, in addition to the fact that I study media and public relations.",
    url: `https://www.hasanahmad.net/contact`,
    images: `https://www.hasanahmad.net/opengraph-image.png`,
  },
};
const Page = () => {
  return <Contact />;
};

export default Page;
