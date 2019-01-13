import React from 'react';
import styled, { keyframes } from 'styled-components';

const animation = keyframes`
  0% {
    transform: translateX(0) translateZ(0);
  }

  to {
    transform: translateX(-56px) translateZ(0);
  }
`;

const Wrapper = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 4px;

  border-radius: 2px;
`;

const Loader = styled.div`
  position: absolute;
  top: 0;

  width: 120%;
  height: 4px;

  background-color: #2196f3;
  background-image: repeating-linear-gradient(
    135deg,
    #90caf9,
    #90caf9 20px,
    #2196f3 0,
    #2196f3 40px
  );

  will-change: transform;
  backface-visibility: hidden;
  animation: ${animation} 0.5s infinite linear;
  opacity: 1;
  transition: opacity 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
`;

export default function() {
  return (
    <Wrapper>
      <Loader>Loading...</Loader>
    </Wrapper>
  );
}
