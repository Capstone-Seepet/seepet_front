import {Navigate, Outlet, Route} from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import {authAtom} from "../stores/authAtom";

const PrivateRoute = ({path, element}) => {
  const auth = useRecoilValue(authAtom);
  return auth ? <Outlet /> : <Navigate to="login" />
}

export default PrivateRoute