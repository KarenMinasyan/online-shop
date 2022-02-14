import { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from 'react-redux';
import { productsSelector } from '../../helpers/reduxSelectors';
import { setTypeProducts } from '../../redux/ducks/productsDuck';
import { useNavigate, useLocation } from "react-router-dom";
import styles from './Search.module.css';

let constantsProducts = { products:[], isproducts:true };

const Search = () => {
    const { t } = useTranslation()
    const [ searchValue, setSearchValue ] = useState('');
    const { products } = useSelector(productsSelector);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    
    const changeSearchValue = (event) => {
        const { target:{value} } = event;
        navigate(`/?${value}`);
        setSearchValue(value);
    };
    useEffect(() => {
        const value = location.search.slice(1, location.search.length);
        setSearchValue(value);
    }, [searchValue]);
    
    useEffect(() => {
        const { products } = constantsProducts;
        const value = location.search.slice(1, location.search.length);
        dispatch(setTypeProducts({value:value, products}));
    }, [searchValue]);

    useEffect(() => {
        if(constantsProducts.isproducts){
            if(products.length) {
                constantsProducts.products = products;
                constantsProducts.isproducts = false;
            }
        }
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
