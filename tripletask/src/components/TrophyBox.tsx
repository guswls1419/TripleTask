import React from 'react';
import styled, { keyframes } from 'styled-components';

function TrophyBox () {
  return (
    <TrophyBoxWrap style={{ backgroundImage: `url(${require('../assets/triple2x.png')})` }}>
        2021년 12월 기준
    </TrophyBoxWrap>
  )
}

const Up = keyframes`
  0% {
        opacity: 0;
        transform: translate3d(0, 5%, 0);
     }
  25% {
         opacity: 0.25;
         transform: translateZ();
      }
  50% {
         opacity: 0.5;
         transform: translateZ();
      }
  75% {
         opacity: 0.75;
         transform: translateZ();
      }
  100% {
          opacity: 1;
          transform: translateZ();
       }
`;
const TrophyBoxWrap = styled.div`
  width: 400px;
  height: 340px;
  position: absolute;
  top: 150px;    
  background-repeat: no-repeat;
  background-size: 400px 338px;
  box-sizing: border-box;
  padding-top: 280px;
  font-size: 15px;
  font-family: sans-serif;
  color: rgba(58, 58, 58, 0.7);
  text-align: center;
  animation: ${ Up } 0.7s;
`
export default TrophyBox