import {theme} from "./Theme.ts";


type ColorPallete = typeof  theme.colors.light;

declare module 'styled-components' {
    export type DefaultTheme = {
        colors: ColorPallete;
        fonts: typeof theme.fonts;
        fontSizes: typeof theme.fontSizes;
    }
}