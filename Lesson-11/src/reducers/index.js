import { CHANGE_FILTERTEXT } from '../constants/actiontypes';
import { changeFilterText, initialState } from '../core/';

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CHANGE_FILTERTEXT:
      return changeFilterText(state, action.text);
  }
  return state;
}
