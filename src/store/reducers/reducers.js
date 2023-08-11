/* eslint-disable default-param-last */
import ADD_TRACK from "../actions/types/types";

const initialTracks = {
  allTracks: [],
  tracksId: [],
  playTrack: {},
};

function tracksReducer(state = initialTracks, action) {
  switch (action.type) {
    case ADD_TRACK: {
      const { tracks } = action.payload;
      return {
        ...state,
        allTracks: tracks,
      };
    }
    default:
      return state;
  }
}

export default tracksReducer;
