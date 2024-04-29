import SharedHeader from "../../commons/compononets/SharedHeader/SharedHeader";
import style from "./StartPate.module.css";
const StartPage = () => {
  return (
    <>
      <div className={style.wrap}>
        <SharedHeader isStartPage={true} />
        <div className={style.bottomWrap}>
          <div className={style.startWrap}>
            <button className={style.startBtn}>
              <div className={style.pawimg} />
            </button>
            <p className={style.startText}>시작하기</p>
          </div>
          <div className={style.bottomImg}></div>
        </div>
      </div>
    </>
  );
};
export default StartPage;
