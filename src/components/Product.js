import React, { Component } from 'react';
import styled from 'styled-components';

const ProductWrapper = styled.div`
  background-color: #E1EDE6;
  padding: 25px;
  margin-right: 40px;
  margin-bottom: 20px;
`

const Button = styled.button`
display: block;
width: 310px;
height: 55px;
border: 1px solid #598D66;
color: #598D66;
margin-top: 20px;
`

const Img = styled.img`
margin-bottom: 20px;
`
const Author = styled.h1`
font-size: 18px;
color: #86928B;
margin-bottom: 10px;
`

const Name = styled.h1`
font-size: 30px;
color: #2C2D35;
margin-bottom: 10px;
`

const Material = styled.h2`
font-size: 18px;
color: #2C2D35;
margin-bottom: 30px;
`

export class Product extends Component {
  render() {
    return (
      <ProductWrapper>
        <Img src={'./img/' + this.props.item.img} alt={this.props.item.name} />
        <Author>{this.props.item.author}</Author>
        <Name>{this.props.item.name}</Name>
        <Material>{this.props.item.material}</Material>
        <b>{this.props.item.price}руб</b>
        <Button onClick={() => this.props.onAdd(this.props.item)}>В корзину</Button>
      </ProductWrapper>
    )
  }
}

export default Product