import { Metadata } from "next";
import Mission from "./mission";

export const metadata: Metadata = {
  title: "Mission",
  description:
    "My mission is to help people develop their businesses and integrate modern technologies into them. I do this best by providing high-quality services to many companies and people. ",
  openGraph: {
    title: "Mission",
    description:
      "My mission is to help people develop their businesses and integrate modern technologies into them. I do this best by providing high-quality services to many companies and people.",
    url: `https://www.hasanahmad.net/mission`,
    images: `https://www.hasanahmad.net/opengraph-image.png`,
  },
};
const Page = () => {
  return <Mission />;
};

export default Page;
