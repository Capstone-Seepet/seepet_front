import {atom} from "recoil";

const authAtom = atom({
  key: 'auth', // unique ID (with respect to other atoms/selectors)
  default: localStorage.getItem('AccessToken'), // default value (aka initial value)
});

export {authAtom}