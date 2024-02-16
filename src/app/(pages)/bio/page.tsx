import { Metadata } from "next";
import Bio from "./bio";

export const metadata: Metadata = {
  title: "Business Card",
  description:
    "A passionate entrepreneur. I specialize in entrepreneurship,software development, marketing, media, and public relation.",
  openGraph: {
    title: "Business Card",
    description:
      "A passionate entrepreneur. I specialize in entrepreneurship,software development, marketing, media, and public relation.",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/bio`,
    images: `${process.env.NEXT_PUBLIC_BASE_URL}/opengraph-image.png`,
  },
};
const Page = () => {
  return <Bio />;
};

export default Page;
