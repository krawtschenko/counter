import {countReducer, increment, setDefault} from "./countReducer";

test('start value should be changed', () => {
	const startState: number = 0

	const action = increment();

	const endState = countReducer(startState, action)
	expect(endState).toEqual(1);
})

test('default value should be changed', () => {
	const startState: number = 0

	const action = setDefault(5);

	const endState = countReducer(startState, action)
	expect(endState).toEqual(5);
})