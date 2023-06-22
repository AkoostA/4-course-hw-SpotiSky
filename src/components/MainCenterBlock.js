import "../css/style.css";
import iconSearch from "../img/icon/search.svg";
import iconWatch from "../img/icon/watch.svg";
import iconNote from "../img/icon/note.svg"
import iconLike from "../img/icon/like.svg"

const centerBlockSearch = (
  <div className="centerBlock__search search">
    <svg className="search__svg">
      <use xlinkHref={iconSearch} />
    </svg>
    <input
      className="search__text"
      type="search"
      placeholder="Поиск"
      name="search"
    />
  </div>
);

const centerBlockFilter = (
  <div className="centerBlock__filter filter">
    <div className="filter__title">Искать по:</div>
    <div className="filter__button button-author _btn-text">исполнителю</div>
    <div className="filter__button button-year _btn-text">году выпуска</div>
    <div className="filter__button button-genre _btn-text">жанру</div>
  </div>
);

const contentTitle = (
  <div className="content__title playlist-title">
    <div className="playlist-title__col col01">Трек</div>
    <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
    <div className="playlist-title__col col03">АЛЬБОМ</div>
    <div className="playlist-title__col col04">
      <svg className="playlist-title__svg" alt="time">
        <use xlinkHref={iconWatch} />
      </svg>
    </div>
  </div>
);

const contentPlaylist = (
  <div className="playlist__item">
    <div className="playlist__track track">
      <div className="track__title">
        <div className="track__title-image">
          <svg className="track__title-svg" alt="music">
            <use xlinkHref={iconNote} />
          </svg>
        </div>
        <div className="track__title-text">
          <a className="track__title-link" href="index.html">
            Guilt <span className="track__title-span" />
          </a>
        </div>
      </div>
      <div className="track__author">
        <a className="track__author-link" href="index.html">
          Nero
        </a>
      </div>
      <div className="track__album">
        <a className="track__album-link" href="index.html">
          Welcome Reality
        </a>
      </div>
      <div className="track__time">
        <svg className="track__time-svg" alt="time">
          <use xlinkHref={iconLike} />
        </svg>
        <span className="track__time-text">4:44</span>
      </div>
    </div>
  </div>
);

const centerBlockContent = (
  <div className="centerBlock__content">
    {contentTitle}
    <div className="content__playlist playlist">{contentPlaylist}</div>
  </div>
);

function MainCenterBlock() {
  return (
    <div className="main__centerBlock centerBlock">
      {centerBlockSearch}
      <h2 className="centerBlock__h2">Треки</h2>
      {centerBlockFilter}
      {centerBlockContent}
    </div>
  );
}

export default MainCenterBlock;
