import styles from './NotFound.module.css';

const NotFound = () => {
	return (
		<div className={styles.flexContainer}>
			<div className={styles.textCenter}>
				<h1>
					<span>4</span>
					<span>0</span>
					<span>4</span>
				</h1>
				<h3 className={styles.fadeIn}>PAGE NOT FOUND</h3>
			</div>
		</div>
	);
};

export default NotFound;
