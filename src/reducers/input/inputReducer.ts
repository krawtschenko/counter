type ActionType = ReturnType<typeof changeMin> | ReturnType<typeof changeMax>

export interface IInput {
	min: number
	max: number
}

export const inputReducer = (state: IInput, action: ActionType) => {
	switch (action.type) {
		case 'MIN':
			return {...state, min: state.min + 1}
		case 'MAX':
			return {...state, max: state.max + 1}
		default:
			return state
	}
}

export const changeMin = () => ({type: 'MIN' as const})

export const changeMax = () => ({type: 'MAX' as const})