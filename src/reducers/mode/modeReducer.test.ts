import {changeMode, modeReducer} from "./modeReducer";

test('mode should be changed', () => {
	const startState: 'Counter' | 'Settings' = 'Counter'

	const action = changeMode('Settings');

	const endState = modeReducer(startState, action)
	expect(endState).toEqual('Settings');
})