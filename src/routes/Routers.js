import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartPage from "../views/startPage/StartPage";
import RegisterPage from "../views/register/RegisterPage";
import LoginPage from "../views/login/LoginPage";
import LoginSuccess from "../views/loginSuccess/LoginSuccess";
import DogRegisterPage from "../views/dogRegister/DogRegisterPage";
import MainPage from "../views/main/MainPage";
import DogDiaryPage from "../views/dogDiary/DogDiaryPage";
import DogStatisticsPage from "../views/dogStatistics/DogStatisticsPage";
import LiveStream from "../views/liveStream/liveStream";
const Routers = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<StartPage />}></Route>
      <Route path="/register" element={<RegisterPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/loginsuccess" element={<LoginSuccess />}></Route>
      <Route path="/dog/register" element={<DogRegisterPage />}></Route>
      <Route path="/main" element={<MainPage />}></Route>
      <Route path="/dog/diary" element={<DogDiaryPage />}></Route>
      <Route path="/dog/statistics" element={<DogStatisticsPage />}></Route>
      <Route path="/livestream" element={<LiveStream />}></Route>
    </Routes>
  </BrowserRouter>
);

export default Routers;
