import { Metadata } from "next";
import BusinessServices from "./business";

export const metadata: Metadata = {
  title: "Business Development Services",
  description:
    "As a seasoned business expert, I bring a wealth of experience and proficiency across a spectrum of services tailored to drive success for your venture. Explore the comprehensive suite of offerings that can propel your business to new heights.",
  openGraph: {
    title: "Business Development Services",
    description:
      "As a seasoned business expert, I bring a wealth of experience and proficiency across a spectrum of services tailored to drive success for your venture. Explore the comprehensive suite of offerings that can propel your business to new heights.",
    url: `https://www.hasanahmad.net/services/business`,
    images: `https://www.hasanahmad.net/opengraph-image.png`,
  },
};
const Page = () => {
  return <BusinessServices />;
};

export default Page;
