import {atom} from "recoil";
import {recoilPersist} from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: 'dogs',
  storage: localStorage,
});

const dogsAtom = atom({
  key: 'dogAtom', // unique ID (with respect to other atoms/selectors)
  default: {}, // default value (aka initial value)
  effects_UNSTABLE: [persistAtom],
});

export {dogsAtom}