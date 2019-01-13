import React from 'react';
import currency from 'currency.js';
import { connect } from 'react-redux';
import { currentCurrencySelector } from '../../selectors';

const settings = {
  pattern: `# !`,
  formatWithSymbol: true,
  precision: 0,
  separator: ' '
};

const formateCurrency = {
  RUB: (value) => currency(value, { ...settings, symbol: '₽' }),
  USD: (value) => currency(value, settings),
  EUR: (value) => currency(value, { ...settings, symbol: '€' })
};

const Currency = ({ currency, value }) => {
  return <>{formateCurrency[currency](value).format(true)}</>;
};

export default connect((state) => ({
  currency: currentCurrencySelector(state)
}))(Currency);
