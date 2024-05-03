import { createBrowserRouter } from 'react-router-dom';
import ColdRolls from '../page/coldRolls/ColdRolls';
import Home from '../page/home/Home';
import Layer from '../page/layer/Layer';
import FriedRolls from '../page/friedRolls/FriedRolls';
import BakedRolls from '../page/bakedRolls/BakedRolls';
import Tortillas from '../page/tortillas/Tortillas';
import Sets from '../page/sets/Sets';
import Pizzas from '../page/pizzas/Pizzas';
import Extras from '../page/extras/Extras';
import Beverages from '../page/beverages/Beverages';

export const PAGINATION = [
    {
        path: '/',
        element: <Layer />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/cold_rolls',
                element: <ColdRolls />
            },
            {
                path: '/fride_rolls',
                element: <FriedRolls />
            },
            {
                path: '/baked_rolls',
                element: <BakedRolls />
            },
            {
                path: '/tortillas_rolls',
                element: <Tortillas />
            },
            {
                path: '/sets',
                element: <Sets />
            },
            {
                path: '/pizzas',
                element: <Pizzas />
            },
            {
                path: '/extras',
                element: <Extras />
            },
            {
                path: '/beverages',
                element: <Beverages />
            },
        ]
    }
]

export const PAGINATION_DESCRIPT: { [index: string]: string } = {
        '/cold_rolls': 'Холодные роллы', 
        '/fride_rolls': 'Жаренные роллы',   
        '/baked_rolls': 'Печеные роллы',   
        '/tortillas_rolls': 'Тортильи',
        '/sets': 'Сеты',   
        '/pizzas': 'Пицца',   
        '/extras': 'Допы',   
        '/beverages': 'Напитки',
}

export const router = createBrowserRouter(PAGINATION);
