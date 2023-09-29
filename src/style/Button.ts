import styled from "styled-components";

export const Button = styled.button`
  padding: 3px;
  text-align: center;
  font-size: 25px;
  font-weight: bold;
  border: none;
  border-radius: 10px;
  background-color: rgb(8 126 164);
  cursor: pointer;
  transition: all 0.4s;

  &:hover {
    background-color: darkgoldenrod;
  }

  &:disabled {
    pointer-events: none
  }
`