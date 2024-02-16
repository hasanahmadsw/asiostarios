import { Metadata } from "next";
import AboutPage from "./about";

export const metadata: Metadata = {
  title: "About",
  description:
    "My skill set encompasses adept market analysis, the implementation of effective tests, and the proficient execution of feasibility studies, business plans, and marketing strategies.",
  openGraph: {
    title: "About",
    description:
      "My skill set encompasses adept market analysis, the implementation of effective tests, and the proficient execution of feasibility studies, business plans, and marketing strategies.",
    url: `https://www.hasanahmad.net/about`,
    images: `https://www.hasanahmad.net/opengraph-image.png`,
    siteName: "Hasan Ahmad",
    type: "website",
  },
};
const Page = () => {
  return <AboutPage />;
};

export default Page;
