import { useNavigate } from "react-router-dom";
import { useUserContext } from "../../Contexts/Contexts";
import sprite from "../../../img/icon/sprite.svg";
import S from "./sidebarPersonal.module.css";

function SidebarPersonal() {
  const { user } = useUserContext();
  const navigate = useNavigate();

  const exit = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className={S.sidebar__personal}>
      <p className={S.sidebar__personalName}>{user.username}</p>
      <button onClick={exit} type="button" className={S.sidebar__button}>
        <svg className={S.sidebar__avatar} alt="exit">
          <use xlinkHref={`${sprite}#icon-exit`} />
        </svg>
      </button>
    </div>
  );
}

export default SidebarPersonal;
