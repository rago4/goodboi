import styled from "styled-components"

export const Text = styled.p`
  color: ${({ theme }) => theme.PALETTE.MINE_SHAFT};
  font-family: ${({ theme }) => theme.FONTS.PT_SERIF};
  font-size: ${({ theme }) => theme.FONT_SIZES.NORMAL};
  line-height: 2;
`
