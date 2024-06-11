import {atom} from "recoil";
import {recoilPersist} from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: 'dogId',
  storage: localStorage,
});
const dogIdAtom = atom({
  key: 'dogIdAtom', // unique ID (with respect to other atoms/selectors)
  default: [], // default value (aka initial value)
  effects_UNSTABLE: [persistAtom],
});

export {dogIdAtom}