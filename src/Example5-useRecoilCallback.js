import React from "react";
import { atom, useRecoilValue, useRecoilCallback } from "recoil";
import Title from "./common/Title";

const dataAtom = atom({
  key: "dataAtom",
  default: [],
});

function FetchRequest() {
  const fetchRequest = useRecoilCallback(async ({ set }) => {
    const response = await fetch(`https://reqres.in/api/users?page=1`);
    const userDetails = await response.json();
    set(dataAtom, userDetails.data);
  }, []);

  return <button onClick={fetchRequest}>Fetch Request</button>;
}

const List = () => {
  const contents = useRecoilValue(dataAtom);
  return contents.map((v) => (
    <p key={v.id}>
      <b>Name</b>: {v.first_name} {v.last_name}{" "}
      <a href={`mailto: ${v.email}`}>{v.email}</a>
    </p>
  ));
};

export default () => (
  <>
    <Title>Async Fetch with useCallback</Title>
    <List />
    <FetchRequest />
  </>
);
