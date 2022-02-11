import styles from './Slider.module.css';
import {useState} from "react";

const Slider = ({options}) => {
    const [slider, setSlider] = useState(0)

    const goLeft = () => {
        if(slider === 0) {
            setSlider(-100 * (options.length - 1))
        } else {
            setSlider(slider + 100)
        }
    }

    const goRight = () => {
        if(slider === -100 * (options.length - 1)) {
            setSlider(0)
        } else {
            setSlider(slider - 100)
        }
    }

    return (
        <div className={styles.slider}>
            {options.map((item) => (
                <div
                    key={item.name}
                    className={styles.slide}
                    style={{transform: `translateX(${slider}% )`}}
                >
                    <img
                        src={item.imgUrl}
                        alt={item.name}
                    />
                </div>
            ))}

            <button
                className={styles.goLeft}
                onClick={goLeft}
            >
                <i className='bx bx-chevron-left'></i>
            </button>

            <button
                className={styles.goRight}
                onClick={goRight}
            >
                <i className='bx bx-chevron-right'></i>
            </button>
        </div>
    )
}

export default Slider;
