import React, {useState} from 'react';
import './App.css';
import {Wrapper, WrapperButtons, WrapperDisplay} from "./style/Wrapper";
import {Button} from "./style/Button";

function App() {
	const [count, setCount] = useState<number>(0)
	const min = 0, max = 5

	return (
		<div className="App">
			<Wrapper>
				<WrapperDisplay current={count} max={max}>
					<h3>{count}</h3>
				</WrapperDisplay>
				<WrapperButtons>
					<Button disabled={count === max} onClick={() => setCount(count => count + 1)}>Inc</Button>
					<Button disabled={count === min} onClick={() => setCount(min)}>Reset</Button>
				</WrapperButtons>
			</Wrapper>
		</div>
	);
}

export default App;
