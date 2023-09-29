import React, {useState} from 'react';
import './App.css';
import {Wrapper, WrapperButtons, WrapperDisplay} from "./style/Wrappers";
import {Button} from "./style/Button";

function App() {
	const [count, setCount] = useState(0)
	const min = 0, max = 5

	function increment() {
		setCount(count => count + 1)
	}

	function reset() {
		setCount(min)
	}

	return (
		<div className="App">
			<Wrapper>
				<WrapperDisplay current={count} max={max}>
					{count}
				</WrapperDisplay>
				<WrapperButtons>
					<Button disabled={count === max} onClick={increment}>Inc</Button>
					<Button disabled={count === min} onClick={reset}>Reset</Button>
				</WrapperButtons>
			</Wrapper>
		</div>
	);
}

export default App;
