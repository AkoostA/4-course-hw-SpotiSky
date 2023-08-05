import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getCategory } from "../../api/Api";
import style from "./Сategory.module.css";
import sprite from "../../img/icon/sprite.svg";

function Сategory() {
  const [categoryTrack, setCategoryTrack] = useState();
  const params = useParams();
  const navigate = useNavigate();

  const mainButton = () => {
    navigate("/main", { replace: true });
  };

  const asyncGetCategory = async () => {
    const response = await getCategory({ id: params.id });
    setCategoryTrack(response);
  };

  useEffect(() => {
    asyncGetCategory();
  }, []);

  return (
    <div className={style.сategory}>
      <h1 className={style.сategory__header}>Category {params.id} PAGE</h1>
      <button
        onClick={mainButton}
        className={style.сategory__button}
        type="button"
      >
        На Main страницу
      </button>
      <div>
        {categoryTrack
          ? categoryTrack.items.map((track) => (
              <div key={track.id} className={style.playlist__track}>
                <div className={style.track__title}>
                  <div className={style.track__titleImage}>
                    <svg className={style.track__titleSvg} alt="music">
                      <use xlinkHref={`${sprite}#icon-note`} />
                    </svg>
                  </div>
                  <div className={style.titleText}>
                    <button type="button" className={style.track__titleLink}>
                      {track.name} <span className={style.track__titleSpan} />
                    </button>
                  </div>
                </div>
                <div className={style.track__author}>
                  <button type="button" className={style.track__authorLink}>
                    {track.author}
                  </button>
                </div>
                <div className={style.track__album}>
                  <button type="button" className={style.track__albumLink}>
                    {track.album}
                  </button>
                </div>
                <div className={style.time}>
                  <svg className={style.track__timeSvg} alt="time">
                    <use xlinkHref={`${sprite}#icon-like`} />
                  </svg>
                  <span className={style.track__timeText}>
                    {track.duration_in_seconds}
                  </span>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}

export default Сategory;
