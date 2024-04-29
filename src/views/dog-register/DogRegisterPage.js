import HeaderLayout from "../../commons/compononets/header/HeaderLayout";
import FooterLayout from "../../commons/compononets/footer/FooterLayout";
import style from "./DogRegisterPage.module.css"
const DogRegisterPage = () => {
  return (
    <>
      <HeaderLayout />
      <main className={style.wrap}>
        <div className={style.innerWrap}>
          <h1 className={style.title}>반려동물 정보 입력</h1>
          <div className={style.container}>
            <form action="">
              <div className={style.inputWrap}>
                <label htmlFor="">이미지 등록</label>
                <div className={style.inputBox}>
                  <input type="file" name=""/>
                </div>
              </div>
              <div className={style.inputWrap}>
                <label htmlFor="name">이름</label>
                <input type="text" name="name"/>
              </div>
              <div className={style.inputWrap}>
                <label htmlFor="">이미지 등록</label>
                <div className={style.inputBox}>
                  <input type="file" name="image"/>
                  <input type="file" name="image"/>
                  <input type="file" name="image"/>
                  <input type="file" name="image"/>
                </div>
              </div>
              <div className={style.inputWrap}>
                <label htmlFor="">성별</label>
                <div className={style.inputBox}>
                  <label htmlFor="">수컷</label>
                  <input type="radio"/>
                  <label htmlFor="">암컷</label>
                  <input type="radio"/>
                </div>
              </div>
              <div className={style.inputWrap}>
                <label htmlFor="">우리가 처음 만난 날</label>
                <input type="text"/>
              </div>
              <div className={style.inputBox}>
                <div className={style.inputWrap}>
                  <label htmlFor="">생년월일</label>
                  <input type="text"/>
                </div>
                <div className={style.inputWrap}>
                  <label htmlFor="">몸무게</label>
                  <input type="text"/>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
      <FooterLayout />
    </>
  )
}

export default DogRegisterPage;
