import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { uploadTicktes } from '../../ac';
import {
  filteredTicketsSelectior,
  currentCurrencySelector,
  currencyPriceSelector
} from '../../selectors';

import Ticket from '../Ticket';
import Loader from '../Loader';
const List = styled.ul`
  margin: 0;
  padding: 0;
`;

const Item = styled.li`
  display: block;
`;

class TicketsList extends Component {
  componentDidMount() {
    const { uploadTicktes } = this.props;
    uploadTicktes();
  }
  render() {
    const {
      tickets,
      currencyPrice,
      currencyLoading,
      ticketsLoading,
      ticketsError
    } = this.props;

    if (ticketsError) return <h1>Нет подключения к Интернету</h1>;
    if (ticketsLoading || currencyLoading) return <Loader />;

    return (
      <div>
        <List>
          {tickets.map((ticket) => (
            <Item key={ticket.id}>
              <Ticket ticket={ticket} currencyPrice={currencyPrice} />
            </Item>
          ))}
        </List>
      </div>
    );
  }
}

export default connect(
  (state) => ({
    tickets: filteredTicketsSelectior(state),
    currency: currentCurrencySelector(state),
    currencyPrice: currencyPriceSelector(state),
    currencyLoading: state.currency.loading,
    ticketsLoading: state.tickets.loading,
    ticketsError: state.tickets.error
  }),
  { uploadTicktes }
)(TicketsList);
