import FooterLayout from "../../commons/compononets/footer/FooterLayout";
import style from "./MainPage.module.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slide.css"
import {Link} from "react-router-dom";

const MainPage = () => {
  const today = new Date();
  const formattedYear = today.getFullYear().toString().slice(-2);
  const formattedFull = `${formattedYear}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;
  const diaryFormattedFull = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;
  const settings = {
    className: "center",
    centerMode: true,
    infinite: false,
    centerPadding: "50px",
    slidesToShow: 1,
    speed: 500,
    dots: true,
    arrows: false,
  };

  return (
    <>
      <header className={style.mainHeader}>
        <div className={style.headerWrap}>
          <div className={style.headerLeft}>
            <Link to="/">
              <img
                src={process.env.PUBLIC_URL + "/images/temporaryLogo.png"}
                alt="Home"
                className="logo"
                style={{width: "20px", height: "20px"}}
              />
            </Link>
            <div className={style.mainText}>DogAry</div>
          </div>
          <div className={style.headerMid}>
            <img
              src={process.env.PUBLIC_URL + "/images/headerLampImg.png"}
              alt="lampImg"
              className="lampImg"
              style={{width: "30%", height: "120%"}}
            />
          </div>
          <div className={style.headerRight}>
            <img src={process.env.PUBLIC_URL + "/images/icon_bell.svg"} alt="alarm"/>
            <img src={process.env.PUBLIC_URL + "/images/icon_people.svg"} alt="mypage"/>
          </div>
        </div>
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
      </header>
      <main>
        <div className={style.dogToday}>
          <p className={style.title}>재롱이의 {formattedFull}</p>
          <div className={style.slideWrap}>
            <div className="slider-container">
              <Slider {...settings}>
                <div>
                  <div className={`${style.todayCard} ${style.todayDiary}`}>
                    <div className={style.cardHeader}>
                      <div className={style.titleWrap}>
                        <img src={process.env.PUBLIC_URL + "/images/icon_diary.svg"} alt="하루 관찰"/>
                        <p className={style.cardTitle}>하루 일기</p>
                      </div>
                      <div className={style.moreWrap}>
                        <Link to={"/"}>일기 자세히 보기</Link>
                        <img src={process.env.PUBLIC_URL + "/images/icon_more.svg"} alt="더보기"/>
                      </div>
                    </div>
                    <div className={style.cardMain}>
                      <div className={style.diaryTitleWrap}>
                        <p className="diaryDate">{diaryFormattedFull}</p>
                        <p>날씨: 맑음</p>
                      </div>
                      <div className={style.diaryImageWrap}>
                        <img src={process.env.PUBLIC_URL + "/images/testImage3.png"} alt="더보기"/>
                      </div>
                      <div className={style.diaryTextWrap}>
                        <p>날씨가 따뜻했던 오늘, 언니가 나를 깨워줬어요. 너무나도 기분 좋은 아침이었어요! 그런데 아침밥을 기다리는데 시간이 조금 걸렸어요. 언니, 내 식사시간을 더 일찍 맞춰주세요! 오늘은 언니 옆에서 같이 자야지! -쵸파 드림-</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <div className={`${style.todayCard} ${style.todayStatics}`}>
                    <div className={style.cardHeader}>
                      <div className={style.titleWrap}>
                        <img src={process.env.PUBLIC_URL + "/images/icon_statistics.svg"} alt="하루 관찰"/>
                        <p className={style.cardTitle}>하루 일과</p>
                      </div>
                      <div className={style.moreWrap}>
                        <Link to={"/"}>상태확인 하러가기</Link>
                        <img src={process.env.PUBLIC_URL + "/images/icon_more.svg"} alt="더보기"/>
                      </div>
                    </div>
                    <div className={style.cardMain}>
                      <circle strokeDasharray="<a> <x - a>" strokeDashoffset="<0.25 * x>"/>
                    </div>
                  </div>
                </div>
                <div>
                  <div className={`${style.todayCard} ${style.todayObserve}`}>
                    <div className={style.cardHeader}>
                      <div className={style.titleWrap}>
                        <img src={process.env.PUBLIC_URL + "/images/icon_video.svg"} alt="하루 관찰"/>
                        <p className={style.cardTitle}>하루 관찰</p>
                      </div>
                    </div>
                    <div className={style.cardMain}>
                      <div className={style.videoWrap}>
                        <img src={process.env.PUBLIC_URL + "/images/testImage2.png"} alt=""/>
                      </div>
                      <div className={style.buttonWrap}>
                        <button>
                          <img src={process.env.PUBLIC_URL + "/images/icon_play.svg"} alt=""/>
                          <p>재생</p>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </main>
      <FooterLayout/>
    </>
  )
}

export default MainPage