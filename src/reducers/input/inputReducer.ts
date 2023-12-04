type ActionType = ReturnType<typeof changeMin> | ReturnType<typeof changeMax>;

export interface IInput {
  min: number;
  max: number;
}

const initialState: IInput = { min: 0, max: 5 };

export const inputReducer = (state = initialState, action: ActionType): IInput => {
  switch (action.type) {
    case "MIN":
      return { ...state, min: action.payload.value };
    case "MAX":
      return { ...state, max: action.payload.value };
    default:
      return state;
  }
};

export const changeMin = (value: number) => ({
  type: "MIN" as const,
  payload: { value },
});

export const changeMax = (value: number) => ({
  type: "MAX" as const,
  payload: { value },
});
