import React from "react";
// import { atom, selectorFamily, useRecoilValue,useTransactionObservation_UNSTABLE } from "jared-recoil";
import Title from "./common/Title";

export default () => {
  // useTransactionObservation_UNSTABLE(({atomValues, atomInfo, modifiedAtoms}) => {
  //     for (const modifiedAtom of modifiedAtoms) {
  //         Storage.setItem(
  //             modifiedAtom.key,
  //             JSON.stringify({value: atomValues.get(modifiedAtom)}),
  //         );
  //     }
  // });
  return (
    <>
      <Title>Sample For</Title>
    </>
  );
};
