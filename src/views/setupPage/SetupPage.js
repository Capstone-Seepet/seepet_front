import style from "./SetupPage.module.css";
import FooterLayout from "../../commons/compononets/footer/FooterLayout";
import {Link, useNavigate} from "react-router-dom";
import {useRecoilValue} from "recoil";
import {dogIdAtom} from "../../stores/dogIdAtom";

const SetupPage = () => {
  const navigate = useNavigate();
  const getIdDogs = useRecoilValue(dogIdAtom);

  return (
    <div className={style.wrap}>
      <div className={style.topWrap}>
        <div className={style.container}>
          <button className={style.backBtn} onClick={() => navigate(-1)}/>
          <img
            src={process.env.PUBLIC_URL + "/images/headerLampImg.png"}
            alt="lampImg"
            className={style.lampImg}
          />
          <img
            src={process.env.PUBLIC_URL + "/images/setupMainImg.png"}
            alt="setupImg"
            className={style.setupImg}
          />
          <div className={style.informWrap}>
            <div className={style.informBox}>
              <span className={style.informTitle}>지금까지 수집한 일기</span>
              <span className={style.informCont}>1개</span>
            </div>
            <span className={style.vertical_line}></span>
            <div className={style.informBox}>
              <span className={style.informTitle}>가장 많이 모인 감정</span>
              <span className={style.informCont}>행복함</span>
            </div>
          </div>
        </div>
      </div>
      <div className={style.middleWrap}>
        <h3>MY PET</h3>
        <div className={style.petContainer}>
          <div className={style.container}>
            <div className={style.leftBox}>
              {getIdDogs.map((dog) =>  {
                return (
                  <>
                    <div className={style.perBox}>
                      <div className={`${style.imgBox}`}>
                        <img src={dog.profile} alt="강아지"/>
                      </div>
                      <span className={style.name}>{dog.name}</span>
                      <button className={style.editBtn}></button>
                    </div>
                  </>
                )
              })}
            </div>
            <button className={style.addPet}><Link to="/dog/register">+</Link></button>
          </div>
        </div>
      </div>
      <div className={style.bottomWrap}>
        <div className={style.container}>
          <h3>MYPAGE</h3>
          <ul>
            <li>
              <Link to="/user/update">
                <img src={process.env.PUBLIC_URL + "/images/icon_user.svg"} alt="setup"/>
                <p>회원 정보수정</p>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <FooterLayout />
    </div>
  );
};
export default SetupPage;
