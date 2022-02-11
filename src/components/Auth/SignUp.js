import {useDispatch} from "react-redux";
import {useNavigate} from 'react-router-dom'
import {getAuth, createUserWithEmailAndPassword} from "firebase/auth";
import {useState} from "react";
import {setUser} from "../../redux/ducks/userDuck";

const SignUp = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPass(e.target.value)
    }

    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch(setUser({
                    uid: user.uid,
                    email: user.email,
                    accessToken: user.accessToken
                }))
                navigate("/", { replace: true });
            })
            .catch((error) => console.log(error));
    }

    return (
        <>
            <input type="email" value={email} placeholder='email' onChange={handleEmail}/>
            <input type="password" value={pass} placeholder='password' onChange={handlePassword}/>
            <button onClick={() => handleRegister(email,pass)}> register </button>
        </>
    )
}

export default SignUp;
