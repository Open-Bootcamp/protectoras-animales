import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  fonts: {
    heading: `"Inter", sans-serif`,
    body: `"Inter", sans-serif`,
  },
  colors: {
    gray5: "#3c3f41",
    gray4: "#697172",
    gray3: "#c3c6c8",
    gray2: "#e1e2e3",
    gray1: "#f3f3f3",
    primary: "#144353",
    primarylight: "#578887",
    primarypastel: "#57888726",
    black: "#000000",
    white: "#ffffff",
    accent: "#cd7474",
    accentlight: "#f19898",
    accentpastel: "#f1989826",
    favorite: "#fac847",
    success: "#a0da67",
    warning: "#f49d48",
    failure: "#f1554b",
    error: "#667085",
  },
  components: {
    Divider: {
      variants: {
        solid: {
          borderColor: "gray3",
        },
      },
    },
    Input: {
      variants: {
        outline: {
          field: {
            borderColor: "gray3",
          },
        },
      },
      defaultProps: { variant: "outline", errorBorderColor: "gray3" },
    },
    Tabs: {
      variants: {
        line: {
          tab: {
            color: "gray4",
            _selected: {
              color: "primary",
            },
          },
        },
      },
    },
  },
});

export default theme;
