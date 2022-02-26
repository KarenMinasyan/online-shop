import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Table from '../../components/common/UI/Table/Table';
import Button from '../../components/common/UI/Button/Button';
import Continer from '../../components/Continer/Continer';
import { cartSelector, userSelector } from '../../helpers/reduxSelectors';
import { deleteCart, confirm } from '../../redux/ducks/cartDuck';

const Cart = () => {
	const dispatch = useDispatch();
	const { cartItems } = useSelector(cartSelector);
	const { uid } = useSelector(userSelector);
	const { t } = useTranslation();

	useEffect(() => {
		localStorage.setItem('cartItems', JSON.stringify(cartItems));
	}, [cartItems]);

	const deleteFromCard = (cart) => {
		dispatch(deleteCart(cart));
	};

	const order = (uid, products) => {
		if (uid) {
			dispatch(confirm(uid, products));
		} else {
			console.log('please login');
		}
	};

	return (
		<div>
			<Continer>
				{cartItems.length ? (
					<div>
						<Table list={cartItems} cb={deleteFromCard} />
						<Button cb={() => order(uid, cartItems)}>
							<i className='bx bx-check'></i>
							{t('order')}
						</Button>
					</div>
				) : (
					<p style={{ textAlign: 'center' }}>Your shopping cart is empty</p>
				)}
			</Continer>
		</div>
	);
};

export default Cart;
