import 'bootstrap/dist/css/bootstrap.min.css';
// import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { AuthProvider } from './context/AuthContext'
import { DeckProvider } from './context/DeckContext'
import { CardProvider } from './context/CardContext'
import { NavbarProvider } from './context/NavbarContext';
import { CarouselProvider } from './context/CarouselContext';
import { TablePartyProvider } from './context/context2/TablePartyContext';
import { TableParty2Provider } from './context/context2/TableParty2Context';

import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import CardPage from './pages/CardPage'
import DeckPage from './pages/DeckPage'
import TablePartyPage from './pages/Page2/TablePartyPage'
import TicTacToePage from './pages/PageGame/TicTacToePage'
// import Bataille from './pages/PageGame/Bataille';

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
                <CardProvider>
                <CarouselProvider>
                <TablePartyProvider>
                <TableParty2Provider>
                    <Header/>
                    <ScrollToTop />
                    <Routes>
                        <Route path="/" element={<Layout><HomePage/></Layout>}/>
                        <Route path="home" element={<Layout><HomePage/></Layout>}/>
                        <Route path="login" element={<Layout><LoginPage/></Layout>}/>
                        <Route path="Card" element={<Layout><CardPage/></Layout>}/>
                        <Route path="Deck" element={<Layout><DeckPage/></Layout>}/>
                        <Route path="/TableParty/:gameId" element={<Layout><TablePartyPage/></Layout>}/>
                        <Route path="/TicTacToe" element={<Layout><TicTacToePage /></Layout>} />
                        {/* <Route path="/bataille/:gameId" element={<Bataille />} /> */}
                   </Routes>
                </TableParty2Provider>
                </TablePartyProvider>
                </CarouselProvider>
                </CardProvider>
                </DeckProvider>
                </AuthProvider>
                </NavbarProvider>
            </Router>
        </div>
    );
}

export default App;