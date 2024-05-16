import HeaderLayout from "../../commons/compononets/header/HeaderLayout";
import FooterLayout from "../../commons/compononets/footer/FooterLayout";

import style from "./RegisterPage.module.css";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import {postRegister} from "../../apis/Users";

const RegisterPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    let formattedData = {
      loginId : data.loginId,
      email : data.email,
      name : data.name,
      password : data.password,
      phoneNumber : data.phoneStart + data.phoneMid + data.phoneEnd,
    }
    console.log(formattedData);
    postRegister(data).then(r => {
      alert("회원가입이 완료되었습니다.");
      navigate('/login');
    }).catch((r) => {
      alert("오류가 발생하여습니다.문의하여 주십시오.");
      console.log("Register Post Error : " + r);
    });
  }

  return (
    <>
      <HeaderLayout/>
      <main className={style.wrap}>
        <div className={style.innerWrap}>
          <h1 className={style.title}>회원가입</h1>
          <div className={style.container}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className={style.inputWrap}>
                <legend>
                  아이디
                  {errors.loginId ?
                    <img src={process.env.PUBLIC_URL + "/images/icon_check_red.svg"} alt="check"/> :
                    <img src={process.env.PUBLIC_URL + "/images/icon_check.svg"} alt="check"/>}
                </legend>
                <input type="text"
                       className={`${style.longInput} ${errors.loginId ? style.error: ""}`}
                       {...register("loginId", {required: true})}/>
              </div>
              <div className={style.inputWrap}>
                <legend>
                  이메일
                  {errors.email ?
                    <img src={process.env.PUBLIC_URL + "/images/icon_check_red.svg"} alt="check"/> :
                    <img src={process.env.PUBLIC_URL + "/images/icon_check.svg"} alt="check"/>}
                </legend>
                <input type="text"
                       className={`${style.longInput} ${errors.email ? style.error: ""}`}
                       {...register("email", {required: true})}/>
              </div>
              <div className={style.inputWrap}>
                <legend>
                  이름
                  {errors.name ?
                    <img src={process.env.PUBLIC_URL + "/images/icon_check_red.svg"} alt="check"/> :
                    <img src={process.env.PUBLIC_URL + "/images/icon_check.svg"} alt="check"/>}
                </legend>
                <input type="text"
                       className={`${style.longInput} ${errors.name ? style.error: ""}`}
                       {...register("name", {required: true})}/>
              </div>
              <div className={style.inputWrap}>
                <legend>
                  비밀번호
                  {errors.password ?
                    <img src={process.env.PUBLIC_URL + "/images/icon_check_red.svg"} alt="check"/> :
                    <img src={process.env.PUBLIC_URL + "/images/icon_check.svg"} alt="check"/>}
                </legend>
                <input type="password"
                       className={`${style.longInput} ${errors.password ? style.error: ""}`}
                       {...register("password", {required: true})}/>
              </div>
              <div className={style.inputWrap}>
                <legend>
                  비밀번호 확인
                  {errors.passwordCheck ?
                    <img src={process.env.PUBLIC_URL + "/images/icon_check_red.svg"} alt="check"/> :
                    <img src={process.env.PUBLIC_URL + "/images/icon_check.svg"} alt="check"/>}
                </legend>
                <input type="password"
                       className={`${style.longInput} ${errors.passwordCheck ? style.error: ""}`}
                       {...register("passwordCheck", {required: true})}/>
              </div>
              <div className={style.inputWrap}>
                <legend>
                  휴대폰 번호
                  {errors.phoneStart || errors.phoneMid || errors.phoneEnd ?
                    <img src={process.env.PUBLIC_URL + "/images/icon_check_red.svg"} alt="check"/> :
                    <img src={process.env.PUBLIC_URL + "/images/icon_check.svg"} alt="check"/>}
                </legend>
                <div className={style.inputBox}>
                  <input type="text"
                         className={`${style.shortInput} ${errors.phoneStart ? style.error: ""}`}
                         {...register("phoneStart", {required: true})}/>
                  <span className={style.breakLine}></span>
                  <input type="text"
                         className={`${style.shortInput} ${errors.phoneMid ? style.error: ""}`}
                         {...register("phoneMid", {required: true})}/>
                  <span className={style.breakLine}></span>
                  <input type="text"
                         className={`${style.shortInput} ${errors.phoneEnd ? style.error: ""}`}
                         {...register("phoneEnd", {required: true})}/>
                </div>
              </div>
              <div className={style.btnBox}>
                <input type="submit" className={style.submitBtn} value="회원가입 하기"/>
              </div>
            </form>
          </div>
        </div>
      </main>
      <FooterLayout/>
    </>
  )
}

export default RegisterPage