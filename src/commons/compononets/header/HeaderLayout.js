import "./HeaderLayout.css";
import { Link } from "react-router-dom";
const HeaderLayout = () => {
  return (
    <>
      <header>
        <div className="header-wrap">
          <div className="header-left">
            <Link to="/">
              <img
                src="images/temporaryLogo.png"
                alt="Home"
                className="logo"
                style={{ width: "20px", height: "20px" }}
              />
            </Link>
            <div className="mainText">SeePet</div>
          </div>
          <div className="header-mid">
            <img
              src="images/headerLampImg.png"
              alt="lampImg"
              className="lampImg"
              style={{ width: "30%", height: "120%" }}
            />
          </div>
          <div className="header-right">
            <img src="images/icon_bell.svg" alt="alarm" />
            <img src="images/icon_people.svg" alt="mypage" />
          </div>
        </div>
      </header>
    </>
  );
};

export default HeaderLayout;
