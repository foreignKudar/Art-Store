import React, { Component } from 'react';
import {FaTrash} from 'react-icons/fa';
import styled from 'styled-components';

const OrderBlock = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: space-around;
align-items: center;
width: 400px;
background-color: transparent;
top: 100px;
margin-bottom: 10px   ;
`

const Image = styled.img`
width: 100px;
height: 150px;
`

const OrderText = styled.div`
display: flex;
flex-direction: column;
`

export class Order extends Component {
  render() {
    return (
      <OrderBlock>
            <Image src={'./img/' + this.props.item.img} alt={this.props.item.name}/>
            <OrderText>
              <h2>{this.props.item.name}</h2>
              <p>{this.props.item.price}рублей</p>
            </OrderText>
            <FaTrash className='delete-icon' onClick={() => this.props.onDelete(this.props.item.id)} />
      </OrderBlock>
    )
  }
}

export default Order