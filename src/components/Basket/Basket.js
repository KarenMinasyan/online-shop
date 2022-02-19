import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { cartSelector } from '../../helpers/reduxSelectors';
import styles from './Basket.module.css';

const Basket = () => {
	const { cartItems } = useSelector(cartSelector);
	const { t } = useTranslation();

	return (
		<NavLink to='cart'>
			<div className={styles.item}>
				<span>{cartItems.length}</span>
				<i className='bx bx-cart'></i>
				{t('header.cart')}
			</div>
		</NavLink>
	);
};

export default Basket;
