import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: "greyScale.grey8",
        color: "greyScale.grey1",
        // width: "100vw",
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
      variants: {
        h1: {
          fontSize: "44px",
          fontWeight: "700",
          color: "greyScale.grey1",
        },
        h2: {
          fontSize: "36px",
          fontWeight: "600",
          color: "greyScale.grey1",
        },
        h3: {
          fontSize: "32px",
          fontWeight: "600",
          color: "greyScale.grey1",
        },
        h3_500: {
          fontSize: "32px",
          fontWeight: "500",
          color: "greyScale.grey1",
        },
        h4: {
          fontSize: "28px",
          fontWeight: "600",
          color: "greyScale.grey1",
        },
        h4_500: {
          fontSize: "28px",
          fontWeight: "500",
          color: "greyScale.grey1",
        },
        h5: {
          fontSize: "24px",
          fontWeight: "600",
          color: "greyScale.grey1",
        },
        h5_500: {
          fontSize: "24px",
          fontWeight: "500",
          color: "greyScale.grey1",
        },
        h6: {
          fontSize: "20px",
          fontWeight: "600",
          color: "greyScale.grey1",
        },
        h6_500: {
          fontSize: "20px",
          fontWeight: "500",
          color: "greyScale.grey1",
        },
        h7: {
          fontSize: "16px",
          fontWeight: "600",
          color: "greyScale.grey1",
        },
        h7_500: {
          fontSize: "16px",
          fontWeight: "500",
          color: "greyScale.grey1",
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
          "-webkit-background-clip": "text",
          "-webkit-text-fill-color": "transparent",
        },
        authenticated: {
          fontWeight: "400",
        },
        notAuthenticated: {
          fontWeight: "600",
        },
      },
    },
  },
});
