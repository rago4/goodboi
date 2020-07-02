import React from "react"
import { Wrapper, Name, Code } from "./styles"

interface Props {
  code: string
  name: string
}

export const UIPresentation: React.FC<Props> = ({ code, name, children }) => {
  return (
    <Wrapper>
      <Name>{name}</Name>
      {children}
      <Code>{code}</Code>
    </Wrapper>
  )
}
