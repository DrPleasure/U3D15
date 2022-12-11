import {
  ADD_FAVORITE,
} from "../actions";

const initialState = {
  songToPlay: null,
  searchedSongs: []
};

const songsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        addSong: action.payload,
      };
    default:
      return state;
  }
};

export default songsReducer;
