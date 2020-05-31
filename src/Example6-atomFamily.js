import React from 'react';
import {
    atomFamily,
    useRecoilValue,
    useRecoilCallback,
} from 'jared-recoil';
import Title from "./common/Title";




const counterState = atomFamily({
    key: 'counterState',
    default: param=>param,
});

const Counter = ({initialValue}) => {
    const counter = useRecoilValue(counterState(initialValue))
    return <h3>Counting:{counter}</h3>
}
const Example6 = () => (
    <>
        <Title>Sample For: atomFamily</Title>
        <Counter initialValue={0}/>
        <Counter initialValue={5}/>
    </>
)
export default Example6;
