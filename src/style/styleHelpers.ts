import { createGlobalStyle } from "styled-components";

interface ThemeType {
  [key: string]: ThemeType | string | number;
}
interface IGlobalStyle {
  theme: ThemeType;
}

const createCssVar = (items: ThemeType, prefix = "-"): string[] =>
  Object.entries(items).flatMap(([key, value]) => {
    const varName = `${prefix}-${key}`;
    if (typeof value === "object") return createCssVar(value, varName);
    return `${varName}:${value}`;
  });

export const GlobalStyleContainer = createGlobalStyle<IGlobalStyle>`

        html, body {
          margin: 0;
          padding: 0;

        }
        :root {
            /* We assign variables to root element */
            ${(props) => createCssVar(props.theme).join(";")}
        }
    `;
