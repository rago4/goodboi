import styled from "styled-components"

export const Body = styled.div`
  background: ${({ theme }) => theme.GRADIENTS.BODY};
  box-sizing: border-box;
  display: grid;
  grid-template-columns: repeat(16, 1fr);
  grid-column-gap: 20px;
  grid-template-rows: max-content;
  min-height: 100vh;
  width: 100%;
`
