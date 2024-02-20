import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import axios from 'axios';

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) => {

    let [user, setUser] = useState(null)
    let [authTokens, setAuthTokens] = useState(null)
    let [authId, setAuthId] = useState(null)

    const navigate = useNavigate()

    let loginUser = async (e) => {
        e.preventDefault()
        try {
            const response = await fetch('/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({username: e.target.username.value, password: e.target.password.value })
            });
    
            if (!response.ok) {
                throw new Error('password');
            }
    
            let data = await response.json();
    
            if (data && data.token) {
                localStorage.setItem('authTokens', data.token);
                console.log(data.token,data.joueur_id)
                setUser(e.target.username.value);
                setAuthTokens(data.token);
                setAuthId(data.joueur_id); // Utilisez le champ correct pour l'ID du joueur
                navigate('/');
            } else {
                throw new Error('Identifiants incorrects');
            }
        } catch (error) {
            console.error(error);
            alert('Erreur lors de la connexion : ' + error.message);
        }
    };

    let logoutUser = (e) => {
        e.preventDefault()
        localStorage.removeItem('token')
        setAuthTokens(null)
        setUser(null)
        setAuthId(null)
        navigate('/login')
    }

    let contextData = {
        user: user,
        authTokens: authTokens,
        authId: authId,
        loginUser: loginUser,
        logoutUser: logoutUser,
    }

    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}