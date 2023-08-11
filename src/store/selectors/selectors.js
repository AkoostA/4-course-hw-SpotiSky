const trackSelector = (store) => store.tracks;

const tracksAllSelector = (store) => trackSelector(store)?.allTracks || [];

export default tracksAllSelector;
