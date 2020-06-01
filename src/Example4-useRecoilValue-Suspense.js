import React from "react";
import { selector, useRecoilValue } from "jared-recoil";
import Title from "./common/Title";

const fetchUserDetails = selector({
  key: "userDetailsSelector",
  get: async ({ get }) => {
    try {
      const response = await fetch(`https://reqres.in/api/users?page=1`).then(
        (data) => new Promise((res) => setTimeout(() => res(data), 3000))
      );
      const userDetails = await response.json();
      return userDetails.data;
    } catch (error) {
      throw error;
    }
  },
});

const People = () => {
  const contents = useRecoilValue(fetchUserDetails);
  return (
    <div>
      {contents.map((v) => (
        <p key={v.id}>
          <b>Name</b>: {v.first_name} {v.last_name}{" "}
          <a href={`mailto: ${v.email}`}>{v.email}</a>
        </p>
      ))}
    </div>
  );
};

export default () => (
  <>
    <Title>Sample for: useRecoilValue with Suspense</Title>
    <React.Suspense fallback="loading">
      <People />
    </React.Suspense>
  </>
);
