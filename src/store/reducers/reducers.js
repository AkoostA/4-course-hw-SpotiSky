/* eslint-disable default-param-last */
import { ADD_TRACK, PLAY_TRACK, ACTIVE_TRACK } from "../actions/types/types";

const initialTracks = {
  allTracks: [],
  playTrack: {},
  activeTrack: {},
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
    case ACTIVE_TRACK: {
      const { activeTrack } = action.payload;

      return {
        ...state,
        activeTrack,
      };
    }
    default:
      return state;
  }
}

export default tracksReducer;
