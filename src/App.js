import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import Configs from './components/Configs/Configs';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Footer from './components/Footer/Footer';
import { setUser } from './redux/ducks/userDuck';
import routes from './routes';
import './App.css';

function App() {
    const location = useLocation()
    const dispatch = useDispatch()
    const auth = getAuth();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                const uid = user.uid;
                dispatch(setUser({
                    uid: uid,
                    email: user.email,
                    accessToken: user.accessToken
                }))
            } else {
                dispatch(setUser({
                    uid: '',
                    email: '',
                    accessToken: ''
                }))
            }
        });
    }, [auth, dispatch])

    return (
        <>
            <Configs/>
            <Header/>
            {
                location.pathname === '/' ? <Section/> : ''
            }
            <Routes>
                {
                    routes.map(item => <Route {...item} />)
                }
            </Routes>
            <Footer/>
        </>
    );
}

export default App;
