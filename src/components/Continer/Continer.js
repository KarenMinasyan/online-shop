import styles from './Continer.module.css';

const Continer = ({ children }) => {
	return <div className={styles.continer}>{children}</div>;
};

export default Continer;
