type ActionType = ReturnType<typeof increment>

export const countReducer = (state: number, action: ActionType) => {
	switch (action.type) {
		case 'INC':
			return state + 1
		default:
			return state
	}
}

export const increment = () => ({type: 'INC' as const})