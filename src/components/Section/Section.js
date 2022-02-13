import {useState} from 'react';
import styles from './Section.module.css';
import Navbar from "../Navbar/Navbar";
import Slider from "../common/UI/Slider/Slider";
import {SLIDER} from "../../helpers/constants";
import Continer from '../Continer/Continer';

const Section = () => {
    const [isSidebarShow, setIsSidebarShow] = useState(false)

    return (
        <div className={styles.wrapper}>
            <Continer>
                <div className={styles.content}>
                    <Navbar
                        isSidebarShow={isSidebarShow}
                        setIsSidebarShow={setIsSidebarShow}
                    />
                    <div
                        className={styles.main}
                        // style={{width: isSidebarShow ? '85%' : '90%'}}
                    >
                        <Slider options={SLIDER}/>
                    </div>
                </div>
            </Continer>
        </div>
    )
}

export default Section;
