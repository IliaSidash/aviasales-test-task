import { CHANGE_CURRENCY, START, SUCCESS, FAIL } from '../constants';

const defaultCurrency = {
  entities: {
    RUB: 1,
    USD: 0.0148665,
    EUR: 0.0129449
  },
  currentCurrency: 'RUB',
  loading: false,
  loaded: false,
  error: false
};

export default (currencyState = defaultCurrency, action) => {
  const { type, payload, response } = action;

  switch (type) {
    case CHANGE_CURRENCY + START:
      return { ...currencyState, loading: true };

    case CHANGE_CURRENCY + SUCCESS:
      return {
        ...currencyState,
        entities: response,
        currentCurrency: payload.currency,
        loading: false,
        loaded: true,
        error: null
      };

    case CHANGE_CURRENCY + FAIL:
      return {
        ...currencyState,
        currentCurrency: payload.currency,
        loading: false,
        loaded: false,
        error: true
      };

    default:
      return currencyState;
  }
};
