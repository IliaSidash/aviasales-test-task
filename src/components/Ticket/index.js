import React from 'react';
import styled from 'styled-components';

import Currency from '../Currency';
import Plural from '../Plural';

const TicketItem = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 0 20px;

  color: #4a4a4a;

  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(91, 137, 164, 0.25);
  border-radius: 5px;
`;

const Left = styled.div`
  padding: 25px 20px;
  width: 100%;

  border-right: 1px solid #eceff1;

  @media screen and (min-width: 576px) {
    display: block;
    width: auto;
    min-width: 150px;
  }

  @media screen and (min-width: 1200px) {
    min-width: 200px;
  }
`;

const Logo = styled.img`
  display: block;
  margin: 0 auto 20px;
`;

const Button = styled.button`
  display: block;
  margin: 0 auto;
  padding: 6px 39px;
  width: 100%;
  max-width: 200px;

  font-weight: 600;
  font-size: 16px;
  text-align: center;

  color: #ffffff;

  background-color: #ff6d00;
  box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.1), 0px 1px 0px #d64d08;
  border-radius: 5px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #ff8124;
  }
`;

const Right = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
  padding: 26px 25px;
  width: 100%;

  @media screen and (min-width: 576px) {
    width: auto;
  }
`;

const Arrival = styled.div``;

const Depart = styled.div`
  text-align: right;
`;

const Time = styled.div`
  line-height: 26px;
  font-size: 32px;
`;

const Aeroport = styled.div`
  font-weight: 600;
  line-height: 18px;
  font-size: 12px;
  white-space: nowrap;
`;

const Date = styled.div`
  line-height: 18px;
  font-size: 12px;

  color: #8b9497;
`;

const Stops = styled.div`
  display: none;
  max-width: 111px;
  width: 100%;
  margin: 0 10px;

  font-weight: 600;
  line-height: 12px;
  font-size: 10px;
  text-align: center;
  text-transform: uppercase;
  color: #8b9497;

  @media screen and (min-width: 576px) {
    display: block;
  }
`;

const Path = styled.div`
  display: flex;
  align-items: center;
`;

const Line = styled.div`
  flex-basis: 111px;
  flex-grow: 1;
  height: 1px;
  margin-right: 1px;
  background-color: #d2d5d6;
`;
const Icon = styled.img``;

const titles = ['Пересадка', 'Пересадки', 'Пересадок'];

export default function Ticket({ ticket }) {
  const stops = (stops) => {
    if (stops) {
      return (
        <Stops>
          {ticket.stops} <Plural count={ticket.stops} titles={titles} />
          <Path>
            <Line />
            <Icon src="../images/path-icon.svg" />
          </Path>
        </Stops>
      );
    }
    return (
      <Stops>
        Прямой
        <Path>
          <Line />
          <Icon src="../images/path-icon.svg" />
        </Path>
      </Stops>
    );
  };

  return (
    <TicketItem>
      <Left>
        <Logo src="../images/logo.png" alt="aviacompany logo" />
        <Button>
          Купить <br />
          за <Currency value={ticket.price} />
        </Button>
      </Left>
      <Right>
        <Arrival>
          <Time>{ticket.arrival_time}</Time>
          <Aeroport>
            {ticket.origin}, {ticket.origin_name}
          </Aeroport>
          <Date>{ticket.arrival_date}</Date>
        </Arrival>

        {stops(ticket.stops)}

        <Depart>
          <Time>{ticket.departure_time}</Time>
          <Aeroport>
            {ticket.destination}, {ticket.destination_name}
          </Aeroport>
          <Date>{ticket.departure_date}</Date>
        </Depart>
      </Right>
    </TicketItem>
  );
}
