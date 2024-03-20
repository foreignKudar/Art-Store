import React, { useState } from 'react';
import styled from 'styled-components';
import { BiCart } from "react-icons/bi";
import Order from './Order';

import { Link } from 'react-router-dom';

const Head = styled.header`
height: 100px;
background-color: #E1EDE6;
display: flex;
justify-content: space-between;
align-items: center;
`
const Logo = styled.div`
font-size: 20px;
font-weight: 700;
color: #598D66;
margin-left: 180px;
`

const HeadList = styled.ul`
list-style: none;
display: flex;
margin-right: 180px;
`
const HeadListItems = styled.li`
margin-right: 60px;
`

const CartWindow = styled.div`
position: absolute;
display: flex;
flex-direction: column;
top: 100px;
right: 7%;
overflow-y: scroll;
overflow-x: hidden;

width: 418px;
height: 300px;
background-color: lightgray;
`



const showOrders = (props) => {
  let summa = 0;
  props.orders.forEach(el => summa += Number.parseFloat(el.price));
  
  return (<div>
    {props.orders.map(el => (
      <Order onDelete={props.onDelete} key={el.id} item={el} />
    ))}
    <p className='summa'>Сумма: {summa}руб.</p>
  </div>)
}

const showNothing = () => {
  return (<Empty>
    <h2>Товаров нет</h2>
  </Empty>)
}

const Empty = styled.div`
width: 200px;
background-color: transparent;
margin: auto auto;
text-align: center;
`


export default function Header (props) {

  

    let [open, setOpen] = useState(false);

    return (
        <Head>
            <Logo>
                Ink. House
            </Logo>
            <div className='navig'>
                <HeadList>
                    <Link to='/'><HeadListItems>Главная</HeadListItems></Link>
                    <Link to='/two'><HeadListItems>Репродукции</HeadListItems></Link>
                    <Link to='/three'><HeadListItems>О нас</HeadListItems></Link>
                    <button onClick={() => setOpen(open = !open)}><BiCart/></button>
                    {open && (<CartWindow>
                        {props.orders.length > 0 ? showOrders(props) : showNothing() }
                        </CartWindow>)}
                </HeadList>
                
            </div>
            
        </Head>
    )
}