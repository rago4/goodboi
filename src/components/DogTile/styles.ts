import styled, { css } from "styled-components"
import LineInMotion from "../../../static/line-in-motion.svg"

export const Age = styled.div`
  font-family: ${({ theme }) => theme.FONTS.POPPINS};
  font-size: ${({ theme }) => theme.FONT_SIZES.SMALL};
  color: ${({ theme }) => theme.PALETTE.MINE_SHAFT}50;
  margin-left: 10px;
`

export const Container = styled.div`
  background-color: ${({ theme }) => theme.PALETTE.WHITE};
  box-shadow: ${({ theme }) => theme.BOX_SHADOWS.BUTTON};
  box-sizing: border-box;
  border-radius: 20px;
  padding: 25px;
  position: relative;
  width: 100%;

  &::before {
    background-color: ${({ theme }) => theme.PALETTE.CREAM_BRULEE};
    content: "";
    display: none;
    height: 160px;
    left: 0;
    mask: url(${LineInMotion}) no-repeat center;
    mask-size: contain;
    position: absolute;
    width: 160px;
    top: 60px;

    @media screen and (min-width: ${({ theme }) => theme.BREAKPOINTS.SMALL}) {
      display: block;
    }
  }

  &:nth-child(2n)::before {
    background-color: ${({ theme }) => theme.PALETTE.PINK_SALMON};
  }

  &:nth-child(3n)::before {
    background-color: ${({ theme }) => theme.PALETTE.MELROSE};
  }

  @media screen and (min-width: ${({ theme }) => theme.BREAKPOINTS.SMALL}) {
    align-items: flex-start;
    display: flex;
    padding: 35px;
  }
`

export const Details = styled.div`
  align-items: center;
  display: flex;
`

export const ImageWrapper = styled.div`
  display: block;
  border-radius: 10px;
  height: auto;
  margin: 0 0 10px 0;
  overflow: hidden;
  width: 100%;
  z-index: 1;

  @media screen and (min-width: ${({ theme }) => theme.BREAKPOINTS.SMALL}) {
    flex-shrink: 0;
    height: auto;
    margin: 0 25px 0 0;
    width: 160px;
  }
`

export const PersonalityTraits = styled.div`
  margin: 5px 0 10px -7px;

  @media screen and (min-width: ${({ theme }) => theme.BREAKPOINTS.MEDIUM}) {
    margin: 0;
  }
`

export const Content = styled.div`
  width: 100%;
`

export const Top = styled.div`
  @media screen and (min-width: ${({ theme }) => theme.BREAKPOINTS.MEDIUM}) {
    align-items: center;
    display: flex;
    justify-content: space-between;
  }
`

export const styles = {
  name: css`
    font-size: ${({ theme }) => theme.FONT_SIZES.XLARGE};
  `,
  description: css`
    margin: 3px 0 15px;
  `,
}
