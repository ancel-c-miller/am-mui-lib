import { Button, Stack, ThemeProvider, Typography } from "@mui/material"

import { theme } from "@theme/theme"


function App() {
  const paletteOptions = ["primary", "secondary", "error", "warning", "info", "success"] as const;
  return (
    <ThemeProvider theme={theme}>
      {paletteOptions.map((color) => (
        <Stack key={color} spacing={2} direction="row" alignItems="center" mt={4}>
          <Typography gutterBottom variant="h6">{color.charAt(0).toUpperCase() + color.slice(1)} Buttons</Typography>
          <Button variant="text" color={color}>Text</Button>
          <Button variant="contained" color={color}>Contained</Button>
          <Button variant="outlined" color={color}>Outlined</Button>
        </Stack>
      ))}
    </ThemeProvider>
  )
}

export default App
