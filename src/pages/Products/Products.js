import {useDispatch, useSelector} from "react-redux";
import {languageSelector, productsSelector} from "../../helpers/reduxSelectors";
import {useEffect} from "react";
import {fetchProducts} from "../../redux/ducks/productsDuck";
import styles from './Products.module.css';
import Button from "../../components/common/UI/Button/Button";
import {useTranslation} from "react-i18next";


const Products = () => {
    const dispatch = useDispatch()
    const {products} = useSelector(productsSelector)
    const {currentLanguage} = useSelector(languageSelector)
    const {t} = useTranslation()

    useEffect(() => {
        dispatch(fetchProducts())
    }, [])

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

                            <Button cb={() => console.log('add to card')}>
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
