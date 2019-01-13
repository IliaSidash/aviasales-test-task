import { UPLOAD_TICKETS, START, SUCCESS, FAIL } from '../constants';
import { tickets } from '../api/index.json';

const ticketsDefault = {
  entities: [],
  loading: false,
  loaded: true,
  error: null
};

export default (ticketsState = ticketsDefault, action) => {
  const { type, response } = action;
  switch (type) {
    case UPLOAD_TICKETS + START:
      return { ...ticketsState, loading: true };
    case UPLOAD_TICKETS + SUCCESS:
      return {
        ...ticketsState,
        entities: response.tickets,
        loading: false,
        loaded: true,
        error: null
      };
    case UPLOAD_TICKETS + FAIL:
      return {
        ...ticketsState,
        entities: tickets,
        loading: false,
        loaded: true,
        error: true
      };

    default:
      return ticketsState;
  }
};
