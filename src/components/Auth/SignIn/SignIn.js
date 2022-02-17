import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';
import Button from '../../common/UI/Button/Button';
import {login} from '../../../redux/ducks/userDuck';
import styles from './SignIn.module.css';

const SignIn = ({onClose}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {t} = useTranslation()

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleLogin = (email,password) => {
        dispatch(login(email, password))
        navigate('/')
        onClose()
    }

    return (
        <div className={styles.form}>
            <input
                type='email'
                value={email}
                onChange={handleEmail}
                placeholder={t('auth.email')}
            />
            <input
                type='password'
                value={password}
                onChange={handlePassword}
                placeholder={t('auth.password')}
            />
            <Button cb={() => handleLogin(email,password)}>{t('header.login')}</Button>
        </div>
    )
}

export default SignIn;
