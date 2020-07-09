import { Link } from "gatsby"
import styled, { css } from "styled-components"

const buttonStyles = css`
  background-color: ${({ theme }) => theme.PALETTE.MALIBU};
  border: 0;
  border-radius: 50px;
  box-shadow: ${({ theme }) => theme.BOX_SHADOWS.BUTTON};
  box-sizing: border-box;
  color: ${({ theme }) => theme.PALETTE.WHITE};
  cursor: pointer;
  font-family: ${({ theme }) => theme.FONTS.POPPINS};
  font-size: ${({ theme }) => theme.FONT_SIZES.LARGE};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.SEMI_BOLD};
  line-height: normal;
  padding: 12px 20px;
  text-align: center;
  text-transform: uppercase;
  transition: transform ${({ theme }) => theme.TRANSITION};

  &:focus,
  &:hover {
    transform: translateY(-2px);
  }
`

export const Button = styled.button`
  ${buttonStyles}
`

export const ButtonLink = styled(Link)`
  ${buttonStyles}
  text-decoration: none;
  display: inline-block;
`

export const TextButtonLink = styled(Link)`
  ${buttonStyles}
  background-color: transparent;
  border-radius: 0;
  box-shadow: none;
  color: ${({ theme }) => theme.PALETTE.MALIBU};
  display: inline-block;
  padding: 0;
  text-decoration: none;
`
