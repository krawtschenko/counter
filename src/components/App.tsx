import { ChangeEvent } from "react";
import "./App.css";
import { Wrapper, WrapperButtons, WrapperDisplay } from "../style/Wrapper";
import { Button } from "../style/Button";
import { Input } from "../style/Input";
import { useDispatch, useSelector } from "react-redux";
import { TAppRootState } from "../state/store";
import { changeMax, changeMin } from "../reducers/input/inputReducer";
import { increment, setDefault } from "../reducers/count/countReducer";
import { changeMode } from "../reducers/mode/modeReducer";

function App() {
  const input = useSelector<TAppRootState, { min: number; max: number }>(
    (state) => state.input
  );
  const count = useSelector<TAppRootState, number>((state) => state.count);
  const mode = useSelector<TAppRootState, "Counter" | "Settings">(
    (state) => state.mode
  );
  const dispatch = useDispatch();

  const verificationMin = input.min >= input.max || input.min < 0;
  const verificationMax = input.max <= input.min || input.max < 0;

  function changeInputValue(
    value: ChangeEvent<HTMLInputElement>,
    whatChange: "min" | "max"
  ) {
    const newValue = Number(value.currentTarget.value);

    if (whatChange === "min") {
      dispatch(changeMin(newValue));
    } else {
      dispatch(changeMax(newValue));
    }
  }

  function setValue() {
    dispatch(setDefault(input.min));
    dispatch(changeMode("Counter"));
  }

  return (
    <div className="App">
      <Wrapper>
        {mode === "Counter" ? (
          <>
            <WrapperDisplay
              current={count}
              max={input.max}
              verification={verificationMin || verificationMax}
            >
              <h3>{count}</h3>
            </WrapperDisplay>
            <WrapperButtons>
              <Button
                disabled={count === input.max}
                onClick={() => dispatch(increment())}
              >
                Inc
              </Button>
              <Button
                disabled={count === input.min}
                onClick={() => dispatch(setDefault(input.min))}
              >
                Reset
              </Button>
              <Button onClick={() => dispatch(changeMode("Settings"))}>
                Set
              </Button>
            </WrapperButtons>
          </>
        ) : (
          <>
            <WrapperDisplay>
              <div>
                <h4>Min</h4>
                <Input
                  onChange={(event) => changeInputValue(event, "min")}
                  value={input.min}
                  verification={verificationMin}
                />
              </div>
              <div>
                <h4>Max</h4>
                <Input
                  onChange={(event) => changeInputValue(event, "max")}
                  value={input.max}
                  verification={verificationMax}
                />
              </div>
            </WrapperDisplay>
            <WrapperButtons>
              <Button
                disabled={verificationMin || verificationMax}
                onClick={setValue}
              >
                Set
              </Button>
            </WrapperButtons>
          </>
        )}
      </Wrapper>
    </div>
  );
}

export default App;
