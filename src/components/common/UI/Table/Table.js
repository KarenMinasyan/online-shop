import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Table.module.css';

const Table = ({ list, cb }) => {
	const { t } = useTranslation();
	const totalPrice = useMemo(
		() => list.reduce((acc, item) => acc + item.price, 0),
		[list]
	);

	return (
		<>
			{
				<table className={styles.table}>
					<tbody>
						{list.map((item) => (
							<tr key={item.id}>
								<td className={styles.imgContainer}>
									<img src={item.imgUrl} alt={item.name_en} />
								</td>
								<td>{item.name_en}</td>
								<td>
									{item.price} {t('currency')}
								</td>
								<td>
									<i onClick={() => cb(item)} className='bx bxs-trash-alt'></i>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			}

			<p>
				{t('cart.total')}: {totalPrice} {t('currency')}
			</p>
		</>
	);
};

export default Table;
