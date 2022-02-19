import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getAuth } from 'firebase/auth';
import Modal from '../common/UI/Modal/Modal';
import { logout } from '../../redux/ducks/userDuck';
import { userSelector } from '../../helpers/reduxSelectors';
import styles from '../Header/Header.module.css';

const Auth = () => {
	const [isOpen, setIsOpen] = useState(false);
	const { t } = useTranslation();
	const { uid } = useSelector(userSelector);
	const auth = getAuth();
	const dispatch = useDispatch();

	return (
		<>
			{uid ? (
				<NavLink
					to='#'
					onClick={() => {
						dispatch(logout(auth));
					}}
				>
					<div className={styles.item}>
						<i className='bx bx-log-out'></i>
						{t('header.logout')}
					</div>
				</NavLink>
			) : (
				<div className={styles.item} onClick={() => setIsOpen(true)}>
					<i className='bx bx-user'></i>
					<span>{t('header.login')}</span>
				</div>
			)}
			<Modal open={isOpen} onClose={() => setIsOpen(false)} />
		</>
	);
};

export default Auth;
