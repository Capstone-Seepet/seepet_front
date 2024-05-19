import {atom} from "recoil";

const usersAtom = atom({
  key: 'user', // unique ID (with respect to other atoms/selectors)
  default: {}, // default value (aka initial value)
});

export {usersAtom}