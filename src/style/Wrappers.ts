import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 10px;
  width: 400px;
  height: 300px;
  border: 2px rgb(8 126 164) solid;
  border-radius: 10px;
`

export const WrapperDisplay = styled(Wrapper)<IWrapperDisplay>`
  padding: 20px 10px;
  width: 100%;
  height: 160px;
  text-align: center;
  font-size: 80px;
  color: ${({current, max}) => current === max ? 'darkred' : 'rgb(8 126 164)'};
`

export const WrapperButtons = styled(Wrapper)`
  width: 100%;
  margin-top: 10px;
  padding: 30px 20px 30px;
  height: 105px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
`

interface IWrapperDisplay {
	current: number
	max: number
}