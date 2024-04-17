import './HeaderLayout.css'
import {Link} from "react-router-dom";
const HeaderLayout = () => {
  return (
    <>
      <header>
        <div className="header-wrap">
          <div className="header-left">
            <Link to="/">
              <img src="images/logo.svg" alt="Home" className="logo"/>
            </Link>
          </div>
          <div className="header-right">
            <img src="images/icon_bell.svg" alt="alarm"/>
            <img src="images/icon_people.svg" alt="mypage"/>
          </div>
        </div>
      </header>
    </>
  )
}

export default HeaderLayout