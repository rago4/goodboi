import styled, { css } from "styled-components"
import ChevronDown from "../../static/chevron-down.png"

const TOGGLER_DIMENSIONS = 30
const SIDEBAR_WIDTH = 345

// COMPONENTS
export const Sidebar = styled.aside<{ isOpen: boolean }>`
  background-color: ${({ theme }) => theme.PALETTE.WHITE};
  box-shadow: ${({ theme }) => theme.BOX_SHADOWS.ASIDE};
  box-sizing: border-box;
  grid-column: 1/5;
  height: 100vh;
  left: ${({ isOpen }) => (isOpen ? 0 : `-100%`)};
  padding: 38px 28px;
  position: fixed;
  top: 0;
  transition: left ${({ theme }) => theme.TRANSITION};
  width: calc(100% - ${TOGGLER_DIMENSIONS}px);
  overflow-y: auto;
  z-index: 2;

  @media screen and (min-width: ${({ theme }) => theme.BREAKPOINTS.SMALL}) {
    width: ${SIDEBAR_WIDTH}px;
    left: ${({ isOpen }) => (isOpen ? 0 : `-${SIDEBAR_WIDTH}px`)};
  }

  @media screen and (min-width: ${({ theme }) => theme.BREAKPOINTS.LARGE}) {
    left: 0;
  }
`

export const Toggler = styled.button<{ isSidebarOpen: boolean }>`
  background-color: ${({ theme }) => theme.PALETTE.WHITE};
  border: 0;
  border-bottom-right-radius: 10px;
  box-shadow: ${({ theme }) => theme.BOX_SHADOWS.ASIDE};
  cursor: pointer;
  height: ${TOGGLER_DIMENSIONS}px;
  left: ${({ isSidebarOpen }) =>
    isSidebarOpen ? `calc(100% - ${TOGGLER_DIMENSIONS}px)` : 0};
  padding: 0;
  position: fixed;
  top: 0;
  transition: left ${({ theme }) => theme.TRANSITION};
  width: ${TOGGLER_DIMENSIONS}px;
  z-index: 1;

  &::before {
    content: "";
    background: url(${ChevronDown}) no-repeat center;
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transform: ${({ isSidebarOpen }) =>
      isSidebarOpen ? "rotate(90deg)" : "rotate(-90deg)"};
    transition: transform ${({ theme }) => theme.TRANSITION};
    width: 100%;
  }

  @media screen and (min-width: ${({ theme }) => theme.BREAKPOINTS.SMALL}) {
    left: ${({ isSidebarOpen }) => (isSidebarOpen ? `${SIDEBAR_WIDTH}px` : 0)};
  }

  @media screen and (min-width: ${({ theme }) => theme.BREAKPOINTS.LARGE}) {
    display: none;
    left: 0;
  }
`

export const List = styled.main`
  box-sizing: border-box;
  margin-left: 0;
  overflow: auto;
  padding: 25px;
  transition: margin-left ${({ theme }) => theme.TRANSITION};
  width: 100%;

  @media screen and (min-width: ${({ theme }) => theme.BREAKPOINTS.SMALL}) {
    padding: 35px;
  }

  @media screen and (min-width: ${({ theme }) => theme.BREAKPOINTS.LARGE}) {
    margin-left: ${SIDEBAR_WIDTH}px;
  }
`

// STYLES
export const styles = {
  body: css`
    display: flex;
  `,
  logo: css`
    margin-bottom: 44px;
    text-align: center;
  `,
  select: css`
    margin-bottom: 18px;
  `,
  submit: css`
    margin-top: 30px;
    width: 100%;
  `,
  dogTile: css`
    margin-bottom: 20px;

    &:last-child {
      margin-bottom: 0;
    }

    @media screen and (min-width: ${({ theme }) => theme.BREAKPOINTS.MEDIUM}) {
      margin-bottom: 35px;
    }
  `,
}
