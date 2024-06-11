import {Navigate, Outlet} from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import {authAtom} from "../stores/authAtom";

const PrivateRoute = () => {
  const auth = useRecoilValue(authAtom);
  return auth ? <Outlet /> : <Navigate to="/login" />
}

export default PrivateRoute