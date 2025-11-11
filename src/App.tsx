import { Button, Stack, ThemeProvider, Typography } from "@mui/material"

import { theme } from "@theme/theme"

function App() {
  const paletteOptions = ["brand", "primary", "secondary", "error", "warning", "info", "success"] as const;

  return (
    <ThemeProvider theme={theme}>
      {paletteOptions.map((color) => (
        <Stack key={color} spacing={2} direction="row" alignItems="center" mt={4}>
          <Typography gutterBottom variant="h6">{color.charAt(0).toUpperCase() + color.slice(1)} Buttons</Typography>
          <Button variant="text" color={color as any}>Text</Button>
          <Button variant="contained" color={color as any}>Contained</Button>
          <Button variant="outlined" color={color as any}>Outlined</Button>
          <Button variant="dashed" color={color as any}>Dashed</Button>
        </Stack>
      ))}
    </ThemeProvider>
  )
}

export default App
