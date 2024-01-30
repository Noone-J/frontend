import React, { useContext } from 'react'
import AuthContext from '../context/AuthContext';

const HomePage = () => {
    const { user } = useContext(AuthContext);

    return (user ? (
        <div>
            <p>Vous êtes connecté à l'accuiel</p>
        </div>
        ):(
        <div>
            <p>Vous n'est pas connecté, redirection...</p>
        </div>
        )
    )
}

export default HomePage