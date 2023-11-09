import {changeMax, changeMin, IInput, inputReducer} from "./inputReducer";

test('min value should be changed', () => {
	const startState: IInput = {min: 0, max: 5}

	const action = changeMin();

	const endState = inputReducer(startState, action)
	expect(endState.min).toEqual(1);
	expect(endState.max).toEqual(5);
})

test('max value should be changed', () => {
	const startState: IInput = {min: 0, max: 5}

	const action = changeMax();

	const endState = inputReducer(startState, action)
	expect(endState.min).toEqual(0);
	expect(endState.max).toEqual(6);
})