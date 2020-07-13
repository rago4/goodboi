import styled from "styled-components"

export const Tag = styled.span<{ background?: string }>`
  background-color: ${({ background, theme }) =>
    background || theme.PALETTE.MELROSE};
  border: 0;
  border-radius: 10px;
  box-shadow: ${({ theme }) => theme.BOX_SHADOWS.TAG};
  color: ${({ theme }) => theme.PALETTE.WHITE};
  font-family: ${({ theme }) => theme.FONTS.POPPINS};
  font-size: ${({ theme }) => theme.FONT_SIZES.XSMALL};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.MEDIUM};
  text-transform: lowercase;
  padding: 1px 8px;
`
