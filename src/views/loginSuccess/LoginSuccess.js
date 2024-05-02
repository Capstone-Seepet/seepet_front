import { Link } from "react-router-dom";

import style from "./LoginSuccess.module.css";
import SharedHeader from "../../commons/compononets/SharedHeader/SharedHeader";
const LoginSuccess = () => {
  return (
    <>
      <div className={style.wrap}>
        <SharedHeader isStartPage={false} />
        <div className={style.bottomWrap}>
          <div className={style.innerWrap}>
            <div className={style.container}>
              <p className={style.text1}>로그인 완료!</p>
              <p className={style.text2}>
                정보를 입력하고 소중한 반려견의
                <br /> 하루하루를 함께해요
              </p>
            </div>
            <div className={style.container}>
              <Link to="/dog/register" className={style.enterInform}>
                반려 동물 정보 입력하기
              </Link>
              <button className={style.myPageBtn}>마이페이지로 이동</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default LoginSuccess;
