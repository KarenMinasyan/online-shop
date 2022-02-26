import { useDispatch, useSelector } from 'react-redux';
import {
	languageSelector,
	orderSelector,
	userSelector,
} from '../../helpers/reduxSelectors';
import { fetchOrders } from '../../redux/ducks/orderDuck';
import { useEffect } from 'react';
import Continer from '../../components/Continer/Continer';
import styles from './Orders.module.css';
import { useTranslation } from 'react-i18next';

const Orders = () => {
	const { uid } = useSelector(userSelector);
	const dispatch = useDispatch();
	const { orders } = useSelector(orderSelector);
	const { t } = useTranslation();
	const { currentLanguage } = useSelector(languageSelector);

	useEffect(() => {
		getCurrentUserOrders(uid);
	}, []);

	const getCurrentUserOrders = (userId) => {
		dispatch(fetchOrders(userId));
	};
	return (
		<Continer>
			<div className={styles.orders}>
				{orders.map((item, index) => (
					<div className={styles.container} key={index}>
						<img src={item.imgUrl} alt={item.name} />
						<p>{currentLanguage === 'hy' ? item.name_hy : item.name_en}</p>
						<p>
							{item.price} {t('currency')}
						</p>
					</div>
				))}
			</div>
		</Continer>
	);
};

export default Orders;
