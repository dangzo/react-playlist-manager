
import { PLAY_SONG, PAUSE_SONG } from '../actions/audioPlayer.actions';

const initialState = { playing: false, index: 0 };

const audioPlayerReducer = (state = initialState, action) => {
  switch (action.type) {
    case PLAY_SONG:
      // playing set to true when playing a new song
      return Object.assign({}, state, {
        playing: action.payload.playing,
        index: action.payload.index,
      });
    case PAUSE_SONG:
      return { playing: false };
    default:
      return state;
  }
};

export default audioPlayerReducer;
