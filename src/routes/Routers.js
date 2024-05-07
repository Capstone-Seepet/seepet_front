import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "../views/main/MainPage";
import LoginPage from "../views/login/LoginPage";
import RegisterPage from "../views/register/RegisterPage";
import DogRegisterPage from "../views/dogRegister/DogRegisterPage";
import StartPage from "../views/startPage/StartPage";
import LoginSuccess from "../views/loginSuccess/LoginSuccess";
import LiveStream from "../views/liveStream/liveStream";
const Routers = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<StartPage />}></Route>
      <Route path="/main" element={<MainPage />}></Route>
      <Route path="/register" element={<RegisterPage />}></Route>
      <Route path="/dog/register" element={<DogRegisterPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/loginsuccess" element={<LoginSuccess />}></Route>
      <Route path="/livestream" element={<LiveStream />}></Route>
    </Routes>
  </BrowserRouter>
);

export default Routers;
