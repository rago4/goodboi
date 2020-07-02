import styled from "styled-components"

export const Button = styled.button`
  background-color: ${({ theme }) => theme.PALETTE.MALIBU};
  border: 0;
  border-radius: 50px;
  box-shadow: ${({ theme }) => theme.BOX_SHADOWS.BUTTON};
  color: ${({ theme }) => theme.PALETTE.WHITE};
  cursor: pointer;
  font-family: ${({ theme }) => theme.FONTS.POPPINS};
  font-size: ${({ theme }) => theme.FONT_SIZES.LARGE};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.SEMI_BOLD};
  padding: 12px 20px;
  text-transform: uppercase;
  transition: transform ${({ theme }) => theme.TRANSITION};

  &:focus,
  &:hover {
    transform: translateY(-2px);
  }
`
