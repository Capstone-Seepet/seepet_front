import HeaderLayout from "../../commons/compononets/header/HeaderLayout";
import FooterLayout from "../../commons/compononets/footer/FooterLayout";

import style from "./RegisterPage.module.css";

const RegisterPage = () => {
  return (
    <>
      <HeaderLayout/>
      <main className={style.wrap}>
        <div className={style.innerWrap}>
          <h1 className={style.title}>회원가입</h1>
          <div className={style.container}>
            <form action="">
              <div className={style.inputWrap}>
                <label htmlFor="">아이디 <img src="images/icon_check.svg" alt="check"/></label>
                <input type="text" className={style.longInput}/>
              </div>
              <div className={style.inputWrap}>
                <label htmlFor="">이메일 <img src="images/icon_check.svg" alt="check"/></label>
                <input type="text" className={style.longInput}/>
              </div>
              <div className={style.inputWrap}>
                <label htmlFor="">이름 <img src="images/icon_check.svg" alt="check"/></label>
                <input type="text" className={style.longInput}/>
              </div>
              <div className={style.inputWrap}>
                <label htmlFor="">비밀번호 <img src="images/icon_check.svg" alt="check"/></label>
                <input type="password" className={style.longInput}/>
              </div>
              <div className={style.inputWrap}>
                <label htmlFor="">비밀번호 확인 <img src="images/icon_check.svg" alt="check"/></label>
                <input type="password" className={style.longInput}/>
              </div>
              <div className={style.inputWrap}>
                <label htmlFor="">휴대폰 번호 <img src="images/icon_check.svg" alt="check"/></label>
                <div className={style.inputBox}>
                  <input type="text" className={style.shortInput}/>
                  <span className={style.breakLine}></span>
                  <input type="text" className={style.shortInput}/>
                  <span className={style.breakLine}></span>
                  <input type="text" className={style.shortInput}/>
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