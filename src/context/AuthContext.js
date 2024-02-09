import { createContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import axios from 'axios';

const AuthContext = createContext()

export default AuthContext;

export const AuthProvider = ({children}) => {

    let [user, setUser] = useState(null)
    let [authTokens, setAuthTokens] = useState(null)

    const navigate = useNavigate()

    let loginUser = async (e) => {
        e.preventDefault()
        const response = await fetch('/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username: e.target.username.value, password: e.target.password.value })
        });

        let data = await response.json();

        if(data){
            localStorage.setItem('authTokens', JSON.stringify(data));
            setAuthTokens(data)
            setUser(e.target.username.value)
            navigate('/')
        } else {
            alert('Something went wrong while loggin in the user!')
        }
    }

    let logoutUser = (e) => {
        e.preventDefault()
        localStorage.removeItem('token')
        setAuthTokens(null)
        setUser(null)
        navigate('/login')
    }

    let contextData = {
        user: user,
        authTokens: authTokens,
        loginUser: loginUser,
        logoutUser: logoutUser,
    }



    return(
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}