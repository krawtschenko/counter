import {combineReducers, legacy_createStore} from "redux";
import {inputReducer} from "../reducers/input/inputReducer";
import {countReducer} from "../reducers/count/countReducer";
import {modeReducer} from "../reducers/mode/modeReducer";

const rootReducer = combineReducers({
	input: inputReducer,
	count: countReducer,
	mode: modeReducer
})

export const store = legacy_createStore(rootReducer)
export type TAppRootState = ReturnType<typeof rootReducer>