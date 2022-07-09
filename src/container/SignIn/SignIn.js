import React from 'react';
import './SignIn.css';
import Navbar from '../../Components/Navbar/Navbar';
import SignInBody from '../../Components/SignInBody/SignInBody';
import {useAuth0} from "@auth0/auth0-react";

export default function SignIn() {

  const { loginWithRedirect } = useAuth0();



  return (
    <div>
      <Navbar showSignInButton = {false} show={true}/>
      {/* <SignInBody/> */}
      <div className="login_button_container">
        <button onClick={ () => loginWithRedirect() }>Log In</button>
      </div>
    </div>
  )
}
