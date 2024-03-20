import { createSlice } from "@reduxjs/toolkit";

const initialState = [
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
];
