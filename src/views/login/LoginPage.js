import HeaderLayout from "../../commons/compononets/header/HeaderLayout";
import FooterLayout from "../../commons/compononets/footer/FooterLayout";
import style from "./LoginPage.module.css";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const LoginPage = () => {
  const [saveId, setSaveId] = useState(false);
  const [autoLogin, setAutoLogin] = useState(false);
  const navigate = useNavigate();
  const { register, handleSubmit } = useForm();
  const onSubmit = (data, event) => {
    event.preventDefault();
    console.log("saveID : " + saveId);
    console.log("autoLogin : " + autoLogin);
    navigate("/");
  };

  const handleSaveIdChange = () => {
    setSaveId(!saveId);
  };

  const handleAutoLoginChange = () => {
    setAutoLogin(!autoLogin);
  };

  return (
    <>
      <HeaderLayout />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className={style.wrap}>
          <div className={style.innerWrap}>
            <div className={style.top}>
              <div className={style.logo} />
            </div>
            {/* //top */}

            <div className={style.mid}>
              <div className={style.container}>
                <div className={style.inputBox}>
                  <input
                    type="text"
                    placeholder="아이디 또는 이메일을 입력해주세요."
                    {...register("id", { required: true })}
                  />
                  <input
                    type="password"
                    placeholder="비밀번호를 입력해주세요."
                    {...register("pwd", { required: true })}
                  />
                </div>
                <div className={style.checkBox}>
                  <label className={style.customCheckbox}>
                    <input
                      type="checkbox"
                      id="check1"
                      onChange={handleSaveIdChange}
                    />
                    <label
                      htmlFor="check1"
                      className={style.saveInformCheck}
                    ></label>
                    아이디 저장
                  </label>
                  {/* 자동 로그인 체크박스 */}
                  <label className={style.customCheckbox}>
                    <input
                      type="checkbox"
                      id="check2"
                      onChange={handleAutoLoginChange}
                    />
                    <label
                      htmlFor="check2"
                      className={style.autoLoginCheck}
                    ></label>
                    자동 로그인
                  </label>
                </div>
              </div>
            </div>
            {/* //mid */}

            <div className={style.bottom}>
              <input className={style.SubmitBtn} type="submit" value="LOGIN" />

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
      </form>
      <FooterLayout />
    </>
  );
};

export default LoginPage;
