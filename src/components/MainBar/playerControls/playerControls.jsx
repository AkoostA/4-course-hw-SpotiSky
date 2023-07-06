import "../../../css/style.css";
import sprite from "../../../img/icon/sprite.svg";

function PlayerControls({ logo }) {
  return (
    <div className="player__btn-prev">
      <svg className="player__btn-prev-svg" alt="prev">
        <use xlinkHref={sprite + logo} />
      </svg>
    </div>
  );
}
export default PlayerControls;
