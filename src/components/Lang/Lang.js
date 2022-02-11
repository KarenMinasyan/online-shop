import { changeLanguage } from 'i18next';
import { useDispatch, useSelector } from 'react-redux';
import { languageSelector } from '../../helpers/reduxSelectors';
import { setLanguage } from '../../redux/ducks/appDuck';
import { LANGUAGES } from '../../helpers/constants';
import styles from './Lang.module.css';

const Lang = () => {
    const dispatch = useDispatch()
    const { currentLanguage } = useSelector(languageSelector)

    const handleLanguageChange = e => {
        changeLanguage(e)
        dispatch(setLanguage(e))
    }

    return (
            <div className={ styles.lang }>
                {
                    currentLanguage === 'hy'
                        ? <p onClick={ () => handleLanguageChange(LANGUAGES[0].code)}>{LANGUAGES[0].name }</p>
                        : <p onClick={ () => handleLanguageChange(LANGUAGES[1].code)}>{LANGUAGES[1].name }</p>
                }
            </div>
    )
}

export default Lang;
