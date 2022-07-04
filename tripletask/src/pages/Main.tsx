import React from 'react';
import styled from 'styled-components';
import TrophyBox from '../components/TrophyBox';
import NumberCount from '../components/NumberCount';
import Achievement from '../components/Achievement';

function Main () {
  return (
    <Wrap>
      <ContentsWrap>
        <TrophyBox/>
        <NumberCount/>
        <Achievement/>
      </ContentsWrap>
    </Wrap>
  )
}

const Wrap = styled.div`
  width: 100%;
  min-width: 1200px;
`
const ContentsWrap = styled.div`
  width: 1040px;
  margin: 0 auto;
`

export default Main