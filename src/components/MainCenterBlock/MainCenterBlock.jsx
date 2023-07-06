import "../../css/style.css";
import { useState } from "react";
import Skeleton from "../Skeleton";
import CenterBlockSearch from "./centerBlockSearch/centerBlockSearch";
import FilterButton from "./filterButton/filterButton";
import FilterListPerformer from "./filterListPerformer/filterListPerformer";
import FilterListYear from "./filterListYear/filterListYear";
import FilterListGenre from "./filerListGenre/filterListGenre";
import ContentTitle from "./contentTitle/contentTitle";
import PlayListTrack from "./playListTrack/playListTrack";

function MainCenterBlock({ loading }) {
  const [filter, setFilter] = useState(0);
  const toggleFilter = (id) => setFilter(filter === id ? 0 : id);

  const handleKeyDown = (numb) => toggleFilter(numb);

  return (
    <div className="main__centerBlock centerBlock">
      <CenterBlockSearch />
      <h2 className="centerBlock__h2">Треки</h2>
      <FilterButton
        toggleFilter={toggleFilter}
        handleKeyDown={handleKeyDown}
        filter={filter}
      />
      {filter === 1 ? <FilterListPerformer /> : null}
      {filter === 2 ? <FilterListYear /> : null}
      {filter === 3 ? <FilterListGenre /> : null}
      <div className="centerBlock__content">
        <ContentTitle />
        <div className="content__playlist playlist">
          <div className="playlist__item">
            {loading ? (
              <div className="playlist__track track">
                <div className="track__title">
                  <div className="track__title-image">
                    <Skeleton w="51px" h="51px" />
                  </div>
                  <div className="track__title-text">
                    <Skeleton w="356px" h="19px" />
                  </div>
                </div>
                <div className="track__author">
                  <Skeleton w="271px" h="19px" />
                </div>
                <div className="track__album">
                  <Skeleton w="305px" h="19px" />
                </div>
                <div className="track__time">
                  <Skeleton w="60.8px" h="19px" />
                </div>
              </div>
            ) : (
              <PlayListTrack />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainCenterBlock;
