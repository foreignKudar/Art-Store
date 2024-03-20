import React from 'react';
import styled from 'styled-components';

const Foot = styled.footer`
height: 100px;
background-color: #E1EDE6;
display: flex;
justify-content: space-between;
align-items: center;
`

const LogoNumber = styled.div`
margin-left: 180px;
`

const SocialCopy = styled.div`
margin-right: 180px;
`

export default function Footer() {
  return (
    <Foot>
        <LogoNumber>
            <div className='logo'>
                Ink. House
            </div>
            <div className='number'>+ 7 (999) 543-54-54</div>
        </LogoNumber>
        <SocialCopy>
            <div className='social'>
                <div>Facebook</div>
                <div>Instagram</div>
                <div>Youtube</div>
            </div>
        </SocialCopy>
    </Foot>
  )
}
