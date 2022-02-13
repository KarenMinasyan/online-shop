import { useTranslation } from 'react-i18next'
import styles from './Footer.module.css'
import Continer from '../Continer/Continer';
const Footer = () => {
    const {t} = useTranslation()

    return (
        <footer className={styles.footer}>
            {/* <Continer> */}
                <div className={styles.content}>
                    <p> &copy; {t('footer.copyright', {dateNow: new Date().getFullYear()})}</p>

                </div>
            {/* </Continer> */}
        </footer>
    )
}

export default Footer;
