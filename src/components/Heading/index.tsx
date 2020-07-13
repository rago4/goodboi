import styled from "styled-components"

export const Heading = styled.h1`
  color: ${({ theme }) => theme.PALETTE.MINE_SHAFT};
  font-family: ${({ theme }) => theme.FONTS.POPPINS};
  font-size: ${({ theme }) => theme.FONT_SIZES.XXLARGE};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.BOLD};
  line-height: 1.4;
`
