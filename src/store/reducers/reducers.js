/* eslint-disable default-param-last */
import { ADD_TRACK, PLAY_TRACK, ID_TRACK } from "../actions/types/types";

const initialTracks = {
  allTracks: [],
  playTrack: {},
  idTrack: [],
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
    case PLAY_TRACK: {
      const { playTrack } = action.payload;

      return {
        ...state,
        playTrack,
      };
    }
    case ID_TRACK: {
      const { idTrack } = action.payload;

      return {
        ...state,
        idTrack,
      };
    }
    default:
      return state;
  }
}

export default tracksReducer;
