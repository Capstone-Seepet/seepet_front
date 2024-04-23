import style from "./HeaderLayout.module.css";
import { Link } from "react-router-dom";
const HeaderLayout = () => {
  return (
    <>
      <header>
        <div className={style.headerWrap}>
          <div className={style.headerLeft}>
            <Link to="/">
              <img
                src="images/temporaryLogo.png"
                alt="Home"
                className="logo"
                style={{ width: "20px", height: "20px" }}
              />
            </Link>
            <div className={style.mainText}>DogAry</div>
          </div>
          <div className={style.headerMid}>
            <img
              src="images/headerLampImg.png"
              alt="lampImg"
              className="lampImg"
              style={{ width: "30%", height: "120%" }}
            />
          </div>
          <div className={style.headerRight}>
            <img src="images/icon_bell.svg" alt="alarm" />
            <img src="images/icon_people.svg" alt="mypage" />
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderLayout;
