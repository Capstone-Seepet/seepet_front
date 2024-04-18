import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../views/main/MainPage";
import LoginPage from "../views/login/LoginPage";
import RegisterPage from "../views/register/RegisterPage";

const Routers = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginPage />}></Route>
      <Route path="/main" element={<MainPage />}></Route>
      <Route path="/register" element={<RegisterPage />}></Route>
      <Route path="login" element={<LoginPage />}></Route>
    </Routes>
  </BrowserRouter>
);

export default Routers;
