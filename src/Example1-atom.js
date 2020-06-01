import React, { useRef } from "react";
import {
  atom,
  useRecoilValue,
  useRecoilState,
  useSetRecoilState,
} from "jared-recoil";

const countState = atom({
  key: "countState",
  default: 0,
});

const Counter = () => {
  const course = useRecoilValue(countState);
  return (
    <div>
      <h3>Count: {course}</h3>
    </div>
  );
};

const Addition = () => {
  const ref = useRef();
  const set = useSetRecoilState(countState);
  return (
    <div>
      Add:
      <input ref={ref} />
      <button onClick={() => set((s) => s + +ref.current.value)}>Add</button>
    </div>
  );
};

export default () => (
  <div>
    <h1>Calculator</h1>
    <Counter />
    <Addition />
  </div>
);
