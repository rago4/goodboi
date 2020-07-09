import styled from "styled-components"
import ChevronDown from "../../../static/chevron-down.png"

export const Container = styled.div<{ isOpen: boolean }>`
  position: relative;

  &::before {
    background: url(${ChevronDown}) no-repeat center;
    background-size: contain;
    content: "";
    height: 12px;
    pointer-events: none;
    position: absolute;
    right: 20px;
    top: 38px;
    transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "auto")};
    transition: transform ${({ theme }) => theme.TRANSITION};
    width: 12px;
  }
`

export const Label = styled.label`
  display: block;
  font-family: ${({ theme }) => theme.FONTS.POPPINS};
  font-size: ${({ theme }) => theme.FONT_SIZES.NORMAL};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.MEDIUM};
  margin-bottom: 6px;
`

export const Input = styled.input<{ isOpen: boolean }>`
  background-color: ${({ theme }) => theme.PALETTE.WHITE};
  border: 0;
  border-bottom-left-radius: ${({ isOpen }) => (isOpen ? 0 : "10px")};
  border-bottom-right-radius: ${({ isOpen }) => (isOpen ? 0 : "10px")};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  box-shadow: ${({ theme }) => theme.BOX_SHADOWS.DROPDOWN};
  box-sizing: border-box;
  color: ${({ theme }) => theme.PALETTE.MINE_SHAFT};
  cursor: pointer;
  font-family: ${({ theme }) => theme.FONTS.POPPINS};
  font-size: ${({ theme }) => theme.FONT_SIZES.NORMAL};
  outline: 0;
  padding: 14px 20px;
  width: 100%;
`

export const Dropdown = styled.ul`
  box-shadow: ${({ theme }) => theme.BOX_SHADOWS.DROPDOWN};
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  overflow: hidden;
  position: absolute;
  top: 100%;
  width: 100%;
  z-index: 1;
`

export const Option = styled.button<{ isSelected: boolean }>`
  border: 0;
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.PALETTE.FOAM : theme.PALETTE.WHITE};
  color: ${({ theme }) => theme.PALETTE.MINE_SHAFT};
  cursor: pointer;
  font-family: ${({ theme }) => theme.FONTS.POPPINS};
  font-size: ${({ theme }) => theme.FONT_SIZES.NORMAL};
  outline: 0;
  padding: 10px 20px;
  text-align: left;
  width: 100%;

  &:hover {
    background-color: ${({ theme }) => theme.PALETTE.FOAM};
  }
`
