import { TOGGLE_SIDEBAR } from '../constants';

export default (toggleState = false, action) => {
  const { type } = action;

  switch (type) {
    case TOGGLE_SIDEBAR:
      return !toggleState;
    default:
      return toggleState;
  }
};
