import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { AuthProvider } from './context/AuthContext'
import { DeckProvider } from './context/DeckContext'
import { FicheProvider } from './context/FicheContext'
import { NavbarProvider } from './context/NavbarContext';
import { CarouselProvider } from './context/CarouselContext';

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import FichePage from './pages/FichePage'
import DeckPage from './pages/DeckPage'
import Header from './components/Header'
import ScrollToTop from './components/ScrollToTop';
import Layout from './components/Layout';


// import PrivateRoute from './utils/PrivateRoute'

import "./App.css";


function App() {
    return (
        <div className="App">
            <Router>
                <NavbarProvider>
                <AuthProvider>
                <DeckProvider>
                <FicheProvider>
                <CarouselProvider>
                    <Header/>
                    <ScrollToTop />
                    <Routes>
                        <Route path="/" element={<Layout><HomePage/></Layout>}/>
                        <Route path="home" element={<Layout><HomePage/></Layout>}/>
                        <Route path="login" element={<Layout><LoginPage/></Layout>}/>
                        <Route path="fiche" element={<Layout><FichePage/></Layout>}/>
                        <Route path="Deck" element={<Layout><DeckPage/></Layout>}/>
                    </Routes>
                </CarouselProvider>
                </FicheProvider>
                </DeckProvider>
                </AuthProvider>
                </NavbarProvider>
            </Router>
        </div>
    );
}

export default App;