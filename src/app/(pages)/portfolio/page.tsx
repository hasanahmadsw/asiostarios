import { Metadata } from "next";
import Portfolio from "./portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "I also specialize in several fields, such as software development, business development, entrepreneurship, and marketing. I have very good experience in these fields, in addition to the fact that I study media and public relations.",
};
const Page = () => {
  return <Portfolio />;
};

export default Page;
