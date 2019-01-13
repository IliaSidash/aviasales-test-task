import React from 'react';
import styled from 'styled-components';

const Logo = styled.div`
  text-align: center;
`;

export default () => {
  return (
    <Logo>
      <img src="./images/aviasales-logo.png" alt="logo" />
    </Logo>
  );
};
