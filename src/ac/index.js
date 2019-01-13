import {
  CHANGE_CURRENCY,
  CHANGE_STOPS,
  START,
  SUCCESS,
  FAIL,
  UPLOAD_TICKETS,
  TOGGLE_SIDEBAR
} from '../constants';

export function changeCurrency(currency) {
  return (dispatch) => {
    dispatch({
      type: CHANGE_CURRENCY + START,
      payload: { currency }
    });
    fetch('https://aviasales-api-test-pa9hwqtwr.now.sh/api/currency/')
      .then((res) => res.json())
      .then((response) => {
        return dispatch({
          type: CHANGE_CURRENCY + SUCCESS,
          payload: { currency },
          response: response
        });
      })
      .catch((err) =>
        dispatch({
          type: CHANGE_CURRENCY + FAIL,
          payload: { currency },
          response: err
        })
      );
  };
}

export function changeStops(stops) {
  return {
    type: CHANGE_STOPS,
    payload: { stops }
  };
}

export function uploadTicktes() {
  return (dispatch) => {
    dispatch({
      type: UPLOAD_TICKETS + START
    });

    fetch('https://aviasales-api-test-pa9hwqtwr.now.sh/api/tickets/')
      .then((res) => res.json())
      .then((tickets) =>
        dispatch({
          type: UPLOAD_TICKETS + SUCCESS,
          response: { tickets }
        })
      )
      .catch((err) =>
        dispatch({
          type: UPLOAD_TICKETS + FAIL,
          response: { err }
        })
      );
  };
}

export function toggleSidebar() {
  return {
    type: TOGGLE_SIDEBAR
  };
}
