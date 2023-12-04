type ActionType = ReturnType<typeof increment> | ReturnType<typeof setDefault>

const initialState = 0

export const countReducer = (state = initialState, action: ActionType): number => {
	switch (action.type) {
		case 'INC':
			return state + 1
		case 'SET':
			return action.payload.value
		default:
			return state
	}
}

export const increment = () => ({type: 'INC' as const})
export const setDefault = (value: number) => ({type: 'SET' as const, payload: {value}})