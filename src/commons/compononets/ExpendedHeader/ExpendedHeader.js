import style from "./ExpendedHeader.module.css";
import {Link} from "react-router-dom";


const ExpendedHeader = () => {
  return (
    <>
      <header className={style.expendedHeader}>
        <div className={style.headerWrap}>
          <div className={style.headerLeft}>
            <Link to="/">
              <img
                src={process.env.PUBLIC_URL + "/images/logo.svg"}
                alt="Home"
                className={style.logo}
              />
            </Link>
            <div className={style.mainText}>DogAry</div>
          </div>
          <div className={style.headerMid}>
            <img
              src={process.env.PUBLIC_URL + "/images/headerLampImg.png"}
              alt="lampImg"
              className={style.lampImg}
            />
          </div>
          <div className={style.headerRight}>
            <img src={process.env.PUBLIC_URL + "/images/icon_bell.svg"} alt="alarm" />
            <img src={process.env.PUBLIC_URL + "/images/icon_people.svg"} alt="mypage" />
          </div>
        </div>
      </header>
    </>
  )
}

export default ExpendedHeader;