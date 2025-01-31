import {atom} from "recoil";
import {recoilPersist} from "recoil-persist";

const { persistAtom } = recoilPersist({
  key: 'user',
  storage: localStorage,
});
const usersAtom = atom({
  key: 'userAtom', // unique ID (with respect to other atoms/selectors)
  default: {}, // default value (aka initial value)
  effects_UNSTABLE: [persistAtom],
});

export {usersAtom}