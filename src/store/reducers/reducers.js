/* eslint-disable default-param-last */
import { ADD_TRACK, PLAY_TRACK, ACTIVE_TRACK, SHUFFLE_TRACKS } from "../actions/types/types";

const initialTracks = {
  allTracks: [],
  playTrack: {},
  activeTrack: {},
  shuffleTracks: [],
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
    case SHUFFLE_TRACKS: {
      const { shuffle } = action.payload;

      return {
        ...state,
        shuffleTracks: shuffle,
      };
    }
    default:
      return state;
  }
}

export default tracksReducer;
