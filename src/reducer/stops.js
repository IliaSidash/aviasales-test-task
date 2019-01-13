import { CHANGE_STOPS } from '../constants';

const stopsDefault = {
  0: true,
  1: true,
  2: false,
  3: false
};

export default (stopsState = stopsDefault, action) => {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_STOPS:
      return payload.stops;
    default:
      return stopsState;
  }
};
