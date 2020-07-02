import styled, { css } from "styled-components"

// COMPONENTS
export const Sidebar = styled.aside`
  background-color: ${({ theme }) => theme.PALETTE.WHITE};
  box-shadow: ${({ theme }) => theme.BOX_SHADOWS.ASIDE};
  box-sizing: border-box;
  grid-column: 1/5;
  height: 100vh;
  padding: 38px 28px;
`

// STYLES
export const styles = {
  logo: css`
    margin-bottom: 44px;
    text-align: center;
  `,
  select: css`
    margin-bottom: 18px;
  `,
}
