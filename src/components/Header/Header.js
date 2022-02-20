import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
//import Dropdown from '../common/UI/Dropdown/Dropdown';
import Continer from '../Continer/Continer';
import Navbar from '../Navbar/Navbar';
import Basket from '../Basket/Basket';
import Search from '../Search/Search';
import Auth from '../Auth/Auth';
//import {AUTH} from '../../helpers/constants';
import styles from './Header.module.css';

const Header = () => {
	const { t } = useTranslation();

	return (
		<>
			<header>
				<Continer>
					<div className={styles.content}>
						<NavLink to=''>
							<img
								className={styles.logo}
								src={require('../../assets/img/logo.png')}
								alt='sas'
							/>
						</NavLink>
						<Navbar />
						<Search />
						<Auth />
						{/*<Dropdown options={AUTH} icon='bx-user'/>*/}
						<div className={styles.item}>
							<i className='bx bx-heart'></i>
							<NavLink to='favorites'>{t('header.favorites')}</NavLink>
						</div>
						<Basket />
					</div>
				</Continer>
			</header>
		</>
	);
};

export default Header;
