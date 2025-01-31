import {Navigate, Outlet} from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import {authAtom} from "../stores/authAtom";

const RestrictRoute = () => {
  const auth = useRecoilValue(authAtom);
  return auth ? <Navigate to="/login/success" /> : <Outlet />
}

export default RestrictRoute