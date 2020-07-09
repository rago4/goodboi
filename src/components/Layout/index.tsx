import React from "react"
import { Helmet } from "react-helmet"
import { ThemeProvider } from "styled-components"
import { Reset as ResetStyles } from "styled-reset"
import { THEME } from "../../constants"

export const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=PT+Serif&family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <title>goodboi</title>
      </Helmet>
      <ThemeProvider theme={THEME}>
        <ResetStyles />
        {children}
      </ThemeProvider>
    </>
  )
}
