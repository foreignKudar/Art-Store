import React, { Component } from 'react';
import styled from 'styled-components'

const FilterBlock = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
flex-wrap: wrap;
//margin-left: 150px;
//margin-right: 150px;
margin-bottom: 30px;
margin-top: 30px;
`

const Button = styled.button`
border-radius: 20px;
background-color: #D4E8D9;
color: #2C2D35;
margin-right: 32px;
width: 135px;
height: 43px;
`

export class Filter extends Component {
  render() {
    return (
      <FilterBlock>
        <h1>Репродукции</h1>
        <div>
            <Button onClick={() => this.props.onFilter('Все')}>Все</Button>
            <Button onClick={() => this.props.onFilter('Франция')}>Франция</Button>
            <Button onClick={() => this.props.onFilter('Германия')}>Германия</Button>
            <Button onClick={() => this.props.onFilter('Англия')}>Англия</Button>
        </div>
 
      </FilterBlock>
    )
  }
}

export default Filter