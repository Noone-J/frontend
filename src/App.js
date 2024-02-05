import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { AuthProvider } from './context/AuthContext'
import { DeckProvider } from './context/DeckContext'
import { FicheProvider } from './context/FicheContext'

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import FichePage from './pages/FichePage'
import PartiePage from './pages/PartiePage'
import Header from './components/Header'

import PrivateRoute from './utils/PrivateRoute'


function App() {
    return (
        <div className="App">
            <Router>
                <AuthProvider>
                <DeckProvider>
                <FicheProvider>
                
                    <Header/>
                    <Routes>
                        <Route path="/" element={
                            <PrivateRoute>
                                <HomePage/>
                            </PrivateRoute>}/>
                        <Route path="home" element={<HomePage/>}/>
                        <Route path="login" element={<LoginPage/>}/>
                        <Route path="fiche" element={<FichePage/>}/>
                        <Route path="Deck" element={<PartiePage/>}/>
                    </Routes>
                </FicheProvider>
                </DeckProvider>
                </AuthProvider>
            </Router>
        </div>
    );
}

export default App;