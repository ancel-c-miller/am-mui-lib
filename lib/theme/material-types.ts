import type { SimplePaletteColorOptions } from "@mui/material";

declare module '@mui/material/styles' {
    interface Theme {
        cssVarPrefix: string;
    }
    // allow configuration using `createTheme()`
    interface ThemeOptions {
        cssVarPrefix?: string // Custom prefix for CSS variables
    }

    interface Palette {
        brand: SimplePaletteColorOptions;
    }
    interface PaletteOptions {
        brand?: SimplePaletteColorOptions
    }
}