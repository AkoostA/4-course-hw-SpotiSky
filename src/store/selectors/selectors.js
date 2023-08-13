const trackSelector = (store) => store.tracks;

const allTracksSelector = (store) => trackSelector(store)?.allTracks || [];
export const playTrackSelector = (store) => trackSelector(store)?.playTrack || [];
export const activeTrackSelector = (store) => trackSelector(store)?.activeTrack || [];

export default allTracksSelector;
