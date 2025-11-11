import type { SimplePaletteColorOptions, ThemeOptions } from '@mui/material/styles';

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
        brand: SimplePaletteColorOptions
    }
}

export const tokens: ThemeOptions = {
    cssVariables: true,
    cssVarPrefix: 'am-mui',
    palette: {
        mode: 'light',
        brand: {
            main: '#26a69a',
            light: 'rgb(81, 183, 174)',
            dark: 'rgb(26, 116, 107)',
            contrastText: '#fff',
        },
        primary: {
            main: '#263238',
        },
        secondary: {
            main: '#26a69a',
        },
    },
    spacing: 4,
    shape: {
        borderRadius: 20,
    },
    typography: {
        fontFamily: 'Lato',
        fontSize: 16,
    },
};