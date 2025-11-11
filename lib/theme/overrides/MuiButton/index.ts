import type { PaletteOptions } from "@mui/material/styles";

declare module '@mui/material/Button' {
    interface ButtonPropsVariantOverrides {
        dashed: true;
    }
}

export const MuiButtonOverride = (palette: PaletteOptions) => {
    return {
        "styleOverrides": {
            "root": {
                "variants": [
                    {
                        "props": { "color": "brand" },
                        "style": {
                            "borderRadius": "4px"
                        }
                    },
                    {
                        "props": { "variant": "dashed" },
                        "style": {
                            "border": `2px dashed ${palette.brand.main}`
                        }
                    }
                ],
            }
        }
    }
}