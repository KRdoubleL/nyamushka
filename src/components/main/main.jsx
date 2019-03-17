import React from 'react';
import styled from 'styled-components';
import MainOffer from '../mainOffer/mainOffer.jsx';

const MainContent = ({ className }) => {
  return (
    <div className={className}>
      <h1>Ты сегодня покормил кота?</h1>
      <div className='container'>
        <MainOffer className='first'/>
        <MainOffer className='second'/>
        <MainOffer className='third'/>
      </div>
    </div>
  )
}

const Main = styled(MainContent)`
  background-color: yellow;

    .container {
      display: flex;
      justify-content: space-around;
      margin: 0 auto;
      background-color: green;
    }

    .first {

    }

    .second {


    }

    .third {

    }
`;

export default Main;
