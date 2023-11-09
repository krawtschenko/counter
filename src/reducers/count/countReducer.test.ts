import {countReducer, increment} from "./countReducer";

test('start value should be changed', () => {
	const startState: number = 0

	const action = increment();

	const endState = countReducer(startState, action)
	expect(endState).toEqual(1);
})