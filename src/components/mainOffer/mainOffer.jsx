import React from 'react';
import styled from 'styled-components';

const Offer = ({ className }) => {
  return (
    <div className={className}>
    </div>
  )
}

const MainOffer = styled(Offer)`
  width: 320px;
  height: 480px;
  margin: 0 auto;
  background-color: purple;
`;

export default MainOffer;
