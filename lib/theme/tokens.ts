import type { ThemeOptions } from '@mui/material/styles';
import './material-types'; // Extend MUI theme types & exports on build

export const tokens: ThemeOptions = {
    cssVariables: true,
    cssVarPrefix: 'am-mui',
    palette: {
        mode: 'light',
        brand: {
            main: '#1976d2',
            light: '#42a5f5',
            dark: '#1565c0',
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