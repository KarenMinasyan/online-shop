import {useDispatch, useSelector} from "react-redux";
import {languageSelector, productsSelector} from "../../helpers/reduxSelectors";
import {useEffect, useState} from "react";
import {fetchProducts} from "../../redux/ducks/productsDuck";
import styles from './Products.module.css';
import Button from "../../components/common/UI/Button/Button";
import { cartSelector, languageSelector, productsSelector } from "../../helpers/reduxSelectors";
import { fetchProducts } from "../../redux/ducks/productsDuck";
import { addCart } from '../../redux/ducks/cartDuck';
import styles from './Products.module.css';

const Products = () => {
    const dispatch = useDispatch()
    const { products } = useSelector(productsSelector)
    const { currentLanguage } = useSelector(languageSelector)
    const { cartItems } = useSelector(cartSelector)
    const {t} = useTranslation()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems))
    }, [cartItems])

    const addToCart = (product) => {
        dispatch(addCart(product))
    }

    return (
        <>
            <div className={styles.products}>
                {
                    products.map(item => (
                        <div className={styles.product} key={item.id}>
                            <div className={styles.productHeart}>
                                <i className='bx bxs-heart'></i>
                            </div>
                            <div className={styles.productImage}>
                                <img className={styles.image} src={item.imgUrl} alt={item.name_en}/>
                            </div>
                            <div className={styles.productText}>
                                <p>{currentLanguage === 'hy' ? item.name_hy : item.name_en}</p>
                            </div>
                            <div className={styles.productPrice}>
                                <p>{item.price} {t('currency')}</p>
                            </div>

                            <Button cb={() => addToCart(item)}>
                                <i className='bx bxs-cart-add'></i>
                                <span>Add to cart</span>
                            </Button>
                        </div>
                    ))
                }
            </div>
        </>
    )
}

export default Products;
