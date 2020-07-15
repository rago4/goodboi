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
  z-index: 1;
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

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  grid-gap: 20px;
`

export const ImageWrapper = styled.div`
  background-color: ${({ theme }) => theme.PALETTE.BLACK}50;
  border-radius: 10px;
  cursor: pointer;
  overflow: hidden;
`

export const styles = {
  currentImgContainer: {
    height: "100%",
    position: "relative",
  },
  currentImg: {
    height: "auto",
    left: "50%",
    maxHeight: "calc(100% - 40px)",
    maxWidth: "calc(100% - 40px)",
    position: "absolute",
    top: "50%",
    transform: "translate(-50%, -50%)",
    width: "auto",
  },
}
