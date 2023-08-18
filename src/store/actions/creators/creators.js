import {
  ADD_TRACK,
  PLAY_TRACK,
  ACTIVE_TRACK,
  SHUFFLE_TRACKS,
  ADD_USER,
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

export const addShuffleTracks = (shuffle) => ({
  type: SHUFFLE_TRACKS,
  payload: { shuffle },
});

export const addUser = (user) => ({
  type: ADD_USER,
  payload: { user },
});

export default addTracks;
