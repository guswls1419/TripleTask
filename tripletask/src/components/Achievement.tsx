import React from 'react';
import styled, {keyframes} from 'styled-components';

function Achievement() {
  return (
    <AchievementWrap>
        <GoogleContents style={{ backgroundImage: `url(${require('../assets/playStore2x.png')})` }}>
            2018 구글 플레이스토어
            <br/>
            올해의 앱 최우수상 수상
        </GoogleContents>
        <AppleContents style={{ backgroundImage: `url(${require('../assets/badgeApple4x.png')})` }}>
            2018 애플 앱스토어
            <br/>
            오늘의 여행앱 선정 
        </AppleContents>
    </AchievementWrap>
  )
}
const Up = keyframes`
  0% {
            opacity: 0;
            transform: translate3d(0, 30%, 0);
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
const AchievementWrap = styled.div`
    width: 100%;
    height: 54px;
    margin: 47px 0px 0px 621px;
    display: flex;
    animation: ${Up} 0.7s;
    animation-delay : 0.2s;
`
const GoogleContents = styled.div`
    padding : 5px 0px 5px 62px;
    margin-right : 37px;
    background-size: 54px 54px;
    background-repeat: no-repeat;
    font-size: 14px;
    font-family: sans-serif;
    font-weight: bold;
    color: rgba(58, 58, 58, 0.8);
    
`
const AppleContents = styled.div`
    padding : 5px 0px 5px 62px;
    background-size: 54px 54px;
    background-repeat: no-repeat;
    font-size: 14px;
    font-family: sans-serif;
    font-weight: bold;
    color: rgba(58, 58, 58, 0.8);
`

export default Achievement