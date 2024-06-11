import {atom} from "recoil";

const dogAtom = atom({
  key: 'dog', // unique ID (with respect to other atoms/selectors)
  default: {}, // default value (aka initial value)
});

export {dogAtom}