import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Button from '../common/UI/Button/Button';
import { addCart } from '../../redux/ducks/cartDuck';
import { languageSelector } from '../../helpers/reduxSelectors';
import styles from './ProductItem.module.css';

const ProductItem = ({ props }) => {
	const dispatch = useDispatch();
	const { currentLanguage } = useSelector(languageSelector);
	const { t } = useTranslation();

	const addToCart = (product) => {
		dispatch(addCart(product));
	};

	return (
		<div key={props.id} className={styles.container}>
			<img src={props.imgUrl} alt={props.name_en} />
			<div>
				<h2>{currentLanguage === 'hy' ? props.name_hy : props.name_en}</h2>
				<p className={styles.favorite}>
					<i className='bx bxs-heart'></i>
					<span>{t('favorite')}</span>
				</p>
				<p className={styles.description}>
					{currentLanguage === 'hy'
						? props.description_hy
						: props.description_en}
				</p>
				<p className={styles.price}>
					{props.price} {t('currency')}
				</p>
				<Button cb={() => addToCart(props)}>
					<i className='bx bxs-cart-add'></i>
					<span>{t('addToCart')}</span>
				</Button>
			</div>
		</div>
	);
};

export default ProductItem;
