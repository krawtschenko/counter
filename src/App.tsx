import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Wrapper, WrapperButtons, WrapperDisplay} from "./style/Wrapper";
import {Button} from "./style/Button";
import {Input} from "./style/Input";

function App() {
	const [input, setInput] = useState({min: 0, max: 5})
	const [count, setCount] = useState<number>(input.min)
	const [text, setText] = useState<string | null>(null)

	function increment() {
		setCount(prevState => prevState + 1)
	}

	function reset() {
		setCount(input.min)
	}

	function changeInputValueMin(value: ChangeEvent<HTMLInputElement>) {
		setInput({min: Number(value.currentTarget.value), max: input.max})
		setText('Click Set')
	}

	function changeInputValueMax(value: ChangeEvent<HTMLInputElement>) {
		setInput({min: input.min, max: Number(value.currentTarget.value)})
		setText('Click Set')
	}

	function setValue() {
		setCount(input.min)
		setText(null)
	}

	const verificationMin = (input.min >= input.max) || (input.min < 0)
	const verificationMax = input.max < 0

	return (
		<div className="App">
			<Wrapper>
				<WrapperDisplay>
					<Input onChange={(event) => changeInputValueMin(event)} value={input.min} verification={verificationMin}/>
					<Input onChange={(event) => changeInputValueMax(event)} value={input.max} verification={verificationMax}/>
				</WrapperDisplay>
				<WrapperButtons>
					<Button disabled={verificationMin || verificationMax} onClick={setValue}>Set</Button>
				</WrapperButtons>
			</Wrapper>
			<Wrapper>
				<WrapperDisplay current={count} max={input.max}>
					<h3>
						{text || count}
					</h3>
				</WrapperDisplay>
				<WrapperButtons>
					<Button disabled={(count === input.max) || (text !== null)} onClick={increment}>Inc</Button>
					<Button disabled={(count === input.min) || (text !== null)} onClick={reset}>Reset</Button>
				</WrapperButtons>
			</Wrapper>
		</div>
	);
}

export default App;
