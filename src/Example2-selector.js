import React, { useRef } from "react";
import {
  atom,
  selector,
  useRecoilValue,
  useRecoilState,
  useSetRecoilState,
} from "recoil";
import Title from "./common/Title";

const tempFahrenheit = atom({
  key: "tempFahrenheit",
  default: 32,
});

const Farenheit = () => {
  const course = useRecoilValue(tempFahrenheit);
  return <h3>Fahrenheit: {course}</h3>;
};

const AddFahrenheit = () => {
  const ref = useRef();
  const set = useSetRecoilState(tempFahrenheit);
  return (
    <div>
      Add Fahrenheit:
      <input ref={ref} />
      <button onClick={() => set((s) => s + +ref.current.value)}>Add</button>
    </div>
  );
};

const tempCelcius = selector({
  key: "tempCelcius",
  get: ({ get }) => ((get(tempFahrenheit) - 32) * 5) / 9,
  set: ({ set }, newValue) => {
    set(tempFahrenheit, (newValue * 9) / 5 + 32);
  },
});

const TempCelcius = () => {
  const [tempVal, setTempCelcius] = useRecoilState(tempCelcius);
  return (
    <div>
      <h3>Celcius:{tempVal?.toFixed(2)}</h3>
      <button onClick={() => setTempCelcius((celcius) => celcius + 100)}>
        Add 100 Celcius
      </button>
    </div>
  );
};

export default () => (
  <>
    <Title>Selector Example</Title>
    <Farenheit />
    <AddFahrenheit />
    <TempCelcius />
  </>
);
