import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { productsSelector } from '../../helpers/reduxSelectors';
import { setTypeProducts } from '../../redux/ducks/productsDuck';
import styles from './Search.module.css';


const Search = () => {
    const { t } = useTranslation()
    const { products } = useSelector(productsSelector);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const [ searchValue, setSearchValue ] = useState(location.search.slice(7, location.search.length));
    const [ constantsProducts, setConstantsProducts ] = useState({ products:[], isproducts:true})

    const changeSearchValue = (event) => {
        const { target:{value} } = event;
        setSearchValue(value);
        navigate(value ? `/?value=${value}` : '/?');
    };

    useEffect(() => {
        if(constantsProducts.isproducts){
            if(products.length) {
                setConstantsProducts({ products, isproducts:false });
            }
        }
    }, [products]);

    useEffect(() => {
        const { products } = constantsProducts;
        const value = location.search.slice(7, location.search.length);
        dispatch(setTypeProducts({value:value, products}));
    }, [searchValue, constantsProducts]);


    return (
        <div className={styles.search}>
            <div>
                <i className='bx bx-search-alt' />
                <input
                    type='text'
                    placeholder={ t('header.search')}
                    onChange={changeSearchValue}
                    value={searchValue}
                />
            </div>
        </div>
    )
}

export default Search;
