import style from './DogStatisticsPage.module.css'
import ExpendedHeader from "../../commons/compononets/ExpendedHeader/ExpendedHeader";
import Calendar from "react-calendar";
import {useState} from "react";
import "./calendar.css"
import {Doughnut} from "react-chartjs-2";
import {externalTooltipHandler} from "../main/TooltipHandler";
import FooterLayout from "../../commons/compononets/footer/FooterLayout";
const DogStatisticsPage = () => {
  const [value, onChange] = useState(new Date());
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
  const activeData = [
    {label: "머리를 들어올림", value: 30},
    {label: "앞발을 들어올림", value: 100},
    {label: "뛰어다님", value: 20},
    {label: "누워잇음", value: 40},
    {label: "잠자기", value: 60},
    {label: "마운팅", value: 40},
  ]

  return (
    <>
      <ExpendedHeader />
      <main className={style.statisticsMain}>
        <div className={style.calendarWrap}>
          <Calendar onChange={onChange} value={value}
                    className="statisticsCalendar"
                    maxDetail="month"/>
        </div>
        <div className={style.statisticsWrap}>
          <p className={style.title}>하루 요약</p>
          <div className={style.chartWrap}>
            <img src={process.env.PUBLIC_URL + "/images/testImage.png"} alt="test"/>
            <Doughnut data={data} options={options}/>
          </div>
          <div className={style.progressWrap}>
            <ul>
              {
                activeData.map((item) => {
                  return (
                  <li>
                    <p>{item.label}</p>
                    <progress min="0" max="100" value={item.value}></progress>
                  </li>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </main>
      <FooterLayout />
    </>
  )
}

export default DogStatisticsPage