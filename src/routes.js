import React, { lazy } from 'react';

import Cart from './pages/Cart/Cart';
const Home = lazy(() => import('./pages/Home/Home'));
const AlcoholDrinks = lazy(() => import('./pages/AlcoholDrinks/AlcoholDrinks'));
const Drinks = lazy(() => import('./pages/Drinks/Drinks'));
const Fruits = lazy(() => import('./pages/Fruits/Fruits'));
const Meats = lazy(() => import('./pages/Meats/Meats'));
const NotFound = lazy(() => import('./components/NotFound/NotFound'));
const CategorySingle = lazy(() =>
	import('./pages/Categories/CategorySingle/CategorySingle')
);
const Favorites = lazy(() => import('./pages/Favorites/Favorites'));
const Register = lazy(() => import('./pages/Auth/Register/Register'));

const routes = [
	{
		path: '',
		element: <Home />,
		key: 'home',
	},
	{
		path: 'alcohol-drinks',
		element: <AlcoholDrinks />,
		key: 'alcohol-drinks',
	},
	{
		path: 'drinks',
		element: <Drinks />,
		key: 'drinks',
	},
	{
		path: 'fruits',
		element: <Fruits />,
		key: 'fruits',
	},
	{
		path: 'meats',
		element: <Meats />,
		key: 'meats',
	},
	{
		path: 'register',
		element: <Register />,
		key: 'register',
	},
	{
		path: 'favorites',
		element: <Favorites />,
		key: 'favorites',
	},
	{
		path: 'category/:id',
		element: <CategorySingle />,
		key: 'categoryId',
	},
	{
		path: 'cart',
		element: <Cart />,
		key: 'cart',
	},
	{
		path: '*',
		element: <NotFound />,
		key: 'not-found',
	},
];

export default routes;
