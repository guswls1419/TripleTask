import React from 'react';
import styled, {keyframes} from 'styled-components';

function NumberCount() {
  return (
    <NumberCountWrap>
        <Contents>
            <strong>700만 명</strong>
            의 여행자
        </Contents>
        <Contents>
            <strong>100만 개</strong>
            의 여행 리뷰
        </Contents>
        <Contents>
            <strong>470만 개</strong>
            의 여행 일정
        </Contents>
    </NumberCountWrap>
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
const NumberCountWrap = styled.div`
    margin-left: 621px;
    padding-top: 150px;
    animation: ${Up} 0.7s;
    animation-delay : 0.1s;
`
const Contents = styled.div`
    margin-bottom: 9px;
    font-size: 36px;
    font-family: sans-serif;
    letter-spacing: -1px;
    color: rgb(58, 58, 58);
`
export default NumberCount