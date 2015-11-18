import { CHANGE_FILTERTEXT } from '../constants/actiontypes';

export function changeFilterText(value) {
  return {
    type: CHANGE_FILTERTEXT,
    text: value
  };
}
