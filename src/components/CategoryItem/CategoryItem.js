import styles from './CategoryItem.module.css';
import {useSelector} from "react-redux";
import {languageSelector} from "../../helpers/reduxSelectors";

const CategoryItem = ({props}) => {
    const {currentLanguage} = useSelector(languageSelector)

    return (
        <div className={styles.categoriesItem} key={props.id}>
            <img src={props.imgUrl} alt={props.name_en} width='100px'/>
            <p>{currentLanguage === 'hy' ? props.name_hy : props.name_en}</p>
        </div>
    )
}

export default CategoryItem;
