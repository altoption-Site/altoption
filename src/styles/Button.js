import styled from "styled-components"

const Button = styled.button`
  color: #030325;
  background-color: ${({ styleType }) =>
    styleType === "primary" ? "#4eddd4" : "#fff"};
  height: 36px;
  padding: 0 16px;
  border-radius: 4px;
  border: none;
  font-size: 14px;
  cursor: pointer;
`

export { Button }
