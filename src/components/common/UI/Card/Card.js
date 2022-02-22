import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Button from '../Button/Button';
import { addCart } from '../../../../redux/ducks/cartDuck';
import { languageSelector } from '../../../../helpers/reduxSelectors';
import styles from './Card.module.css';

const Card = ({ props }) => {
	const dispatch = useDispatch();
	const { currentLanguage } = useSelector(languageSelector);
	const { t } = useTranslation();

	const addToCart = (product) => {
		dispatch(addCart(product));
	};

	return (
		<div className={styles.card} key={props.id}>
			<div className={styles.cardHeart}>
				<i className='bx bxs-heart'></i>
			</div>
			<div className={styles.cardImage}>
				<img className={styles.image} src={props.imgUrl} alt={props.name_en} />
			</div>
			<div className={styles.cardText}>
				<p>{currentLanguage === 'hy' ? props.name_hy : props.name_en}</p>
			</div>
			<div className={styles.cardPrice}>
				<p>
					{props.price} {t('currency')}
				</p>
			</div>

			<Button cb={() => addToCart(props)}>
				<i className='bx bxs-cart-add'></i>
				<span>{t('addToCart')}</span>
			</Button>
		</div>
	);
};

export default Card;
