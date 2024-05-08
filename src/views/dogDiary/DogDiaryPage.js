import style from "./DogDiaryPage.module.css"
import ExpendedHeader from "../../commons/compononets/ExpendedHeader/ExpendedHeader";
import FooterLayout from "../../commons/compononets/footer/FooterLayout";
const DogDiaryPage = () => {
  return (
    <>
      <ExpendedHeader />
      <main>
        <div className={style.diaryContainer}>
          <div className={style.diaryWrap}>
          <div className={style.diaryTitleWrap}>
            <p className={style.date}>2024년 4월 6일 토요일</p>
            <p className={style.weather}>날씨: 맑음</p>
          </div>
          <div className={style.diaryImageWrap}>
            <img src={process.env.PUBLIC_URL + "/images/testImage3.png"} alt="일기 사진"/>
          </div>
          <div className={style.diaryTextWrap}>
            <p>
              날씨가 따뜻했던 오늘, 언니가 나를 깨워줬어요. 너무나도 기분 좋은 아침이었어요! 그런데 아침밥을 기다리는데 시간이 조금 걸렸어요. 언니, 내 식사시간을 더 일찍 맞춰주세요!
              아침 산책을 하면서 주변을 살펴보았어요. 오늘은 날씨가 맑고 상쾌해서 기분이 좋았어요. 다른 강아지들과 인사를 나누며 즐거운 시간을 보냈어요.
              오후에는 집에서 좀 쉬었어요. 언니와 함께 놀이를 하고 산책을 다녔어요. 물론 간식도 잔뜩 받았죠! 간식을 먹는 건 항상 즐거운 일이에요~
              저녁에는 언니와 함께 영화를 보았어요. 영화 속 강아지들이랑 같이 나온 장면에서는 제가 특히 신나서 꼬리를 흔들었어요. 언니와 함께 있는 모든 순간이 너무 소중하고 행복해요.
              이제 저는 잠이 들 준비를 하려고 해요. 하루종일 증거운 시간을 보내고, 푹 쉬어야겠어요. 안녕히 주무세요!
              오늘은 언니 옆에서 같이 자야지!
            </p>
            <p>-쵸파 드림-</p>
          </div>
          </div>
        </div>
        <div className={style.callendarWrap}>

        </div>
      </main>
      <FooterLayout />
    </>
  )
}

export default DogDiaryPage;