import React from 'react';
import styled from 'styled-components';
import { BiCart } from "react-icons/bi";

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Order from './components/Order';
import Footer from './components/Footer';
import Homepage from './components/Homepage';
import Products from './components/Products';
import Product from './components/Product';
import About from './components/About';
import Filter from './components/Filter';

const Wrapper = styled.div`
margin-left: 150px;
margin-right: 150px;
`

class App extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            products: [
                {
                    id: 1,
                    img: 'amur-hunt.jpg',
                    author: 'Марсель Руссо',
                    name: 'Охота Амура',
                    material: 'Холст, масло',
                    price: '14 500',
                    country: 'Франция'
                },
                {
                    id: 2,
                    img: 'lady-puppy.jpg',
                    author: 'Анри Селин',
                    name: 'Дама с собачкой',
                    material: 'Акрил, бумага',
                    price: '16 500',
                    country: 'Франция'
                },
                {
                    id: 3,
                    img: 'procedure.jpg',
                    author: 'Франсуа Дюпон',
                    name: 'Процедура',
                    material: 'Цветная литография',
                    price: '20 000',
                    country: 'Франция'
                },
                {
                    id: 4,
                    img: 'rose.jpg',
                    author: 'Луи Детуш',
                    name: 'Роза',
                    material: 'Бумага, акрил',
                    price: '12 000',
                    country: 'Франция'
                },
                {
                    id: 5,
                    img: 'above-city.jpg',
                    author: 'Курт Вернер',
                    name: 'Над городом',
                    material: 'Цветная литография',
                    price: '16 000',
                    country: 'Германия'
                },
                {
                    id: 6,
                    img: 'birdies.jpg',
                    author: 'Макс Рихтер',
                    name: 'Птенцы',
                    material: 'Холст, масло',
                    price: '14 500',
                    country: 'Германия'
                },
                {
                    id: 7,
                    img: 'among-leaves.jpg',
                    author: 'Мартин Майер',
                    name: 'Среди листьев',
                    material: 'Цветная литография',
                    price: '20 000',
                    country: 'Германия'
                },
                {
                    id: 8,
                    img: 'big-water.jpg',
                    author: 'Вальтер Хартманн',
                    name: 'Большие воды',
                    material: 'Бумага, акрил',
                    price: '23 000',
                    country: 'Германия'
                },
                {
                    id: 9,
                    img: 'wild-beast.jpg',
                    author: 'Пол Смит',
                    name: 'Дикий зверь',
                    material: 'Акварель, бумага',
                    price: '19 500',
                    country: 'Англия'
                },
                {
                    id: 10,
                    img: 'coast.jpg',
                    author: 'Джон Уайт',
                    name: 'Скалистый берег',
                    material: 'Цветная литография',
                    price: '17 500',
                    country: 'Англия'
                },
                {
                    id: 11,
                    img: 'white-parrot.jpg',
                    author: 'Юджин Зиллион',
                    name: 'Белый попугай',
                    material: 'Цветная литография',
                    price: '15 500',
                    country: 'Англия'
                },
                {
                    id: 12,
                    img: 'ginger-cate.jpg',
                    author: 'Альфред Барр',
                    name: 'Рыжий кот',
                    material: 'Цветная литография',
                    price: '21 000',
                    country: 'Англия'
                },

            ],
            currentProducts: [],
            orders: [],
        }

        this.filter = this.filter.bind(this)
        this.addToOrder = this.addToOrder.bind(this)
        this.deleteOrder = this.deleteOrder.bind(this);
    }

    

    render() {
       /* return (
        <div className='wrapper'>
            <Header orders={this.state.orders} onDelete={this.deleteOrder} />
            <Homepage/>
            <Products products={this.state.products} 
            currentProducts={this.state.currentProducts} 
            onFilter={this.filter} 
            onAdd={this.addToOrder}/>
            <About/>
            <Footer/>
            
        </div>
    )*/

        return(
            <BrowserRouter>
                <Header orders={this.state.orders} onDelete={this.deleteOrder} />
                <Routes>

                    <Route path='/cart' element={<Order/>} />
                    <Route path='/' element={<Homepage/>} />
                    <Route path='/two/*' element={<Products onFilter={this.filter} onAdd={this.addToOrder} products={this.state.products} currentProducts={this.state.currentProducts}/>}>
                        <Route path='filter' element={<Filter/>}/>
                    </Route>
                    
                    <Route path='/three' element={<About/>} />
                    
                </Routes>
                <Footer/>
            </BrowserRouter>
        )
    }

    filter(country) {
       if(country === 'Все') {
            this.setState({currentProducts: this.state.products})
        } else {
            this.setState({
            currentProducts: this.state.products.filter(el => el.country === country)
        })
        }
    }

    addToOrder(item) {
        let isInArray = false;
        this.state.orders.forEach(el => {
            if(el.id === item.id) {
                isInArray = true;
            }
        })
        if(!isInArray) {
            this.setState({orders: [...this.state.orders, item]})
        }
    }
    
    deleteOrder(id) {
        this.setState({orders: this.state.orders.filter(el => el.id !== id)})
    }
    
}

export default App;
