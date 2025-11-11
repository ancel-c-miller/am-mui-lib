import { createTheme } from "@mui/material";

import { tokens } from "./tokens";
import { MuiButtonOverride } from "./overrides/MuiButton";

export const theme = createTheme({
    ...tokens,
    components: {
        MuiButton: MuiButtonOverride(tokens.palette!) as any,
    },
});
