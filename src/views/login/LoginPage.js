import { Link } from "react-router-dom";
import HeaderLayout from "../../commons/compononets/header/HeaderLayout";

const LoginPage = () => {
  return (
    <>
      <HeaderLayout />
      <h1>Login</h1>
      <Link to="/register">register</Link>
    </>
  );
};

export default LoginPage;
