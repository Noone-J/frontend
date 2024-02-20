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
    </div>
  )
}

export default LoginPage