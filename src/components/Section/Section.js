import {useState} from 'react';
import styles from './Section.module.css';
import Navbar from "../Navbar/Navbar";
import Slider from "../common/UI/Slider/Slider";
import {SLIDER} from "../../helpers/constants";

const Section = () => {
    const [isSidebarShow, setIsSidebarShow] = useState(false)

    return (
        <div className={styles.wrapper}>
            <Navbar
                isSidebarShow={isSidebarShow}
                setIsSidebarShow={setIsSidebarShow}
            />
            <div
                className={styles.main}
                style={{width: isSidebarShow ? '85%' : '90%'}}
            >
                <Slider options={SLIDER}/>
            </div>
        </div>
    )
}

export default Section;
