import { getDoc, doc } from 'firebase/firestore';
import fireDB from "../../../firebase";
import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {languageSelector} from "../../../helpers/reduxSelectors";


const CategorySingle = () => {
    const [category, setCategory] = useState()
    const params = useParams()
    const {currentLanguage} = useSelector(languageSelector)

    useEffect(() => {
        getCurrentCategory()
    }, [])

     const getCurrentCategory = async () => {
        const categoryCurrent = await getDoc(
            doc(fireDB, "categories", params.id)
        )

        setCategory(categoryCurrent.data())
    }

    return (
        <div>
            {category && (<h1>{currentLanguage === 'hy' ? category.name_hy : category.name_en}</h1>)}
        </div>
    )
}

export default CategorySingle;
