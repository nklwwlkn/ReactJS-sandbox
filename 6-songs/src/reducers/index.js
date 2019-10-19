import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Song 1", duration: "3:00" },
    { title: "Song 2", duration: "1:21" },
    { title: "Song 3", duration: "2:32" },
    { title: "Song 4", duration: "5:10" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return selectedSong;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
