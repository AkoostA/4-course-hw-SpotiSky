import {
  ADD_TRACK,
  PLAY_TRACK,
  ACTIVE_TRACK,
  SHUFFLE_TRACKS,
  ADD_USER,
  FAVORITES_TRACKS,
  ADD_TOKEN,
  NEXT_AND_PREV_TRACK,
} from "../types/types";

const addTracks = (tracks) => ({
  type: ADD_TRACK,
  payload: { tracks },
});

export const addPlayTrack = (playTrack) => ({
  type: PLAY_TRACK,
  payload: { playTrack },
});

export const addActiveTrack = (activeTrack) => ({
  type: ACTIVE_TRACK,
  payload: { activeTrack },
});

export const addShuffleTracks = () => ({
  type: SHUFFLE_TRACKS,
});

export const addUser = (user) => ({
  type: ADD_USER,
  payload: { user },
});

export const addFavoritesTracks = (favoriteTracks) => ({
  type: FAVORITES_TRACKS,
  payload: { favoriteTracks },
});

export const addToken = (token) => ({
  type: ADD_TOKEN,
  payload: { token },
});

export const addNextOrPrevTrack = (nextOrPrev) => ({
  type: NEXT_AND_PREV_TRACK,
  payload: {nextOrPrev}
});

export default addTracks;
