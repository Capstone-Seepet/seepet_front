import HeaderLayout from "../../commons/compononets/header/HeaderLayout";
import FooterLayout from "../../commons/compononets/footer/FooterLayout";
import style from "./DogRegisterPage.module.css"
import {useForm} from "react-hook-form";
import {Link, useNavigate} from "react-router-dom";
const DogRegisterPage = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => navigate('/main');

  return (
    <>
      <HeaderLayout />
      <main className={style.wrap}>
        <div className={style.innerWrap}>
          <h1 className={style.title}>반려동물 정보 입력</h1>
          <div className={style.container}>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                <legend>
                  이름
                  {errors.name ?
                    <img src={process.env.PUBLIC_URL + "/images/icon_check_red.svg"} alt="check"/> :
                    <img src={process.env.PUBLIC_URL + "/images/icon_check.svg"} alt="check"/>}
                </legend>
                <input type="text" name="name"
                       className={`${style.longInput} ${errors.name ? style.error: ""}`}
                       {...register("name", {required: true})}/>
              </div>
              <div className={style.inputWrap}>
                <legend>이미지 등록</legend>
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
                <legend>성별</legend>
                <div className={style.inputBox}>
                  <div className={style.radioWrap}>
                    <input type="radio" id="male" name="gender"/>
                    <label htmlFor="male">
                      수컷
                      <img src={process.env.PUBLIC_URL + "/images/icon_gender_male.svg"} alt="male"/>
                    </label>
                  </div>
                  <div className={style.radioWrap}>
                    <input type="radio" id="female" name="gender"/>
                    <label htmlFor="female">
                      암컷
                      <img src={process.env.PUBLIC_URL + "/images/icon_gender_female.svg"} alt="male"/>
                    </label>
                  </div>
                </div>
              </div>
              <div className={style.inputWrap}>
                <legend>
                  우리가 처음 만난 날
                  {errors.firstMeeting ?
                    <img src={process.env.PUBLIC_URL + "/images/icon_check_red.svg"} alt="check"/> :
                    <img src={process.env.PUBLIC_URL + "/images/icon_check.svg"} alt="check"/>}
                </legend>
                <input type="date"  className={`${style.longInput} ${errors.firstMeeting ? style.error: ""}`}
                       {...register("firstMeeting", {required: true})}/>
              </div>
              <div className={style.inputBox}>
                <div className={`${style.inputWrap} ${style.doubleWrap}`}>
                  <legend>
                    생년월일
                    {errors.birth ?
                      <img src={process.env.PUBLIC_URL + "/images/icon_check_red.svg"} alt="check"/> :
                      <img src={process.env.PUBLIC_URL + "/images/icon_check.svg"} alt="check"/>}
                  </legend>
                  <input type="date"
                         className={`${style.longInput} ${errors.birth ? style.error: ""}`}
                         {...register("birth", {required: true})}/>
                </div>
                <div className={`${style.inputWrap} ${style.doubleWrap}`}>
                  <legend>
                    몸무게
                    {errors.weight ?
                      <img src={process.env.PUBLIC_URL + "/images/icon_check_red.svg"} alt="check"/> :
                      <img src={process.env.PUBLIC_URL + "/images/icon_check.svg"} alt="check"/>}
                  </legend>
                  <input type="text" className={`${style.longInput} ${errors.weight ? style.error: ""}`}
                         {...register("weight", {required: true})}/>
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
