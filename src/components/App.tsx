import React, {ChangeEvent} from 'react';
import './App.css';
import {Wrapper, WrapperButtons, WrapperDisplay} from "../style/Wrapper";
import {Button} from "../style/Button";
import {Input} from "../style/Input";
import {useDispatch, useSelector} from "react-redux";
import {TAppRootState} from "../state/store";
import {changeMax, changeMin} from "../reducers/input/inputReducer";
import {increment, setDefault} from "../reducers/count/countReducer";
import {changeMode} from "../reducers/mode/modeReducer";

function App() {
	// const [input, setInput] = useState({min: 0, max: 5})
	// const [count, setCount] = useState<number>(input.min)
	// const [mode, setMode] = useState<'Counter' | 'Settings'>('Counter')

	const {input, count, mode} = useSelector<TAppRootState, TAppRootState>(state => state)
	const dispatch = useDispatch()

	const verificationMin = (input.min >= input.max) || (input.min < 0)
	const verificationMax = (input.max <= input.min) || (input.max < 0)

	function changeInputValue(value: ChangeEvent<HTMLInputElement>, whatChange: 'min' | 'max') {
		const newValue = Number(value.currentTarget.value)

		if (whatChange === 'min') {
			// setInput({min: newValue, max: input.max})
			dispatch(changeMin(newValue))
		} else {
			// setInput({min: input.min, max: newValue})
			dispatch(changeMax(newValue))
		}
	}

	function setValue() {
		// setCount(input.min)
		dispatch(setDefault(input.min))
		// setMode('Counter')
		dispatch(changeMode('Counter'))
	}

	return (
		<div className="App">
			<Wrapper>
				{mode === 'Counter'
					? <>
						<WrapperDisplay current={count} max={input.max} verification={verificationMin || verificationMax}>
							<h3>
								{count}
							</h3>
						</WrapperDisplay>
						<WrapperButtons>
							<Button disabled={(count === input.max)} onClick={() => dispatch(increment())}>Inc</Button>
							<Button disabled={(count === input.min)} onClick={() => dispatch(setDefault(input.min))}>Reset</Button>
							<Button onClick={() => dispatch(changeMode('Settings'))}>Set</Button>
						</WrapperButtons>
					</>
					: <>
						<WrapperDisplay>
							<div>
								<h4>Min</h4>
								<Input onChange={(event) => changeInputValue(event, 'min')} value={input.min}
								       verification={verificationMin}/>
							</div>
							<div>
								<h4>Max</h4>
								<Input onChange={(event) => changeInputValue(event, "max")} value={input.max}
								       verification={verificationMax}/>
							</div>
						</WrapperDisplay>
						<WrapperButtons>
							<Button disabled={verificationMin || verificationMax} onClick={setValue}>Set</Button>
						</WrapperButtons>
					</>}
			</Wrapper>
		</div>
	);
}

export default App;