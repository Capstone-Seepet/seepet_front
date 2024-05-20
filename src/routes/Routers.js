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
import SetupPage from "../views/setupPage/SetupPage";
import PrivateRoute from "./PrivateRoute";
const Routers = () => (
  <BrowserRouter>
    <Routes>
      {/* 로그인, 회원가입 */}
      <Route path="/" element={<StartPage />}></Route>
      <Route path="/register" element={<RegisterPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/login/success" element={<LoginSuccess />}></Route>

      {/* 로그인 필요 화면 */}
      {/* <Route element={<PrivateRoute />}> */}
      <Route>
        {/* 메인 */}
        <Route path="/main" element={<MainPage />}></Route>
        {/* 강아지등록 */}
        <Route path="/dog/register" element={<DogRegisterPage />}></Route>
        {/* 일지 및 통계 */}
        <Route path="/dog/diary" element={<DogDiaryPage />}></Route>
        <Route path="/dog/statistics" element={<DogStatisticsPage />}></Route>
        {/* 실시간 영상 */}
        <Route path="/livestream" element={<LiveStream />}></Route>
        {/* 환경설정 */}
        <Route path="/setup" element={<SetupPage />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Routers;
