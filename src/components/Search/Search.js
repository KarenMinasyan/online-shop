import { useEffect, useState } from 'react';
import styles from './Search.module.css';
import {useTranslation} from "react-i18next";
import { useDispatch, useSelector } from 'react-redux';
import { productsSelector } from '../../helpers/reduxSelectors';
import { createAction } from '../../helpers/redux';
import { setTypeProducts } from '../../redux/ducks/productsDuck';

const Search = () => {
    const { t } = useTranslation()
    const [ searchValue, setSearchValue ] = useState('');
    const dispatch = useDispatch();
    const { products } = useSelector(productsSelector);
    
    const changeSearchValue = (event) => {
        const { target:{value} } = event;
        setSearchValue(value);
    };
    useEffect(() => {
        dispatch(setTypeProducts(searchValue))
    }, [searchValue]);

    return (
        <div className={styles.search}>
            <div>
                <i className='bx bx-search-alt' />
                <input 
                    type="text" 
                    placeholder={ t('header.search')}
                    onChange={changeSearchValue}
                    value={searchValue}
                />
            </div>
        </div>
    )
}

export default Search;
