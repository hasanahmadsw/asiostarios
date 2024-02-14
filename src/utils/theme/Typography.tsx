import { Plus_Jakarta_Sans, IBM_Plex_Sans_Arabic } from "next/font/google";

export const plus = Plus_Jakarta_Sans({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

export const arabic = IBM_Plex_Sans_Arabic({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["arabic"],
  display: "swap",
  fallback: ["sans-serif"],
});

export const arabicFont: any = {
  fontFamily: arabic.style.fontFamily,
  h1: {
    fontWeight: 700,
    fontSize: "2.25rem",
    lineHeight: "3rem",
  },
  h2: {
    fontWeight: 600,
    fontSize: "1.875rem",
    lineHeight: "2.25rem",
  },
  h3: {
    fontWeight: 600,
    fontSize: "1.5rem",
    lineHeight: "1.75rem",
  },
  h4: {
    fontWeight: 600,
    fontSize: "1.3125rem",
    lineHeight: "1.6rem",
  },
  h5: {
    fontWeight: 600,
    fontSize: "1.125rem",
    lineHeight: "1.6rem",
  },
  h6: {
    fontWeight: 600,
    fontSize: "1rem",
    lineHeight: "1.2rem",
  },
  button: {
    textTransform: "capitalize",
    fontWeight: 600,
  },
  body1: {
    fontSize: "1.1rem",
    fontWeight: 500,
    lineHeight: "1.5rem",
  },
  body2: {
    fontSize: "0.75rem",
    letterSpacing: "0rem",
    fontWeight: 400,
    lineHeight: "1rem",
  },

  subtitle1: {
    fontWeight: 500,
    fontSize: "1.55rem",
    lineHeight: "2rem",
  },
  subtitle2: {
    fontSize: "1.3rem",
    fontWeight: 500,
  },
};

const typography: any = {
  fontFamily: plus.style.fontFamily,
  h1: {
    fontWeight: 600,
    fontSize: "2.25rem",
    lineHeight: "2.75rem",
  },
  h2: {
    fontWeight: 600,
    fontSize: "1.875rem",
    lineHeight: "2.25rem",
  },
  h3: {
    fontWeight: 600,
    fontSize: "1.5rem",
    lineHeight: "1.75rem",
  },
  h4: {
    fontWeight: 600,
    fontSize: "1.3125rem",
    lineHeight: "1.6rem",
  },
  h5: {
    fontWeight: 600,
    fontSize: "1.125rem",
    lineHeight: "1.6rem",
  },
  h6: {
    fontWeight: 600,
    fontSize: "1rem",
    lineHeight: "1.2rem",
  },
  button: {
    textTransform: "capitalize",
    fontWeight: 600,
  },
  // body1: {
  //   fontSize: "0.875rem",
  //   fontWeight: 400,
  //   lineHeight: "1.334rem",
  // },
  body1: {
    fontSize: "1.1rem",
    fontWeight: 500,
    lineHeight: "1.5rem",
  },
  body2: {
    fontSize: "0.75rem",
    letterSpacing: "0rem",
    fontWeight: 400,
    lineHeight: "1rem",
  },
  // subtitle1: {
  //   fontSize: "0.875rem",
  //   fontWeight: 400,
  // },
  subtitle1: {
    fontWeight: 500,
    fontSize: "1.55rem",
    lineHeight: "2rem",
  },
  subtitle2: {
    fontSize: "1.3rem",
    fontWeight: 500,
  },
  content: {
    fontWeight: 500,
    fontSize: "1.875rem",
    lineHeight: "2.25rem",
  },
};

// eslint-disable-next-line import/no-anonymous-default-export
export default typography;
