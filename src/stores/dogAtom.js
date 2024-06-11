import {atom} from "recoil";

const dogsAtom = atom({
  key: 'dogs', // unique ID (with respect to other atoms/selectors)
  default: {}, // default value (aka initial value)
});

export {dogsAtom}