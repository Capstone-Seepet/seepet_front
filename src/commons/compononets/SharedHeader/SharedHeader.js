import style from "./SharedHeader.module.css";
import { Link } from "react-router-dom";
const SharedHeader = ({ isStartPage }) => {
  return (
    <>
      <header className={style.header}>
        <div className={style.wrap}>
          <div className={style.headerLeft}>
            <Link to="/">
              <img
                src={process.env.PUBLIC_URL + "/images/logo.svg"}
                alt="Home"
                className={style.logo}
                style={{ width: "20px", height: "20px" }}
              />
            </Link>
            <div className={style.mainText}>DogAry</div>
          </div>
          <img
            src={process.env.PUBLIC_URL + "/images/headerLampImg2.png"}
            alt="lampImg"
            className={style.lampImg}
          />
          {isStartPage ? (
            <div className={style.headerTextWrap}>
              <p
                className={style.headerText}
                style={{ backgroundColor: "rgba(255,255,255,0.6)" }}
              >
                반려견의 소중한 일상
              </p>
              <p className={style.headerText}>언제나 함께해요</p>
              <p className={style.subText}>반려일지로 확인하고 기록하고!</p>
            </div>
          ) : (
            <div className={style.loginSuccessImg}></div>
          )}
        </div>
      </header>
    </>
  );
};
export default SharedHeader;
