import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Continer from '../../components/Continer/Continer'
import CategoryItem from '../../components/CategoryItem/CategoryItem';
import { fetchCategories } from '../../redux/ducks/categiriesDuck';
import { categoriesSelector } from '../../helpers/reduxSelectors';
import styles from './Categories.module.css';

const Categories = () => {
    const dispatch = useDispatch()
    const {categories} = useSelector(categoriesSelector)

    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

    return (
        <div className={styles.categories}>
            <Continer>
                <div className={styles.content}>
                    {
                        categories.map(item => (
                            <NavLink key={item.id} to={`category/${item.id}`}>
                                <CategoryItem props={item}/>
                            </NavLink>
                        ))
                    }
                </div>
            </Continer>
        </div>
    )
}

export default Categories;
