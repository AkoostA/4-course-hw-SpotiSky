const trackSelector = (store) => store.tracks;

const allTracksSelector = (store) => trackSelector(store)?.allTracks || [];
export const palyTrackSelector = (store) => trackSelector(store)?.playTrack || [];
export const idTrackSelector = (store) => trackSelector(store)?.idTrack || [];

export default allTracksSelector;
