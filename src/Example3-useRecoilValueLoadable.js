import React from 'react';
import {
    atom,
    selector,
    useRecoilValueLoadable,
    useRecoilState,
} from 'jared-recoil';

const paginationState = atom({
    key: 'paginationState',
    default: 1
})

const fetchUserDetails = selector({
    key: "userDetailsSelector",
    get: async ({ get }) => {
        try {
            const response = await fetch(`https://reqres.in/api/users?page=${get(paginationState)}`);
            const userDetails = await response.json();
            return userDetails.data;
        } catch (error) {
            throw error;
        }
    },
});

const Navigation = () => {
    const [page,setPage] = useRecoilState(paginationState)
    return (
        <span>
            <button disabled={page===1} onClick={()=>setPage(p=>p-1)}>Prev Page</button>
            <p>{page}</p>
            <button onClick={()=>setPage(p=>p+1)}>Next Page</button>
        </span>
    )
}

const Example3UseRecoilValueLoadable = () => {
    const {contents,state} = useRecoilValueLoadable(fetchUserDetails)

    switch (state) {
        case 'hasValue':
            return (
                <div>
                    {contents.map(v=>(
                        <p key={v.id}>
                            <b>Name</b>: {v.first_name} {v.last_name} <a href={`mailto: ${v.email}`}>{v.email}</a>
                        </p>
                    ))}
                    <Navigation/>
                </div>
            );
        case 'loading':
            return <div>Loading...</div>;
        case 'hasError':
            return <h3>Error</h3>
    }

}
export default Example3UseRecoilValueLoadable;
