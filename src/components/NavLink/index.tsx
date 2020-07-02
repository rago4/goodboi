import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const NavLink = styled(props => (
  <Link {...props} activeClassName="active" />
))`
  color: ${({ theme }) => theme.PALETTE.MINE_SHAFT};
  font-family: ${({ theme }) => theme.FONTS.POPPINS};
  font-size: ${({ theme }) => theme.FONT_SIZES.LARGE};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.SEMI_BOLD};
  position: relative;
  text-decoration: none;
  text-transform: uppercase;

  &::before {
    background-color: ${({ theme }) => theme.PALETTE.MALIBU};
    content: "";
    display: block;
    height: 3px;
    left: 50%;
    opacity: 0;
    position: absolute;
    top: calc(100% + 5px);
    transform: translateX(-50%);
    transition: opacity ${({ theme }) => theme.TRANSITION};
    width: 15px;
  }

  &.active::before,
  &:hover::before {
    opacity: 1;
  }
`
