import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Button from '../../../components/common/UI/Button/Button';
import Continer from '../../../components/Continer/Continer';
import ProductItem from '../../../components/ProductItem/ProductItem';
import { fetchCurrentProduct } from '../../../redux/ducks/productsDuck';
import { productsSelector } from '../../../helpers/reduxSelectors';
import styles from './ProductSingle.module.css';

const ProductSingle = () => {
	const { currentProduct } = useSelector(productsSelector);
	const dispatch = useDispatch();
	const params = useParams();
	const navigate = useNavigate();
	const { t } = useTranslation();

	useEffect(() => {
		getCurrentProduct(params.id);
	}, []);

	const getCurrentProduct = (id) => {
		dispatch(fetchCurrentProduct(id));
	};

	const back = () => {
		navigate('..');
	};

	return (
		<div>
			<Continer>
				<div className={styles.container}>
					{currentProduct && <ProductItem props={currentProduct} />}

					<div className={styles.btnWrapper}>
						<Button cb={back}>
							<i className='bx bx-arrow-back'></i>
							<span>{t('back')}</span>
						</Button>
					</div>
				</div>
			</Continer>
		</div>
	);
};

export default ProductSingle;
