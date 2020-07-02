import styled from "styled-components"

export const Wrapper = styled.div`
  box-sizing: border-box;
  margin-top: 30px;
  padding: 0 20px;

  &:last-child {
    margin-bottom: 30px;
  }
`

export const Name = styled.span`
  display: block;
  font-family: ${({ theme }) => theme.FONTS.POPPINS};
  font-size: ${({ theme }) => theme.FONT_SIZES.XLARGE};
  font-weight: ${({ theme }) => theme.FONT_WEIGHTS.BOLD};
  margin-bottom: 20px;
`

export const Code = styled.code`
  background-color: #f2f2f2;
  border-radius: 10px;
  box-sizing: border-box;
  color: grey;
  display: block;
  font-family: monospace;
  margin-top: 20px;
  padding: 16px;
`
