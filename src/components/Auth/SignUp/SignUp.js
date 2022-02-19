import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { register } from '../../../redux/ducks/userDuck';
import Button from '../../common/UI/Button/Button';
import styles from './SignUp.module.css';

const SignUp = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const { t } = useTranslation();

	const handleEmail = (e) => {
		setEmail(e.target.value);
	};

	const handlePassword = (e) => {
		setPassword(e.target.value);
	};

	const handleRegister = (email, password) => {
		dispatch(register(email, password));
		navigate('/');
	};

	return (
		<div className={styles.container}>
			<div className={styles.wrapper}>
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
				<Button cb={() => handleRegister(email, password)}>
					{t('auth.register')}
				</Button>
			</div>
		</div>
	);
};

export default SignUp;
