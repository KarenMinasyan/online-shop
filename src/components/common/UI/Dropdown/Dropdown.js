import { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { languageSelector } from '../../../../helpers/reduxSelectors';
import styles from './Dropdown.module.css';

const Dropdown = ({ options, icon }) => {
	const [isActive, setIsActive] = useState(false);
	const { currentLanguage } = useSelector(languageSelector);

	const handleChange = () => {
		setIsActive(!isActive);
	};

	return (
		<div className={styles.dropdown}>
			<div className={styles.dropdownBtn} onClick={handleChange}>
				<i className={`bx ${icon}`}></i>
				{isActive ? (
					<i className='bx bx-caret-up'></i>
				) : (
					<i className='bx bx-caret-down'></i>
				)}
			</div>
			{isActive && (
				<div className={styles.dropdownContent}>
					{options.map(({ key, to, name_hy, name_en }) => (
						<div key={key} className={styles.dropdownItem}>
							<NavLink to={to}>
								{currentLanguage === 'hy' ? name_hy : name_en}
							</NavLink>
						</div>
					))}
				</div>
			)}
		</div>
	);
};

export default Dropdown;
