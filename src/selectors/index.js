import { createSelector } from 'reselect';

export const stopsSelector = (state) => state.stops;
export const ticketsSelector = (state) => state.tickets.entities;

export const currencySelector = (state) => state.currency.entities;
export const currentCurrencySelector = (state) =>
  state.currency.currentCurrency;

export const currencyPriceSelector = createSelector(
  currencySelector,
  currentCurrencySelector,
  (currency, currentCurrency) => {
    return currency[currentCurrency];
  }
);

export const calculatedPriceTicketsSelector = createSelector(
  ticketsSelector,
  currencySelector,
  currentCurrencySelector,
  (tickets, currency, currentCurrency) => {
    const coef = currency[currentCurrency];
    return tickets.map((ticket) => {
      return {
        ...ticket,
        price: (ticket.price * coef).toFixed(2) / 1
      };
    });
  }
);

export const sortedTicketsSelector = createSelector(
  calculatedPriceTicketsSelector,
  (tickets) => {
    return tickets.sort((a, b) => {
      if (a.price > b.price) return 1;
      if (a.price < b.price) return -1;
      return 0;
    });
  }
);

export const stopsArrSelector = createSelector(
  stopsSelector,
  (stops) => {
    return Object.keys(stops)
      .map((key) => parseInt(key))
      .filter((key, index) => stops[key]);
  }
);

export const filteredTicketsSelectior = createSelector(
  stopsArrSelector,
  sortedTicketsSelector,
  (stopsArr, tickets) => {
    return tickets.filter((ticket) => stopsArr.includes(ticket.stops));
  }
);
