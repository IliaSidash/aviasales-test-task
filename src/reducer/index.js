import { combineReducers } from 'redux';

import currency from './currency';
import stops from './stops';
import tickets from './tickets';
import toggle from './toggle';

export default combineReducers({ currency, stops, tickets, toggle });
