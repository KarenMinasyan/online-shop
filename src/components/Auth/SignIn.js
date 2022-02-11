import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import {useState} from "react";
import {setUser} from "../../redux/ducks/userDuck";
import {useDispatch} from "react-redux";

const SignIn = () => {
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const dispatch = useDispatch()

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPass(e.target.value)
    }

    const handleLogin = (email, password) => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                dispatch(setUser({
                    uid: user.uid,
                    email: user.email,
                    accessToken: user.accessToken
                }))
            })
            .catch(error => console.log(error));
    }

    return (
        <>
            <input type="email" value={email} onChange={handleEmail}/>
            <input type="password" value={pass} onChange={handlePassword}/>
            <button onClick={() => handleLogin(email,pass)}> login </button>
        </>
    )
}

export default SignIn;
