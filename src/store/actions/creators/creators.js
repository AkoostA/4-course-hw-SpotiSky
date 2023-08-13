import { ADD_TRACK, PLAY_TRACK, ACTIVE_TRACK } from "../types/types";

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

export default addTracks;
