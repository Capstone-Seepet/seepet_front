import FooterLayout from "../../commons/compononets/footer/FooterLayout";
import style from "./MainPage.module.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./slide.css"
import {Link} from "react-router-dom";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ExpendedHeader from "../../commons/compononets/ExpendedHeader/ExpendedHeader";
import {externalTooltipHandler} from "./TooltipHandler";
import {useRecoilValue, useSetRecoilState} from "recoil";
import { dogsAtom} from "../../stores/dogAtom";
import {useEffect} from "react";
import {getDogId, getDogInfo} from "../../apis/DogInfo";
import {dogIdAtom} from "../../stores/dogIdAtom";

ChartJS.register(ArcElement, Tooltip, Legend);

const MainPage = () => {
  const today = new Date();
  const formattedYear = today.getFullYear().toString().slice(-2);
  const formattedFull = `${formattedYear}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;
  const diaryFormattedFull = `${today.getFullYear()}년 ${today.getMonth() + 1}월 ${today.getDate()}일`;
  const settings = {
    className: "slickContainer",
    centerMode: true,
    infinite: true,
    centerPadding: "50px",
    slidesToShow: 1,
    speed: 500,
    dots: true,
    arrows: false,
  };
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    plugins: {
      legend: {
          display: false,
      },
      tooltip: {
        enabled: false,
        position: 'nearest',
        external: externalTooltipHandler
      },
    },
  };
  const setDogId = useSetRecoilState(dogIdAtom);
  const getIdDogs = useRecoilValue(dogIdAtom);
  const setDogInfo = useSetRecoilState(dogsAtom);
  const getDogs = useRecoilValue(dogsAtom);
  const Users = localStorage.getItem("UserInfo");

  useEffect(() => {
    const UserInfo = JSON.parse(Users);
    getDogId(UserInfo.memberId).then(r => {
      console.log(r);
      setDogId(r.data);
      getDogInfo(r.data[0].petId).then(r => {
        console.log(r);
        setDogInfo(r.data)
      })
    })
    console.log(getIdDogs)

  }, []);

  return (
    <>
      <ExpendedHeader />
      <div className={style.dogInfoContainer}>
        <div className={style.dogInfoWrap}>
          <div className={style.dogThumbnailWrap}>
            <img src={getDogs.profile} className={style.dogThumbnail} alt="Mydog"/>
          </div>
          <div className={style.dogTextWrap}>
            <span className={style.dogAge}>Lv. 4</span>
            <p className={style.dogText}><b>{getDogs.name}</b> 와 함께한지</p>
            <p className={style.dogText}><b>{getDogs.adoptionDate}</b> 일 째</p>
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
                        <Link to={"/dog/diary"}>일기 자세히 보기</Link>
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
                        <Link to={"/dog/statistics"}>상태확인 하러가기</Link>
                        <img src={process.env.PUBLIC_URL + "/images/icon_more.svg"} alt="더보기"/>
                      </div>
                    </div>
                    <div className={style.cardMain}>
                      <div className={style.statisticsMainWrap}>
                        <div className={style.statisticsTitleWrap}>
                          <img src={process.env.PUBLIC_URL + "/images/dog-emotions/icon_relax.svg"}
                               className={style.dogEmotion}
                               alt="감정"/>
                          <div className={style.dogMessage}>
                            <img src={process.env.PUBLIC_URL + "/images/background_massage_under.svg"} alt="성별"/>
                            <p>오늘은 정말 행복한 하루 였어요!</p>
                          </div>
                        </div>
                        <div className={style.chartWrap}>
                          <img src={process.env.PUBLIC_URL + "/images/testImage.png"} alt="test"/>
                          <Doughnut data={data} options={options}/>
                        </div>
                      </div>
                      <div className={style.statisticsTextWrap}>
                        <p>쵸파는 오늘 <b>엎드리기</b>를 가장 많이 했어요!</p>
                        <p>쵸파는 오늘 <b>마운팅</b>을 가장 적게 했어요!</p>
                      </div>
                      {/*<img src={process.env.PUBLIC_URL + "/images/testImage4.png"} alt="테스트"/>*/}
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
                        <Link to="/livestream">
                          <img src={process.env.PUBLIC_URL + "/images/icon_play.svg"} alt=""/>
                          <p>재생</p>
                        </Link>
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