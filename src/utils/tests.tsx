import React, { FC, ReactElement } from "react"
import { render, RenderResult } from "@testing-library/react"
import { ThemeProvider } from "styled-components"
import { THEME } from "../constants/theme"

const customRender = (ui: ReactElement): RenderResult => {
  const Wrapper: FC = ({ children }) => (
    <ThemeProvider theme={THEME}>{children}</ThemeProvider>
  )

  return render(ui, { wrapper: Wrapper })
}

export { customRender as render }
