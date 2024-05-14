import style from './DogStatisticsPage.module.css'
import ExpendedHeader from "../../commons/compononets/ExpendedHeader/ExpendedHeader";
import Calendar from "react-calendar";
import {useState} from "react";
import "./calendar.css"
const DogStatisticsPage = () => {
  const [value, onChange] = useState(new Date());

  return (
    <>
      <ExpendedHeader />
      <main>
        <div className={style.calendarWrap}>
          <Calendar onChange={onChange} value={value}
                    className="statisticsCalendar"
                    maxDetail="month"/>
        </div>
        <div className={style.statisticsWrap}>
          <p className={style.title}>하루 요약</p>
        </div>
      </main>
    </>
  )
}

export default DogStatisticsPage