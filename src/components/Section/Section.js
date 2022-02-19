import styles from './Section.module.css';
import Slider from '../common/UI/Slider/Slider';
import { SLIDER } from '../../helpers/constants';
import Continer from '../Continer/Continer';

const Section = () => {
	return (
		<div className={styles.wrapper}>
			<Continer>
				<Slider options={SLIDER} />
			</Continer>
		</div>
	);
};

export default Section;
