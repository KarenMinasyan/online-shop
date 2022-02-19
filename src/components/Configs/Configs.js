import Continer from '../Continer/Continer';
import Lang from '../Lang/Lang';
import styles from './Configs.module.css';

const Configs = () => {
	return (
		<div className={styles.container}>
			<Continer>
				<div className={styles.content}>
					<Lang />
				</div>
			</Continer>
		</div>
	);
};

export default Configs;
