import style from "./DogStatisticsPage.module.css";
import ExpendedHeader from "../../commons/compononets/ExpendedHeader/ExpendedHeader";
import Calendar from "react-calendar";
import { useState, useEffect } from "react";
import "./calendar.css";
import { Doughnut } from "react-chartjs-2";
import { getStatistic } from "../../apis/DogInfo";
import { externalTooltipHandler } from "../main/TooltipHandler";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { dogsAtom } from "../../stores/dogAtom";
import { dogIdAtom } from "../../stores/dogIdAtom";

import FooterLayout from "../../commons/compononets/footer/FooterLayout";
import { controllers } from "chart.js";

const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
};

const DogStatisticsPage = () => {
  const [value, onChange] = useState(new Date());
  const [activeData, setActiveData] = useState([]);
  const getDogs = useRecoilValue(dogsAtom);
  const getDogId = useRecoilValue(dogIdAtom);
  const [statistics, setStatistics] = useState({
    bodyLower: 0,
    bodyScratch: 0,
    bodyShake: 0,
    feetUp: 0,
    footUp: 0,
    heading: 0,
    lying: 0,
    mounting: 0,
    sit: 0,
    tailLow: 0,
    tailing: 0,
    turn: 0,
    walkRun: 0,
  });
  console.log("펫 아이디:", getDogId[0].petId);

  const [data, setData] = useState({
    labels: ["Red", "Orange", "Yellow", "Green", "Blue", "Purple"],
    datasets: [
      {
        label: "",
        data: [17, 19, 3, 5, 2, 10],
        backgroundColor: [
          "rgba(212, 91, 69, 0.5)",
          "rgba(254, 191, 73, 0.5)",
          "rgba(235, 244, 139, 0.5)",
          "rgba(143, 228, 170, 0.5)",
          "rgba(166, 199, 232, 0.5)",
          "rgba(188, 143, 228, 0.5)",
        ],
        borderColor: [
          "rgba(212, 138, 138, 0.5)",
          "rgba(254, 191, 73, 0.5)",
          "rgba(235, 244, 139, 0.5)",
          "rgba(143, 228, 170, 0.5)",
          "rgba(166, 199, 232, 0.5)",
          "rgba(188, 143, 228, 0.5)",
        ],
        borderWidth: 1,
      },
    ],
  });

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
        position: "nearest",
        external: externalTooltipHandler,
      },
    },
  };
  //여기
  useEffect(() => {
    let params = {
      petId : getDogId[0].petId,
      date: formatDate(value)
    }
    getStatistic(params).then(
      (response) => {
        const {
          bodyLower,
          bodyScratch,
          bodyShake,
          feetUp,
          footUp,
          heading,
          lying,
          mounting,
          sit,
          tailLow,
          tailing,
          turn,
          walkRun,
        } = response.data;
        setStatistics({
          bodyLower,
          bodyScratch,
          bodyShake,
          feetUp,
          footUp,
          heading,
          lying,
          mounting,
          sit,
          tailLow,
          tailing,
          turn,
          walkRun,
        });
      }
    );
  }, [value]);

  useEffect(() => {
    const totalExceptMisc = Object.entries(statistics)
      .filter(
        ([key]) =>
          !["bodyShake", "lying", "turn", "mounting", "bodyScratch"].includes(
            key
          )
      )
      .reduce((acc, [key, value]) => acc + value, 0);

    const misc = Object.values(statistics)
      .filter(
        (value, index) =>
          !["bodyShake", "lying", "turn", "mounting", "bodyScratch"].includes(
            Object.keys(statistics)[index]
          )
      )
      .reduce((acc, curr) => acc + curr, 0);

    const total = totalExceptMisc + misc;

    const percentages = {};
    for (const key in statistics) {
      if (
        ["bodyShake", "lying", "turn", "mounting", "bodyScratch"].includes(key)
      ) {
        percentages[key] = Math.floor((statistics[key] / total) * 1000);
      } else {
        percentages.misc = Math.floor((misc / total) * 1000);
      }
    }
    const tmpData = [
      { label: "몸을 텀", value: percentages.turn || 0 },
      { label: "엎드리기", value: percentages.lying || 0 },
      { label: "빙글빙글 돎", value: percentages.bodyShake || 0 },
      { label: "마운팅", value: percentages.mounting || 0 },
      { label: "몸을 긁음", value: percentages.bodyScratch || 0 },
      { label: "기타", value: percentages.misc / 10 || 0 },
    ];

    setActiveData(tmpData);
    console.log(percentages);
    setData({
      ...data,
      datasets: [
        {
          ...data.datasets[0],
          data: tmpData.map((item) => item.value),
        },
      ],
    });
  }, [statistics]);
  console.log(activeData)
  return (
    <>
      <ExpendedHeader />
      <main className={style.statisticsMain}>
        <div className={style.calendarWrap}>
          <Calendar
            onChange={onChange}
            value={value}
            className="statisticsCalendar"
            maxDetail="month"
            tileClassName={({ date, view }) =>
              view === "month" &&
              date.toDateString() === new Date().toDateString()
                ? style.todayBackground
                : null
            }
          />
        </div>
        <div className={style.statisticsWrap}>
          <p className={style.title}>하루 요약</p>
          <div className={style.chartWrap}>
            <img src={getDogs.profile} alt="dog" />
            <Doughnut data={data} options={options} />
          </div>
          <div className={style.progressWrap}>
            <ul>
              {activeData.map((item) => {
                return (
                  <li>
                    <p>{item.label}</p>
                    <progress min="0" max="100" value={item.value}></progress>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </main>
      <FooterLayout />
    </>
  );
};

export default DogStatisticsPage;
