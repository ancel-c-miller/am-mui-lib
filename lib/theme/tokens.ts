import type { ThemeOptions } from '@mui/material/styles';

export const tokens: ThemeOptions = {
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