import defaultTheme from "tailwindcss/defaultTheme";

export default {
  theme: {
    extend: {
      colors: {
        primary: "#00677F",
        secondary: "#E6F0F2",
        accent: "#f5892e",
        "accent-dark": "#DD7B29",
        background: "#FEFFFF",
        "background-2": "#FBFBFB",
        "body-text": "#3D372D",
        "border-primary": "#E6F0F2",
        input: "#FAFAFA",
        focus: "#FCDABE",
        neutral: "#3D372D",
        process: {
          100: "#E6F0F2",
          200: "#D9E8EC",
          300: "#B0D0D7",
          400: "#00677F",
        },
      },
      fontFamily: {
        "kumbh-sans": ["Kumbh Sans", "sans-serif"],
        "hanken-grotesk": ["Hanken Grotesk", "sans-serif"],
      },
      fontSize: {
        "body-1": ["24px", "31px"],
        "body-2": ["20px", "26px"],
        "body-3": ["18px", "23px"],
        "body-4": ["14px", "18px"],
        "heading-1": ["64px", "79px"],
        "heading-2": ["48px", "59px"],
        "heading-3": ["40px", "49px"],
        "heading-4": ["32px", "39px"],
      },
    },
  },
};
