import {Routes, Route} from 'react-router-dom'
import Configs from "./components/Configs/Configs";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import Footer from "./components/Footer/Footer";
import routes from "./routes";
import './App.css';

function App() {

    return (
        <>
            <Configs/>
            <Header/>
            <Section/>
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
