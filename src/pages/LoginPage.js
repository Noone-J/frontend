import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'

import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

const LoginPage = () => {

  let {  loginUser } = useContext(AuthContext);

  return (
    <div>
    <form onSubmit={loginUser}>
      <FloatingLabel
        controlId="floatingInput"
        label="Username"
        className="mb-3"
      >
        <Form.Control type="text" name="username" placeholder="username" />
      </FloatingLabel>
      <FloatingLabel controlId="floatingPassword" label="Password">
        <Form.Control type="password" name="password" placeholder="password" />
      </FloatingLabel>
      <input type="submit"/>
    </form>
    {/* <div>
      {user ? (
      <h1>Bienvenue sur votre fiche</h1>
        {laFiche && Object.values(laFiche).map((player) => (
          <div key={player.id}>
              {console.log(laFiche)}
              <h2>{`${player.user.first_name} ${player.user.last_name}`}</h2>
              <p>Username: {player.user.username}</p>
              <p>Email: {player.user.email}</p>
              <p>Victoires: {player.nbr_victoire}</p>
              <p>Défaites: {player.nbr_defaites}</p>
              <p>Expérience: {player.experience}</p>
          </div>
        ))}
      ) : null}
      </div> */}
    </div>
  )
}

export default LoginPage