import { ADD_TRACK, PLAY_TRACK, ID_TRACK } from "../types/types";

const addTracks = (tracks) => ({
  type: ADD_TRACK,
  payload: { tracks },
});

export const addPlayTrack = (playTrack) => ({
  type: PLAY_TRACK,
  payload: { playTrack },
});

export const addIdTrack = (idTrack) => ({
  type: ID_TRACK,
  payload: { idTrack },
});

export default addTracks;
