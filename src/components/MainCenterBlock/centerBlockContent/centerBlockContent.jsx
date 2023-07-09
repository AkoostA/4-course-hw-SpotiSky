import Skeleton from "../../Skeleton";
import ContentTitle from "../contentTitle/contentTitle";
import PlayListTrack from "../playListTrack/playListTrack";

function CenterBlockContent({ loading }) {
  return (
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
  );
}

export default CenterBlockContent;
