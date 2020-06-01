import React from 'react';
import {
    atom,
    atomFamily,
    useRecoilState,
    selectorFamily,
    useRecoilValue,
} from 'jared-recoil';
import Title from "./common/Title";

const counterState = atomFamily({
    key: 'counterState',
    default: param=>param,
});

const myNumberState = atom({
    key: 'myNumberState',
    default: 2,
})

const myMultipliedState = selectorFamily({
    key: 'MyMultipliedNumber',
    get: (multiplier) => ({get}) => get(myNumberState) * multiplier,
});

const MultipliedState = ({multiplier}) => {
    const multipliedNumber = useRecoilValue(myMultipliedState(multiplier));
    return <p>Multiplied by <b>{multiplier}</b> = {multipliedNumber}</p>;
}
const Number = () => {
    const number = useRecoilValue(myNumberState);
  return <h3>Number: {number}</h3>
}

export default () => (
    <>
        <Title>Sample For: selectorFamily</Title>
        <Number/>
        <MultipliedState multiplier={5}/>
        <MultipliedState multiplier={6}/>
    </>
);
