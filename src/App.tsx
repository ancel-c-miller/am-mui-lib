import { Button, Stack, ThemeProvider, Typography } from "@mui/material"

import { theme } from "@theme/theme"


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Stack spacing={2} direction="column" alignItems="center" mt={4}>
        <Typography gutterBottom variant="h6">Button Test</Typography>
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Stack>
    </ThemeProvider>
  )
}

export default App
