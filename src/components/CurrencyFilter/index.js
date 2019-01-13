import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

import { changeCurrency } from '../../ac';
import { currentCurrencySelector } from '../../selectors';

const List = styled.ul`
  display: flex;
  margin: 0 0 30px;
  padding: 0;
`;

const Item = styled.li`
  display: block;
  flex-grow: 1;
  padding: 9px 0;

  font-weight: 600;
  line-height: 22px;
  font-size: 12px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  text-align: center;
  color: ${(props) => (props.active ? '#fff' : '#2196f3')};

  cursor: pointer;
  background-color: ${(props) => (props.active ? '#64B5F5' : '#fff')};
  border: 1px solid ${(props) => (props.active ? '#64B5F5' : '#D2D5D6')};

  &:first-child {
    border-radius: 5px 0px 0px 5px;
  }

  &:last-child {
    border-radius: 0px 5px 5px 0px;
  }

  &:hover {
    color: #2196f3;
    background-color: #f2fcff;
    border-color: #64b5f5;
  }
`;

class Currency extends Component {
  handleClick = (currency) => {
    const { changeCurrency } = this.props;
    changeCurrency(currency);
  };

  render() {
    const { currency } = this.props;
    const items = ['RUB', 'USD', 'EUR'];

    return (
      <div>
        <List>
          {items.map((item) => (
            <Item
              active={item === currency}
              key={item}
              data-currency={item}
              onClick={() => this.handleClick(item)}
            >
              {item}
            </Item>
          ))}
        </List>
      </div>
    );
  }
}

export default connect(
  (state) => ({ currency: currentCurrencySelector(state) }),
  { changeCurrency }
)(Currency);
