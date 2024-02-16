import { Metadata } from "next";
import WebServices from "./web";

export const metadata: Metadata = {
  title: "Software and Web Development Services",
  description:
    "I specialize in the creation and implementation of cutting-edge web applications. My expertise lies in crafting bespoke solutions that cater to the unique needs of clients. From conceptualization to execution, I leverage my technical proficiency to develop dynamic and user-friendly web applications, ensuring optimal functionality and an exceptional user experience.",
  openGraph: {
    title: "Software and Web Development Services",
    description:
      "I specialize in the creation and implementation of cutting-edge web applications. My expertise lies in crafting bespoke solutions that cater to the unique needs of clients. From conceptualization to execution, I leverage my technical proficiency to develop dynamic and user-friendly web applications, ensuring optimal functionality and an exceptional user experience.",
    url: `https://www.hasanahmad.net/services/web-development`,
    images: `https://www.hasanahmad.net/opengraph-image.png`,
  },
};
const Page = () => {
  return <WebServices />;
};

export default Page;
