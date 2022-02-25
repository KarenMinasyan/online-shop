import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../components/common/UI/Card/Card';
import Continer from '../../components/Continer/Continer';
import { fetchProducts } from '../../redux/ducks/productsDuck';
import { cartSelector, productsSelector } from '../../helpers/reduxSelectors';
import styles from './Products.module.css';
import Pagination from '../../components/common/UI/Pagination/Paginaton';

const Products = () => {
	const dispatch = useDispatch();
	const { products } = useSelector(productsSelector);
	const { cartItems } = useSelector(cartSelector);
	const [currentPage, setCurrentPage] = useState(1);
	const [postsPerPage] = useState(8);

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = products.slice(indexOfFirstPost, indexOfLastPost);

	useEffect(() => {
		dispatch(fetchProducts());
	}, []);

	useEffect(() => {
		localStorage.setItem('cartItems', JSON.stringify(cartItems));
	}, [cartItems]);

	const paginate = (pageNumber) => setCurrentPage(pageNumber);

	return (
		<div className={styles.products}>
			<Continer>
				<div className={styles.content}>
					{currentPosts.map((item) => (
						<NavLink key={item.id} to={`product/${item.id}`}>
							<Card props={item} key={item.id} />
						</NavLink>
					))}
				</div>
				<Pagination
					postsPerPage={postsPerPage}
					totalPosts={products.length}
					currentPage={currentPage}
					paginate={paginate}
				/>
			</Continer>
		</div>
	);
};

export default Products;
