import styles from './Loading.module.css';

const Loading = () => {
	return (
		<div className={styles.loaderWrapper}>
			<svg>
				<circle cx='70' cy='70' r='50'></circle>
			</svg>
		</div>
	);
};

export default Loading;
