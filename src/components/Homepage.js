import React from 'react';
import styled from 'styled-components';

const HomepageStyle = styled.div`
display: flex;
align-items: center;
margin-left: 150px;
margin-right: 150px;
`
const TextTitle = styled.h1`
color: #2C2D35;
font-size: 60px;
font-weight: 400;
line-height: 110%;
margin-bottom: 20px;
`

const MainText = styled.p`
color: #86928B;
font-size: 18px;
`

export default function Homepage() {
  return (
    <HomepageStyle>
      <img src='./logo-img/logo-img.png' alt='Лого'/>
      <div className='homepage-text'>
        <TextTitle>Реплики картин<br></br> от Ink. House</TextTitle>
        <MainText>Высокое качество отрисовки на плотной бумаге или льняном<br></br> холсте. Редкие произведения, доступные цены.</MainText>
      </div>
      
    </HomepageStyle>
  )
}
