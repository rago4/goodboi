import styled from "styled-components"

export const Overlay = styled.div`
  background-color: ${({ theme }) => theme.PALETTE.BLACK}90;
  height: 100%;
  left: 0;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 2;
`

export const Dashboard = styled.div`
  display: flex;
  position: absolute;
  right: 0;
`

export const Button = styled.button`
  align-items: center;
  background-color: transparent;
  border: 0;
  color: ${({ theme }) => theme.PALETTE.WHITE};
  cursor: pointer;
  display: flex;
  font-family: ${({ theme }) => theme.FONTS.POPPINS};
  font-size: 32px;
  height: 45px;
  justify-content: center;
  width: 45px;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`

export const CurrentImage = styled.img`
  height: auto;
  left: 50%;
  max-height: calc(100% - 40px);
  max-width: calc(100% - 40px);
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: auto;
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 20px;
`

export const ImageWrapper = styled.div`
  background-color: ${({ theme }) => theme.PALETTE.BLACK}50;
  border-radius: 10px;
  cursor: pointer;
  display: grid;
  overflow: hidden;

  &::before {
    box-sizing: border-box;
    content: "";
    display: block;
    grid-area: 1 / 1 / 2 / 2;
    padding-bottom: 100%;
  }
`

export const Image = styled.img`
  display: block;
  grid-area: 1 / 1 / 2 / 2;
  height: 100%;
  object-fit: contain;
  width: 100%;
`
