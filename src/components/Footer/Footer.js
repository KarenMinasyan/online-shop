import { useTranslation } from 'react-i18next'
import styles from './Footer.module.css'

const Footer = () => {
    const {t} = useTranslation()

    return (
        <footer className={styles.footer}>
            <p> &copy; {t('footer.copyright', {dateNow: new Date().getFullYear()})}</p>
        </footer>
    )
}

export default Footer;
