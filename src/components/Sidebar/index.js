import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import CurrencyFilter from '../CurrencyFilter';
import Filter from '../Filter';

const Title = styled.h2`
  margin: 0 0 11px 0;
  text-transform: uppercase;
  font-weight: 600;
  line-height: 19px;
  font-size: 12px;
  letter-spacing: 0.5px;
`;

const Sidebar = styled.div`
  position: absolute;
  left: 0;
  top: 0;

  padding: 15px;
  max-width: 228px;
  width: 100%;

  border-radius: 5px;
  box-shadow: 0px 1px 4px 0px rgba(91, 137, 164, 0.25);
  background-color: #fff;

  transition: transform 0.4s;
  transform: ${({ isShow }) => (isShow ? 'none' : 'translate(-100%, 0)')};

  @media screen and (min-width: 992px) {
    position: relative;
    max-width: none;
    width: auto;
    transform: none;
    transition: none;
  }
`;

const SidebarComponent = ({ isShow }) => {
  return (
    <Sidebar isShow={isShow}>
      <Title>Валюта</Title>
      <CurrencyFilter />
      <Title>Количество пересадок</Title>
      <Filter />
    </Sidebar>
  );
};

export default connect((state) => ({ isShow: state.toggle }))(SidebarComponent);
