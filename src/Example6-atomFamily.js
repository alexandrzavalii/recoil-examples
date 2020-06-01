import React from "react";
import { atomFamily, useRecoilState } from "jared-recoil";
import Title from "./common/Title";

const counterState = atomFamily({
  key: "counterState",
  default: (param) => param,
});

const Counter = ({ initialValue }) => {
  const [counter, setCounter] = useRecoilState(counterState(initialValue));
  return (
    <>
      <h3>Counting:{counter}</h3>
      <button onClick={() => setCounter((val) => val + 1)}>add one</button>
    </>
  );
};

export default () => (
  <>
    <Title>Sample For: atomFamily</Title>
    <Counter initialValue={0} />
    <Counter initialValue={5} />
  </>
);
