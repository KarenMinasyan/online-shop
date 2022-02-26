import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const links = [
	{
		to: '',
		title: 'Home',
	},
	{
		to: 'orders',
		title: 'Orders',
	},
	{
		to: 'alcohol-drinks',
		title: 'Alcohol Drinks',
	},
	{
		to: 'drinks',
		title: 'Drinks',
	},
	{
		to: 'fruits',
		title: 'Fruits',
	},
	{
		to: 'meats',
		title: 'Meats',
	},
];

const Navbar = () => {
	const [isSidebarShow, setIsSidebarShow] = useState(false);
	const { t } = useTranslation();

	const handleSidebarChange = () => {
		setIsSidebarShow(!isSidebarShow);
	};

	return (
		// <nav className={styles.sidebar} style={{ width: isSidebarShow ? '15%' : '10%' }}>
		<nav className={styles.sidebar}>
			<button onClick={handleSidebarChange}>
				<i className={`bx bx-${isSidebarShow ? 'x' : 'menu-alt-left'}`}></i>
			</button>

			<p className={styles.menuText}>{t('header.menu')}</p>

			<ul className={isSidebarShow ? styles.show : ''}>
				{links.map(({ to, title }) => (
					<li key={title}>
						<NavLink key={title} to={to}>
							{title}
						</NavLink>
					</li>
				))}
			</ul>
		</nav>
	);
};

export default Navbar;
