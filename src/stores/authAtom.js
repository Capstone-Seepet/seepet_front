import {atom} from "recoil";
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'auth',
  storage: localStorage,
});

const authAtom = atom({
  key: 'authAtom', // unique ID (with respect to other atoms/selectors)
  default: localStorage.getItem('AccessToken'), // default value (aka initial value)
  effects_UNSTABLE: [persistAtom],
});

export {authAtom}