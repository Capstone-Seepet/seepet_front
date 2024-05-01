import HeaderLayout from "../../commons/compononets/header/HeaderLayout";
import FooterLayout from "../../commons/compononets/footer/FooterLayout";
import style from "./MainPage.module.css"

const MainPage = () => {
  const today = new Date();
  const formattedYear = today.getFullYear().toString().slice(-2);
  const formattedFull = `${formattedYear}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;
  return (
    <>
      <HeaderLayout />
      <main>
        <div className={style.dogInfoContainer}>
          <div className={style.dogInfoWrap}>
            <div className={style.dogThumbnailWrap}>
              <img src={process.env.PUBLIC_URL + "/images/testImage.png"} className={style.dogThumbnail} alt="Mydog"/>
            </div>
            <div className={style.dogTextWrap}>
              <span className={style.dogAge}>Lv. 4</span>
              <p className={style.dogText}><b>쵸파</b> 와 함께한지</p>
              <p className={style.dogText}><b>1460</b> 일 째</p>
              <ul className={style.dogSubInfoWrap}>
                <li>
                  <img src={process.env.PUBLIC_URL + "/images/icon_birth.svg"} alt="생일"/>
                  <p>10/07</p>
                </li>
                <li>
                  <img src={process.env.PUBLIC_URL + "/images/icon_weight.svg"} alt="몸무게"/>
                  <p>5.3 <small>kg</small></p>
                </li>
                <li>
                  <img src={process.env.PUBLIC_URL + "/images/icon_gender_female.svg"} alt="성별"/>
                  <p>암컷</p>
                </li>
              </ul>
            </div>
          </div>
          <div className={style.subDogWrap}>
            <div className={style.dogMessage}>
              <img src={process.env.PUBLIC_URL + "/images/background_massage.svg"} alt="성별"/>
              <p>산책가자멍!</p>
            </div>
            <div className={style.subDogList}>
              <img src={process.env.PUBLIC_URL + "/images/testImage.png"} className={style.dogThumbnail} alt="Mydog"/>
              <img src={process.env.PUBLIC_URL + "/images/testImage.png"} className={style.dogThumbnail} alt="Mydog"/>
            </div>
          </div>
        </div>
        <div className={style.dogToday}>
          <p>재롱이의 {formattedFull}</p>
        </div>
      </main>
      <FooterLayout/>
    </>
  )
}

export default MainPage