import React from 'react';
import {
    atom,
    useRecoilValue,
    useRecoilCallback,
} from 'jared-recoil';

const dataAtom = atom({
    key: 'dataAtom',
    default: []
});

function FetchRequest() {
    const fetchRequest = useRecoilCallback(async ({set}) => {
        const response = await fetch(`https://reqres.in/api/users?page=1`)
        const userDetails = await response.json();
        set(dataAtom, userDetails.data);
    },[]);

        return (
            <button onClick={fetchRequest}>Fetch Request</button>
        )
}

const List = () => {
    const contents = useRecoilValue(dataAtom);
    return contents.map(v=>(
        <p key={v.id}>
            <b>Name</b>: {v.first_name} {v.last_name} <a href={`mailto: ${v.email}`}>{v.email}</a>
        </p>
    ))
}

const Title = () => (
    <h3>Async Fetch with useCallback</h3>
)

const Example5UseRecoilCallback = () => (
<>
    <Title/>
    <List/>
    <FetchRequest/>
</>
)
export default Example5UseRecoilCallback;
