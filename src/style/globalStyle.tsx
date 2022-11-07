import { extendTheme } from "@chakra-ui/react";

const breakpoints = {
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
};

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "greyScale.grey8",
        color: "greyScale.grey1",
        width: "100vw",
        overflowX: "hidden",
      },
      a: {
        textDecoration: "none",
      },
      li: {
        textDecoration: "none",
        listStyle: "none",
      },
      header: {
        width: "100%",
      },
    },
  },

  fonts: {
    heading: `'Lexend', sans-serif`,
    body: `'Inter', sans-serif`,
  },

  fontSizes: {
    xs: "0.875rem",
    sm: "1rem",
    md: "1.25rem",
    lg: "1.5rem",
    xl: "1.75rem",
    "2xl": "2rem",
    "3xl": "2.25rem",
    "4xl": "2.75rem",
  },

  colors: {
    brand: {
      brand1: "#4529E6",
      brand2: "#5126EA",
      brand3: "#B0A6F0",
      brand4: "#EDEAFD",
    },
    greyScale: {
      grey0: "#0B0D0D",
      grey1: "#212529",
      grey2: "#495057",
      grey3: "#868E96",
      grey4: "#ADB5BD",
      grey5: "#CED4DA",
      grey6: "#DEE2E6",
      grey7: "#E9ECEF",
      grey8: "#F1F3F5",
      grey9: "#F8F9FA",
      grey10: "#FDFDFD",
      whiteFixed: "#FFFFFF",
    },
    feedback: {
      alert1: "#CD2B31",
      alert2: "#FDD8D8",
      alert3: "#FFE5E5",
      success1: "#18794E",
      success2: "#CCEBD7",
      success3: "#DDF3E4",
    },
    randomColorsProfile: {
      random1: "#E34D8C",
      random2: "#C04277",
      random3: "#7D2A4D",
      random4: "#700DFF",
      random5: "#6200E3",
      random6: "#36007D",
      random7: "#349974",
      random8: "#2A7D5F",
      random9: "#153D2E",
      random10: "#6100FF",
      random11: "#5700E3",
      random12: "#30007D",
    },
  },

  components: {
    Heading: {
      baseStyle: {
        color: "greyScale.grey1",
      },
      variants: {
        h1: {
          fontSize: "4xl",
          fontWeight: "700",
        },
        h2: {
          fontSize: "3xl",
          fontWeight: "600",
        },
        h3: {
          fontSize: "2xl",
          fontWeight: "600",
        },
        h3_500: {
          fontSize: "2xl",
          fontWeight: "500",
        },
        h4: {
          fontSize: "xl",
          fontWeight: "600",
        },
        h4_500: {
          fontSize: "xl",
          fontWeight: "500",
        },
        h5: {
          fontSize: "lg",
          fontWeight: "600",
        },
        h5_500: {
          fontSize: "lg",
          fontWeight: "500",
        },
        h6: {
          fontSize: "md",
          fontWeight: "600",
        },
        h6_500: {
          fontSize: "md",
          fontWeight: "500",
        },
        h7: {
          fontSize: "sm",
          fontWeight: "600",
        },
        h7_500: {
          fontSize: "sm",
          fontWeight: "500",
        },
      },
    },
    Text: {
      baseStyle: {
        color: "greyScale.grey2",
      },
      variants: {
        "body-1-400": {
          fontWeight: "400",
          fontSize: "sm",
          lineHeight: "28px",
        },
        "body-1-600": {
          fontWeight: "400",
          fontSize: "xs",
          lineHeight: "24px",
        },
        "body-2-400": {
          fontWeight: "400",
          fontSize: "xs",
          lineHeight: "24px",
        },
        "body-2-500": {
          fontWeight: "500",
          fontSize: "xs",
          lineHeight: "24px",
        },
        "button-big-text": {
          fontWeight: "600",
          fontSize: "sm",
          lineHeight: "0",
        },
        "button-medium-text": {
          fontWeight: "600",
          fontSize: "xs",
          lineHeight: "0",
        },
        "input-placeholder": {
          fontWeight: "400",
          fontSize: "xs",
          lineHeight: "0",
        },
        "input-label": {
          fontWeight: "500",
          fontSize: "xs",
          lineHeight: "16px",
        },
      },
    },
    Button: {
      baseStyle: {
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: "10px",
        border: "none",
        fontFamily: `'Inter', sans-serif`,
        borderRadius: "4px",
        fontWeight: "600",
        _disabled: {
          bg: "greyScale.grey5",
          color: "white",
          opacity: 1,
        },
      },
      sizes: {
        sm: {
          fontSize: "xs",
          py: "12px",
          px: "20px",
        },
        lg: {
          fontSize: "sm",
          py: "12px",
          px: "28px",
        },
      },
      variants: {
        grey1: {
          bg: "greyScale.grey0",
          border: "1.5px solid",
          borderColor: "greyScale.grey0",
          color: "greyScale.whiteFixed",
          _hover: {
            bg: "greyScale.grey1",
            borderColor: "greyScale.grey1",
          },
        },
        brand1: {
          bg: "brand.brand1",
          border: "1.5px solid",
          borderColor: "brand.brand1",
          color: "greyScale.whiteFixed",
          _hover: {
            bg: "brand.brand2",
            borderColor: "brand.brand2",
          },
        },
        negative: {
          bg: "greyScale.grey6",
          border: "1.6px solid",
          borderColor: "greyScale.grey6",
          color: "greyScale.grey2",
          _hover: {
            bg: "greyScale.grey5",
            borderColor: "greyScale.grey5",
          },
        },
        outline: {
          bg: "none",
          border: "1.5px solid",
          borderColor: "greyScale.grey0",
          color: "greyScale.grey0",
          _hover: {
            bg: "greyScale.grey1",
            color: "greyScale.grey10",
            borderColor: "greyScale.grey1",
          },
        },
        disable: {
          bg: "greyScale.grey5",
          border: "1.5px solid",
          borderColor: "greyScale.grey6",
          color: "greyScale.whiteFixed",
        },
      },
    },
    Link: {
      baseStyle: {
        color: "greyScale.grey2",
      },
      sizes: {
        sm: {
          fontSize: "16px",
        },
        md: {
          fontSize: "24px",
        },
      },
      variants: {
        logo: {
          fontSize: "24px",
          fontWeight: "900",
          backgroundImage:
            "linear-gradient(90deg, #0B0D0D -1.61%, #4529E6 100.99%)",
          backgroundRepeat: "repeat",
          backgroudSize: "100%",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        },
        w400: {
          fontWeight: "400",
        },
        w600: {
          fontWeight: "600",
        },
      },
    },
    FormLabel: {
      baseStyle: {
        fontSize: "xs",
        fontWeight: "500",
        color: "greyScale.grey0",
        marginTop: "1.25rem"
      },
    },
    Input: {
      baseStyle: {
        fontSize: "xs",
        color: "greyScale.grey0"
      },
    },
  },
});
