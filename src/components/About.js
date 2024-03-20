import React from 'react';
import styled from 'styled-components';

const AboutWrapper = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
margin-left: 150px;
margin-right: 150px;
padding-top: 130px;

align-items: center;
height: 440px;
`

const TextBlock = styled.div`
max-width: 635px;
`

const Title = styled.h1`
color: #2C2D35;
font-size: 40px;
margin-bottom: 20px;
text-align: center;
`

const Text = styled.p`
font-size: 18px;
line-height: 150%;
color: #2C2D35;
margin-bottom: 20px;
`

const LogoBlock = styled.div`
display: flex;
gap: 30px;
`

export default function About() {
  return (
    <AboutWrapper>
        <TextBlock>
          <Title>Наша команда</Title>
          <Text>Значимость этих проблем настолько очевидна, что базовый вектор развития позволяет оценить значение экспериментов, 
          поражающих по своей масштабности и грандиозности. Мы вынуждены отталкиваться от того, что консультация с широким активом.
          </Text>
        </TextBlock>
        <LogoBlock>
            <img src='./logo-img/ava-1.png' alt='avatar'/>
            <img src='./logo-img/ava-2.jpg' alt='avatar'/>
            <img src='./logo-img/ava-3.jpg' alt='avatar'/>
        </LogoBlock>
    </AboutWrapper>
  )
}
