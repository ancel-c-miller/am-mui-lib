import type { ThemeOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Theme {
        cssVarPrefix: string;
    }
    // allow configuration using `createTheme()`
    interface ThemeOptions {
        cssVarPrefix?: string // Custom prefix for CSS variables
    }
}

export const tokens: ThemeOptions = {
    cssVariables: true,
    cssVarPrefix: 'am-mui',
    palette: {
        mode: 'light',
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