import style from "./DogDiaryPage.module.css"
import "./diarySlide.css"
import ExpendedHeader from "../../commons/compononets/ExpendedHeader/ExpendedHeader";
import FooterLayout from "../../commons/compononets/footer/FooterLayout";
import {useState} from "react";
import {registerLocale} from "react-datepicker";
import DatePicker from "react-datepicker";
import ko from "date-fns/locale/ko";
import 'react-datepicker/dist/react-datepicker.css';
import Slider from "react-slick";
import {getDogDiary} from "../../apis/DogInfo";
import {useRecoilValue} from "recoil";
import {dogsAtom} from "../../stores/dogAtom";
const DogDiaryPage = () => {
  registerLocale("ko", ko);
  const setToday = (date) => {
    let dateYear = date.getFullYear();
    let dateMonth = date.getMonth() + 1;
    let dateFormat = new Date(dateYear,dateMonth,0);
    const weekDay = ['일','월','화','수','목','금','토']
    let dateObjectList = [];

    for(let i = 1 ; i <= dateFormat.getDate() ; i++) {
      let dateObject = {
        num : i,
        week : weekDay[(new Date(date.getFullYear() , date.getMonth(), i)).getDay()],
      }
      dateObjectList.push(dateObject);
    }
    return dateObjectList;
  }

  const today = new Date();
  const todayList = setToday(today);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedDay, setSelectedDay] = useState("");
  const [dayList, setDayList] = useState(todayList);

  const setDay = (date) => {
    let dateYear = date.getFullYear();
    let dateMonth = date.getMonth() + 1;
    let dateFormat = new Date(dateYear,dateMonth,0);
    const weekDay = ['일','월','화','수','목','금','토']
    let dateObjectList = [];

    for(let i = 1 ; i <= dateFormat.getDate() ; i++) {
      let dateObject = {
        num : i,
        week :  weekDay[(new Date(date.getFullYear() , date.getMonth(), i)).getDay()],
      }
      dateObjectList.push(dateObject);
    }
    console.log(dateObjectList);

    setDayList(dateObjectList);
  }

  const settings = {
    className: "diarySlide",
    centerMode: true,
    infinite: true,
    centerPadding: "150px",
    slidesToShow: 1,
    speed: 500,
    dots: false,
    arrows: false,
    focusOnSelect: true,
    slidesToScroll: 3,
    swipeToSlide: true,
  };
  const getDogs = useRecoilValue(dogsAtom);
  const [dogDiary, setDogDiary] = useState({});

  const handleClickSlide = (item) => {
    console.log(getDogs);
    setSelectedDay(item);
    let diaryParams = {
      petId: getDogs.id,
      date : `${selectedDate.getFullYear()}-${String(selectedDate.getMonth() + 1).padStart(2,"0")}-${String(item).padStart(2,"0")}`,
    }

    getDogDiary(diaryParams).then(r => {
      console.log(r)
      setDogDiary(r.data);
    }).catch(r => {
      console.log(r.response.status);
      if(r.response.status === 400) {
        setDogDiary({
          dateTime: `${new Date(selectedDate).getFullYear()}-${new Date(selectedDate).getMonth()+1}-${selectedDay}`,
          massage: '일기 작성이 완료 되지 않았씁니다.',
          error: true,
        })
      }
    })
  };

  return (
    <>
      <ExpendedHeader />
      <main>
        <div className={style.diaryContainer}>
          <div className={style.diaryWrap}>
          <div className={style.diaryTitleWrap}>
            <p>{`${new Date(dogDiary.dateTime).getFullYear()}년 ${new Date(dogDiary.dateTime).getMonth()+1}월 ${new Date(dogDiary.dateTime).getDate()}일`}</p>
            <p>날씨: 맑음</p>
          </div>
          <div className={style.diaryImageWrap}>
            {
              !dogDiary.error ? <img src={process.env.PUBLIC_URL + "/images/testImage3.png"} alt="일기 사진"/> : <p>존재하는 다이어리가 없습니다.</p>
            }
          </div>
          <div className={style.diaryTextWrap}>
            <p>
              {dogDiary.message}
            </p>
            <p>-{getDogs.name} 드림-</p>
          </div>
          </div>
        </div>
        <div className={style.calenderWrap}>
          <div className={style.calenderTitleWrap}>
            <DatePicker
              selected={selectedDate}
              onChange={(date) => {
                setSelectedDate(date)
                setDay(date)
              }}
              dateFormat="yyyy년 MM월"
              showMonthYearPicker
              locale="ko"
              className={style.datePicker}
              popperClassName={style.datePickerPopper}
              popperPlacement="top-start"
            />
          </div>
          <Slider {...settings}>
            {dayList.map((list,index) => {
              return (
                <>
                  <div className={`${style.weekBox} weekBox`}
                      onClick={() => handleClickSlide(list.num)}>
                    <p>{list.num}</p>
                    <p>{list.week}</p>
                    <img src={process.env.PUBLIC_URL + "/images/dogPaw.png"} alt=""/>
                  </div>
                </>
              )
            })}
          </Slider>
        </div>
      </main>
      <FooterLayout />
    </>
  )
}

export default DogDiaryPage;