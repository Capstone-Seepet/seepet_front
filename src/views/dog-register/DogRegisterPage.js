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
              <div className={style.thumbnailWrap}>
                <label htmlFor="thumbnail">
                  <img src={process.env.PUBLIC_URL + "/images/icon_plus.svg"} alt="plus"/>
                  <img src={process.env.PUBLIC_URL + "/images/icon_thumbnail.svg"} alt="이미지 등록"/>
                  <div className={style.labelDeco}>
                    <img src={process.env.PUBLIC_URL + "/images/icon_camera.svg"} alt="camera"/>
                  </div>
                </label>
                <input type="file" id="thumbnail" name="thumbnail" />
              </div>
              <div className={style.inputWrap}>
                <label htmlFor="name">이름</label>
                <input type="text" name="name" className={style.longInput}/>
              </div>
              <div className={style.inputWrap}>
                <label htmlFor="">이미지 등록</label>
                <div className={style.inputBox}>
                  <div className={style.fileWrap}>
                    <label htmlFor="image">
                      <img src={process.env.PUBLIC_URL + "/images/icon_plus.svg"} alt="plus"/>
                      <img src={process.env.PUBLIC_URL + "/images/icon_thumbnail.svg"} alt="이미지 등록"/>
                    </label>
                    <input type="file" id="image" className={style.inputFile}/>
                  </div>
                  <div className={style.fileWrap}>
                    <label htmlFor="image2">
                      <img src={process.env.PUBLIC_URL + "/images/icon_plus.svg"} alt="plus"/>
                      <img src={process.env.PUBLIC_URL + "/images/icon_thumbnail.svg"} alt="이미지 등록"/>
                    </label>
                    <input type="file" id="image2" className={style.inputFile}/>
                  </div>
                  <div className={style.fileWrap}>
                    <label htmlFor="image3">
                      <img src={process.env.PUBLIC_URL + "/images/icon_plus.svg"} alt="plus"/>
                      <img src={process.env.PUBLIC_URL + "/images/icon_thumbnail.svg"} alt="이미지 등록"/>
                    </label>
                    <input type="file" id="image3" className={style.inputFile}/>
                  </div>
                  <div className={style.fileWrap}>
                    <label htmlFor="image4">
                      <img src={process.env.PUBLIC_URL + "/images/icon_plus.svg"} alt="plus"/>
                      <img src={process.env.PUBLIC_URL + "/images/icon_thumbnail.svg"} alt="이미지 등록"/>
                    </label>
                    <input type="file" id="image4" className={style.inputFile}/>
                  </div>
                </div>
              </div>
              <div className={style.inputWrap}>
                <label htmlFor="">성별</label>
                <div className={style.inputBox}>
                  <div className={style.radioWrap}>
                    <label htmlFor="">
                      수컷
                      <img src={process.env.PUBLIC_URL + "/images/icon_gender_male.svg"} alt="male"/>
                    </label>
                    <input type="radio"/>
                  </div>
                  <div className={style.radioWrap}>
                    <label htmlFor="">
                      암컷
                      <img src={process.env.PUBLIC_URL + "/images/icon_gender_female.svg"} alt="male"/>
                    </label>
                    <input type="radio"/>
                  </div>
                </div>
              </div>
              <div className={style.inputWrap}>
                <label htmlFor="">우리가 처음 만난 날</label>
                <input type="date" className={style.longInput}/>
              </div>
              <div className={style.inputBox}>
                <div className={`${style.inputWrap} ${style.doubleWrap}`}>
                  <label htmlFor="">생년월일</label>
                  <input type="date" className={style.longInput}/>
                </div>
                <div className={`${style.inputWrap} ${style.doubleWrap}`}>
                  <label htmlFor="">몸무게</label>
                  <input type="text" className={style.longInput}/>
                </div>
              </div>
              <div className={style.btnBox}>
                <input type="submit" className={style.submitBtn} value="등록하기"/>
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
