import {changeMax, changeMin, IInput, inputReducer} from "./inputReducer";

let startState: IInput = {min: 0, max: 5}

beforeEach(() => {
	startState = {min: 0, max: 5}
})

test('min value should be changed', () => {
	const action = changeMin(1);
	const endState = inputReducer(startState, action)

	expect(endState.min).toEqual(1);
	expect(endState.max).toEqual(5);
})

test('max value should be changed', () => {
	const action = changeMax(6);
	const endState = inputReducer(startState, action)

	expect(endState.min).toEqual(0);
	expect(endState.max).toEqual(6);
})