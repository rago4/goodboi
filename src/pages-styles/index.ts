import styled, { css } from "styled-components"

// COMPONENTS
export const Container = styled.main`
  background-color: ${({ theme }) => theme.PALETTE.WHITE};
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.BOX_SHADOWS.LANDING_BODY};
  display: grid;
  grid-column: 2/-2;
  grid-column-gap: 20px;
  grid-template-columns: repeat(14, 1fr);
  height: 100%;
`

export const Navigation = styled.nav`
  box-sizing: border-box;
  grid-column: 2/-2;
  justify-content: space-between;
  padding: 30px 0;

  div {
    margin-top: 20px;
  }

  @media screen and (min-width: ${({ theme }) => theme.BREAKPOINTS.SMALL}) {
    align-items: center;
    display: flex;

    div {
      margin-top: 0;
    }
  }

  @media screen and (min-width: ${({ theme }) => theme.BREAKPOINTS.LARGE}) {
    padding: 40px 0;
  }
`

export const Image = styled.img`
  display: none;
  grid-column: 2/6;
  height: auto;
  object-fit: contain;
  width: 100%;
  align-self: flex-end;

  @media screen and (min-width: ${({ theme }) => theme.BREAKPOINTS.MEDIUM}) {
    display: block;
  }
`

export const Content = styled.div`
  align-self: center;
  grid-column: 2/-2;
  padding-bottom: 40px;

  @media screen and (min-width: ${({ theme }) => theme.BREAKPOINTS.MEDIUM}) {
    grid-column: 6/-2;
  }
`

// STYLES
export const styles = {
  body: css`
    padding: 50px 0;
  `,
  navLink: css`
    margin-right: 30px;
  `,
  heading: css`
    font-size: ${({ theme }) => theme.FONT_SIZES.XLARGE};
    margin-bottom: 10px;

    @media screen and (min-width: ${({ theme }) => theme.BREAKPOINTS.LARGE}) {
      font-size: ${({ theme }) => theme.FONT_SIZES.XXLARGE};
    }
  `,
  copy: css`
    margin-bottom: 10px;
    width: 100%;

    @media screen and (min-width: ${({ theme }) => theme.BREAKPOINTS.LARGE}) {
      width: 87.5%;
    }
  `,
  cta: css`
    margin-top: 20px;
    width: 100%;

    @media screen and (min-width: ${({ theme }) => theme.BREAKPOINTS.LARGE}) {
      width: 37.5%;
    }
  `,
}
