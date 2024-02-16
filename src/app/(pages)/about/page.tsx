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
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/about`,
    images: `${process.env.NEXT_PUBLIC_BASE_URL}/opengraph-image.png`,
    siteName: "Hasan Ahmad",
    type: "website",
  },
};
const Page = () => {
  return <AboutPage />;
};

export default Page;
