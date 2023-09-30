import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 10px;
  width: 400px;
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 2px rgb(8 126 164) solid;
  border-radius: 10px;
`

export const WrapperDisplay = styled(Wrapper)<IWrapperDisplay>`
  width: 100%;
  height: 160px;
  align-items: center;
  justify-content: center;
  row-gap: 15px;
  color: ${({current, max, verification}) => current === max || verification ? 'darkred' : 'rgb(8 126 164)'};

  h3 {
    font-size: 80px;
  }

  h4 {
    margin: 0;
    font-size: 30px;
    color: rgb(8 126 164);
  }

  div {
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`

export const WrapperButtons = styled(Wrapper)`
  width: 100%;
  height: 105px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  column-gap: 20px;
`

interface IWrapperDisplay {
	current?: number
	max?: number
	verification?: boolean
}