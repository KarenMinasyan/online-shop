import { useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import SignIn from '../../../Auth/SignIn/SignIn';
import styles from './Modal.module.css'

const Modal = ({ open, onClose }) => {
    const {t} = useTranslation()

    const keyPress = useCallback((e) => {
        if(e.key === 'Escape' && open) {
            onClose()
        }
    }, [open, onClose])

    useEffect(() => {
        document.addEventListener('keydown', keyPress)
        return () => document.removeEventListener('keydown', keyPress)
    }, [keyPress])

    return ReactDOM.createPortal(
            <>
                {
                    open ? (
                        <div>
                            <div className={styles.overlay}></div>
                            <div className={styles.modal}>
                                <button
                                    className={styles.close}
                                     onClick={onClose}
                                ><i className='bx bx-x'></i></button>
                                <h2>{t('header.login')}</h2>
                                <SignIn onClose={onClose} />
                                <NavLink
                                    className={styles.link}
                                    to='register'
                                    onClick={onClose}
                                >{t('auth.register')}</NavLink>
                            </div>
                        </div>
                    ) : null
                }
            </>,
        document.getElementById('portal')
    )
}

export default Modal;
