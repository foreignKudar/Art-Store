import React, { Component } from 'react';
import styled from 'styled-components';
import Product from './Product';
import Filter from './Filter';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from '../App';

const ProductWrapper = styled.div`
display: flex;
flex-direction: column;
flex-wrap: wrap;
margin-left: 150px;
margin-right: 150px;
`

const ProductBlock = styled.div`
display: flex;
flex-wrap: wrap;
margin-top: 20px;
`


export class Products extends Component {
  render() {
    return (
      

      <ProductWrapper>

        <Filter products={this.props.products} onFilter={this.props.onFilter} />

        <ProductBlock>
          {
          this.props.currentProducts.map(el => (
            <Product key={el.id} item={el} onAdd={this.props.onAdd} />
          ))
          } 
        </ProductBlock>
        
      </ProductWrapper>
    )
  }

  /*render() {
    return (
      <ProductWrapper>
        <Routes>
          
            <Route path='/filter'  element={<Filter  products={this.props.products} onFilter={this.props.onFilter} />}/>
            <Route path='/product'  element={<ProductBlock>
          {
          this.props.currentProducts.map(el => (
            <Product key={el.id} item={el} onAdd={this.props.onAdd} />
          ))
          } 
        </ProductBlock>}/>
          
        </Routes>
      </ProductWrapper>
    )}*/
  

}

export default Products;