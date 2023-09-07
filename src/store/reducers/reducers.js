/* eslint-disable default-param-last */
import {
  ADD_TRACK,
  PLAY_TRACK,
  ACTIVE_TRACK,
  SHUFFLE_TRACKS,
  ADD_USER,
  FAVORITES_TRACKS,
  ADD_TOKEN,
} from "../actions/types/types";

const initialTracks = {
  user: {},
  allTracks: [],
  playTrack: {},
  activeTrack: {},
  shuffleTracks: [],
  favoriteTracks: [],
  token: {},
};

function tracksReducer(state = initialTracks, action) {
  switch (action.type) {
    case ADD_USER: {
      const { user } = action.payload;

      return {
        ...state,
        user,
      };
    }
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
    case FAVORITES_TRACKS: {
      const { favoriteTracks } = action.payload;

      return {
        ...state,
        favoriteTracks,
      };
    }
    case ADD_TOKEN: {
      const { token } = action.payload;

      return {
        ...state,
        token,
      };
    }
    default:
      return state;
  }
}

export default tracksReducer;
