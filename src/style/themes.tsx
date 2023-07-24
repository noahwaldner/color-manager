import { FunctionComponent } from "react";
import { GlobalStyleContainer } from "./styleHelpers";
import colorData from "./color.json";

const lightPalette = {
  primary: {
    300: "#d3d4f6",
    400: "#8884FF",
    500: "#6C5EFA",
    600: "#573CFA",
    700: "#170a5d",
  },
};

const lightTheme = {
  primary: {
    text: lightPalette.primary[600],
    background: lightPalette.primary[500],
    highlight: colorData.FrontifyColor,
    highlightText: lightPalette.primary[700],
    error: "#ff0000",
  },
  white: "#fff",
  black: "#000",
  mediumBreakpoint: "500px",
};

export const globalStyles = lightTheme

interface IGlobalStylesProps {
  theme: "light" | "dark";
}
export const GlobalStyles: FunctionComponent<IGlobalStylesProps> = ({
  theme,
}) => {
  if (theme === "light") {
    return <GlobalStyleContainer theme={lightTheme} />;
  }
  return <GlobalStyleContainer theme={lightTheme} />;
};
