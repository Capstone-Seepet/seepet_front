import style from "./HeaderLayout.module.css";
import { Link } from "react-router-dom";
import React from "react";
const HeaderLayout = () => {
  return (
    <>
      <header className={style.header}>
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
            <Link to="/setup">
              <img src={process.env.PUBLIC_URL + "/images/icon_people.svg"} alt="mypage" />
            </Link>
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderLayout;
