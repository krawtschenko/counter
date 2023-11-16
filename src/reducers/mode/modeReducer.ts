type ActionType = ReturnType<typeof changeMode>

const initialState = 'Counter' as 'Counter' | 'Settings'

export const modeReducer = (state = initialState, action: ActionType) => {
	switch (action.type) {
		case 'MODE':
			return action.payload.mode
		default:
			return state
	}
}

export const changeMode = (mode: 'Counter' | 'Settings') => ({type: 'MODE' as const, payload: {mode}})