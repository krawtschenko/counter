import React, {ChangeEvent, useState} from 'react';
import './App.css';
import {Wrapper, WrapperButtons, WrapperDisplay} from "./style/Wrapper";
import {Button} from "./style/Button";
import {Input} from "./style/Input";

function App() {
	const [input, setInput] = useState({min: 0, max: 5})
	const [count, setCount] = useState<number>(input.min)
	const [text, setText] = useState<string | null>(null)

	const verificationMin = (input.min >= input.max) || (input.min < 0)
	const verificationMax = (input.max <= input.min) || (input.max < 0)

	function increment() {
		setCount(prevState => prevState + 1)
	}

	function reset() {
		setCount(input.min)
	}

	function changeInputValueMin(value: ChangeEvent<HTMLInputElement>) {
		const newValue = Number(value.currentTarget.value)
		setInput({min: newValue, max: input.max})
		newValue < 0 || newValue >= input.max ? setText('Error') : setText('Click Set')
	}

	function changeInputValueMax(value: ChangeEvent<HTMLInputElement>) {
		const newValue = Number(value.currentTarget.value)
		setInput({min: input.min, max: newValue})
		newValue <= 0 || newValue <= input.min ? setText('Error') : setText('Click Set')
	}

	function setValue() {
		setCount(input.min)
		setText(null)
	}

	return (
		<div className="App">
			<Wrapper>
				<WrapperDisplay>
					<div>
						<h4>Min</h4>
						<Input onChange={(event) => changeInputValueMin(event)} value={input.min} verification={verificationMin}/>
					</div>
					<div>
						<h4>Max</h4>
						<Input onChange={(event) => changeInputValueMax(event)} value={input.max} verification={verificationMax}/>
					</div>
				</WrapperDisplay>
				<WrapperButtons>
					<Button disabled={verificationMin || verificationMax} onClick={setValue}>Set</Button>
				</WrapperButtons>
			</Wrapper>
			<Wrapper>
				<WrapperDisplay current={count} max={input.max} verification={verificationMin || verificationMax}>
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
