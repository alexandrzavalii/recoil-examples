import React from "react";
import {
  atom,
  useRecoilState,
  useTransactionObservation_UNSTABLE,
} from "recoil";
import Title from "./common/Title";

const valState = atom({
  key: "valState",
  default: 0,
});

/*
  atomValues: The current value of every atom that is both persistable (persistence
              type not set to 'none') and whose value is available (not in an
              error or loading state).

  previousAtomValues: The value of every persistable and available atom before
               the transaction began.

  atomInfo: A map containing the persistence settings for each atom. Every key
            that exists in atomValues will also exist in atomInfo.

  modifiedAtoms: The set of atoms that were written to during the transaction.

  transactionMetadata: Arbitrary information that was added via the
          useSetUnvalidatedAtomValues hook. Useful for ignoring the useSetUnvalidatedAtomValues
          transaction, to avoid loops.

 */
const AtomComponent = () => {
  const [val, setVal] = useRecoilState(valState);

  return (
    <>
      <p>{val}</p>
      <button onClick={() => setVal((s) => s + 1)}>add one</button>
    </>
  );
};

export default () => {
  useTransactionObservation_UNSTABLE(
    ({ atomValues, atomInfo, modifiedAtoms }) => {
      for (const modifiedAtom of modifiedAtoms) {
        // Storage.setItem(
        //     modifiedAtom.key,
        //     JSON.stringify({value: atomValues.get(modifiedAtom)}),
        // );
      }
    }
  );
  return (
    <>
      <Title>Sample For</Title>
      <AtomComponent />
    </>
  );
};
