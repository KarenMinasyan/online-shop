import React, { lazy } from 'react';
import Login from "./pages/Auth/Login/Login";
import Register from "./pages/Auth/Register/Register";
import Favorites from "./pages/Favorites/Favorites";
import CategorySingle from "./pages/Categories/CategorySingle/CategorySingle";

const Home = lazy(() => import('./pages/Home/Home'));
const AlcoholDrinks = lazy(() => import('./pages/AlcoholDrinks/AlcoholDrinks'));
const Drinks = lazy(() => import('./pages/Drinks/Drinks'));
const Fruits = lazy(() => import('./pages/Fruits/Fruits'));
const Meats = lazy(() => import('./pages/Meats/Meats'));
const NotFound = lazy(() => import('./components/NotFound/NotFound'));

const routes = [
    {
        path: '',
        element: <Home />,
        key: 'home',
    },
    {
        path: 'alcohol-drinks',
        element: <AlcoholDrinks />,
        key: 'alcohol-drinks'
    },
    {
        path: 'drinks',
        element: <Drinks />,
        key: 'drinks'
    },
    {
        path: 'fruits',
        element: <Fruits />,
        key: 'fruits'
    },
    {
        path: 'meats',
        element: <Meats />,
        key: 'meats'
    },
    {
        path: 'login',
        element: <Login />,
        key: 'login'
    },
    {
        path: 'register',
        element: <Register />,
        key: 'register'
    },
    {
        path: 'favorites',
        element: <Favorites />,
        key: 'favorites'
    },
    {
        path: 'category/:id',
        element: <CategorySingle />,
        key: 'categoryId'
    },
    {
        path: '*',
        element: <NotFound />,
        key: 'not-found'
    },
]

export default routes;
