import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      typography: ({theme} : { theme: any })=> ({
        blue: {
          css: {
            "--tw-prose-body": theme("colors.blue[800]"),
            "--tw-prose-headings": theme("colors.blue[50]"),
            "--tw-prose-lead": theme("colors.blue[700]"),
            "--tw-prose-links": theme("colors.blue[900]"),
            "--tw-prose-bold": theme("colors.blue[900]"),
            "--tw-prose-counters": theme("colors.blue[600]"),
            "--tw-prose-bullets": theme("colors.blue[400]"),
            "--tw-prose-hr": theme("colors.blue[300]"),
            "--tw-prose-quotes": theme("colors.blue[900]"),
            "--tw-prose-quote-borders": theme("colors.blue[300]"),
            "--tw-prose-captions": theme("colors.blue[700]"),
            "--tw-prose-code": theme("colors.blue[900]"),
            "--tw-prose-pre-code": theme("colors.blue[100]"),
            "--tw-prose-pre-bg": theme("colors.blue[900]"),
            "--tw-prose-th-borders": theme("colors.blue[300]"),
            "--tw-prose-td-borders": theme("colors.blue[200]"),
            "--tw-prose-invert-body": theme("colors.blue[200]"),
            "--tw-prose-invert-headings": theme("colors.white"),
            "--tw-prose-invert-lead": theme("colors.blue[300]"),
            "--tw-prose-invert-links": theme("colors.white"),
            "--tw-prose-invert-bold": theme("colors.white"),
            "--tw-prose-invert-counters": theme("colors.blue[400]"),
            "--tw-prose-invert-bullets": theme("colors.blue[600]"),
            "--tw-prose-invert-hr": theme("colors.blue[700]"),
            "--tw-prose-invert-quotes": theme("colors.blue[100]"),
            "--tw-prose-invert-quote-borders": theme("colors.blue[700]"),
            "--tw-prose-invert-captions": theme("colors.blue[400]"),
            "--tw-prose-invert-code": theme("colors.white"),
            "--tw-prose-invert-pre-code": theme("colors.blue[300]"),
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-invert-th-borders": theme("colors.blue[600]"),
            "--tw-prose-invert-td-borders": theme("colors.blue[700]"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
export default config;
