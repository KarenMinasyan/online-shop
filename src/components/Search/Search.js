import styles from './Search.module.css';
import {useTranslation} from "react-i18next";

const Search = () => {
    const {t} = useTranslation()

    return (
        <div className={styles.search}>
            <div>
                <i className='bx bx-search-alt'></i>
                <input type="text" placeholder={ t('header.search')} />
            </div>
        </div>
    )
}

export default Search;
