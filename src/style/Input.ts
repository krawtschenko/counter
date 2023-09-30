import styled from "styled-components";

export const Input = styled.input.attrs({
	type: "number",
})<IInput>`
  padding: 10px;
  width: 250px;
	height: 50px;
  border: 2px rgb(8 126 164) solid;
  border-radius: 10px;
  color: rgb(8 126 164);
  font-size: 20px;
  background: ${({verification}) => verification ? 'darkred' : 'none'};
`;

interface IInput {
	verification: boolean
}