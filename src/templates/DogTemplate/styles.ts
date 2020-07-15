import styled, { css } from "styled-components"
import LineInMotion from "../../../static/line-in-motion.svg"

export const Container = styled.main`
  background-color: ${({ theme }) => theme.PALETTE.WHITE};
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.BOX_SHADOWS.LANDING_BODY};
  box-sizing: border-box;
  display: grid;
  grid-column: 2/-2;
  grid-column-gap: 20px;
  grid-template-columns: repeat(14, 1fr);
  height: 100%;
  padding-bottom: 20px;
  position: relative;

  @media screen and (min-width: ${({ theme }) => theme.BREAKPOINTS.MEDIUM}) {
    padding-bottom: 30px;
  }
`

export const Navigation = styled.nav`
  align-items: center;
  box-sizing: border-box;
  display: flex;
  grid-column: 2/-2;
  justify-content: space-between;
  padding: 20px 0;

  @media screen and (min-width: ${({ theme }) => theme.BREAKPOINTS.MEDIUM}) {
    padding: 30px 0;
  }
`

export const LeftColumn = styled.div`
  grid-column: 2/-2;
  margin-bottom: 30px;

  @media screen and (min-width: ${({ theme }) => theme.BREAKPOINTS.MEDIUM}) {
    grid-column: 2/6;
    margin-bottom: 0;
  }
`

export const ImageWrapper = styled.div`
  margin-bottom: 25px;
  position: relative;

  &::before {
    background-color: ${({ theme }) => theme.PALETTE.CREAM_BRULEE};
    content: "";
    display: none;
    height: 100%;
    left: -50px;
    mask: url(${LineInMotion}) no-repeat center;
    mask-size: contain;
    position: absolute;
    top: 50px;
    width: 100%;

    @media screen and (min-width: ${({ theme }) => theme.BREAKPOINTS.MEDIUM}) {
      display: block;
    }
  }
`

export const RightColumn = styled.div`
  grid-column: 2/-2;

  @media screen and (min-width: ${({ theme }) => theme.BREAKPOINTS.MEDIUM}) {
    grid-column: 6/-2;
  }
`

export const Age = styled.span`
  font-family: ${({ theme }) => theme.FONTS.POPPINS};
  font-size: ${({ theme }) => theme.FONT_SIZES.SMALL};
  color: ${({ theme }) => theme.PALETTE.MINE_SHAFT}50;
  display: block;
  margin: 5px 0 10px;

  @media screen and (min-width: ${({ theme }) => theme.BREAKPOINTS.MEDIUM}) {
    margin: 0 0 10px;
  }
`

export const Section = styled.section`
  margin-top: 15px;

  @media screen and (min-width: ${({ theme }) => theme.BREAKPOINTS.MEDIUM}) {
    margin-top: 30px;
  }
`

export const styles = {
  body: css`
    box-sizing: border-box;
    padding: 20px 0;

    @media screen and (min-width: ${({ theme }) => theme.BREAKPOINTS.MEDIUM}) {
      padding: 35px 0;
    }
  `,
  avatar: {
    borderRadius: "10px",
  },
  cta: css`
    position: relative;
    width: 100%;
    z-index: 1;
  `,
  name: css`
    font-size: ${({ theme }) => theme.FONT_SIZES.XLARGE};

    @media screen and (min-width: ${({ theme }) => theme.BREAKPOINTS.LARGE}) {
      font-size: ${({ theme }) => theme.FONT_SIZES.XXLARGE};
    }
  `,
  tag: css`
    margin-right: 5px;
  `,
  sectionHeading: css`
    font-size: ${({ theme }) => theme.FONT_SIZES.XLARGE};
    margin-bottom: 10px;
  `,
}
