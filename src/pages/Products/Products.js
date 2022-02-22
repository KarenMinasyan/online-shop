import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/common/UI/Card/Card';
import Continer from '../../components/Continer/Continer';
import { fetchProducts } from '../../redux/ducks/productsDuck';
import { cartSelector, productsSelector } from '../../helpers/reduxSelectors';
import styles from './Products.module.css';

const Products = () => {
	const dispatch = useDispatch();
	const { products } = useSelector(productsSelector);
	const { cartItems } = useSelector(cartSelector);

	useEffect(() => {
		dispatch(fetchProducts());
	}, []);

	useEffect(() => {
		localStorage.setItem('cartItems', JSON.stringify(cartItems));
	}, [cartItems]);

	return (
		<div className={styles.products}>
			<Continer>
				<div className={styles.content}>
					{products.map((item) => (
						<NavLink key={item.id} to={`product/${item.id}`}>
							<Card props={item} key={item.id} />
						</NavLink>
					))}
				</div>
			</Continer>
		</div>
	);
};

export default Products;
