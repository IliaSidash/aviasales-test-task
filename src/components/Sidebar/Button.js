import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';

import { toggleSidebar } from '../../ac';

const Button = styled.button`
  display: block;
  margin: 0 auto 20px;
  padding: 17px 24px;

  border: none;
  background-color: #23a9f6;
  border-radius: 10px;

  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }

  @media screen and (min-width: 992px) {
    display: none;
  }
`;

const Image = styled.img``;

const ToggleButton = ({ toggleSidebar }) => {
  return (
    <Button onClick={toggleSidebar}>
      <Image src="../images/filter-icon.png" alt="open filter" />
    </Button>
  );
};

export default connect(
  null,
  { toggleSidebar }
)(ToggleButton);
