import { ThemeProvider } from "styled-components"
import { PrismicProvider } from "@prismicio/react"

import { Home } from "./pages/Home"
import { GlobalStyle } from "./styles/global"
import { defaultTheme } from "./styles/theme/default"
import { client } from "./services/prismic"

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <PrismicProvider client={client}>
        <GlobalStyle />
        <Home />
      </PrismicProvider>
    </ThemeProvider>
  )
}
