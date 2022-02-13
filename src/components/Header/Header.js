import {NavLink} from "react-router-dom";
import Search from "../Search/Search";
import {ACCOUNT, AUTH} from "../../helpers/constants";
import Dropdown from "../common/UI/Dropdown/Dropdown";
import {useTranslation} from "react-i18next";
import styles from './Header.module.css';
import Continer from "../Continer/Continer";
import { Fragment } from "react";

const Header = () => {
    const {t} = useTranslation()

    return (
        <Fragment>
            <header>
                <Continer>
                    <div className={styles.content}>
                        <NavLink to=''>
                            <img
                                className={styles.logo}
                                src={require('../../assets/img/logo.png')}
                                alt="sas"
                            />
                        </NavLink>
                        <Search/>
                        <Dropdown options={AUTH} icon='bx-user'/>
                        {/*<Dropdown options={ACCOUNT} icon='bxs-user-detail'/>*/}
                        <div className={styles.favorites}>
                            <i className='bx bx-heart'></i>
                            <NavLink to='favorites'>{t('header.favorites')}</NavLink>
                        </div>
                    </div>
                </Continer>
            </header>
        </Fragment>
    )
}

export default Header;
