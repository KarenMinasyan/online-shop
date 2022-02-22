import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import Card from '../../../components/common/UI/Card/Card';
import Button from '../../../components/common/UI/Button/Button';
import Continer from '../../../components/Continer/Continer';
import CategoryItem from '../../../components/CategoryItem/CategoryItem';
import { fetchCurrentCategory } from '../../../redux/ducks/categiriesDuck';
import { fetchProductsById } from '../../../redux/ducks/productsDuck';
import {
	categoriesSelector,
	productsSelector,
} from '../../../helpers/reduxSelectors';
import styles from './CategorySingle.module.css';

const CategorySingle = () => {
	const { productsById } = useSelector(productsSelector);
	const { currentCategory } = useSelector(categoriesSelector);
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const params = useParams();
	const { t } = useTranslation();

	useEffect(() => {
		getCurrentCategory(params.id);
		getProductsById(params.id);
	}, [productsById, currentCategory]);

	const getCurrentCategory = (id) => {
		dispatch(fetchCurrentCategory(id));
	};

	const getProductsById = (id) => {
		dispatch(fetchProductsById(id));
	};

	const back = () => {
		navigate('..');
	};

	return (
		<div>
			<Continer>
				<div className={styles.topSide}>
					{currentCategory && <CategoryItem props={currentCategory} />}
					<div className={styles.topSideWrapper}>
						<Button cb={back}>
							<i className='bx bx-arrow-back'></i>
							<span>{t('back')}</span>
						</Button>
					</div>
				</div>

				<div className={styles.products}>
					{productsById &&
						productsById.map((item) => <Card props={item} key={item.id} />)}
				</div>
			</Continer>
		</div>
	);
};

export default CategorySingle;
