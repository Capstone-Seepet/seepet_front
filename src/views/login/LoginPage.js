import { Link } from "react-router-dom";
import HeaderLayout from "../../commons/compononets/header/HeaderLayout";
import FooterLayout from "../../commons/compononets/footer/FooterLayout";
import style from "./LoginPage.module.css";
const LoginPage = () => {
  return (
    <>
      <HeaderLayout />
      <div className={style.wrap}>
        <div className={style.innerWrap}>
          <div className={style.top}>
            <div className={style.logo} />
          </div>
          {/* //top */}

          <div className={style.mid}>
            <div className={style.container}>
              <div className={style.inputBox}>
                <form>
                  <input
                    type="text"
                    placeholder="아이디 또는 이메일을 입력해주세요."
                  />
                  <input
                    type="password"
                    placeholder="비밀번호를 입력해주세요."
                  />
                </form>
              </div>
              <div className={style.checkBox}>
                <label>
                  <input
                    type="checkbox"
                    // checked={rememberMe}
                    // onChange={handleRememberMeChange}
                    className={style.saveInformCheck}
                  />
                  아이디 저장
                </label>
                {/* 자동 로그인 체크박스 */}
                <label>
                  <input
                    type="checkbox"
                    // checked={autoLogin}
                    // onChange={handleAutoLoginChange}
                  />
                  자동 로그인
                </label>
              </div>
            </div>
          </div>
          {/* //mid */}

          <div className={style.bottom}>
            {/* <Link to="/register">register</Link> */}
            <button className={style.SubmitBtn}>LOGIN</button>
            <div className={style.informBox}>
              <div className={style.informLine}>
                계정을 잊으셨나요? <Link>ID찾기</Link> 또는{" "}
                <Link>비밀번호 찾기</Link>
              </div>
              <div className={style.informLine}>
                아직 회원이 아니신가요?{" "}
                <Link to="/register">회원가입 하러가기</Link>
              </div>
            </div>
          </div>

          {/* //bottom */}
        </div>
        {/* //innerWrap */}
      </div>
      <FooterLayout />
    </>
  );
};

export default LoginPage;
