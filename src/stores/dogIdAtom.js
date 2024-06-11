import {atom} from "recoil";

const dogIdAtom = atom({
  key: 'dogId', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
});

export {dogIdAtom}