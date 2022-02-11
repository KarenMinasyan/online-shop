import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchCategories} from "../../redux/ducks/categiriesDuck";
import {categoriesSelector} from "../../helpers/reduxSelectors";
import styles from './Categories.module.css';
import {NavLink} from 'react-router-dom';
import CategoryItem from "../../components/CategoryItem/CategoryItem";

const Categories = () => {
    const dispatch = useDispatch()
    const {categories} = useSelector(categoriesSelector)

    useEffect(() => {
        dispatch(fetchCategories())
    }, [])

    return (
        <div className={styles.categories}>
            {
                categories.map(item => (
                    <NavLink key={item.id} to={`category/${item.id}`}>
                        <CategoryItem props={item}/>
                    </NavLink>
                ))
            }
        </div>
    )
}

export default Categories;
