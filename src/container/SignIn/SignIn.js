import React from 'react';
import './SignIn.css';
import Navbar from '../../Components/Navbar/Navbar';
import SignInBody from '../../Components/SignInBody/SignInBody';


export default function SignIn() {
  return (
    <div>
      <Navbar showSignInButton = {false} show={true}/>
      {/* <SignInBody/> */}
      <div className="login_button_container">
        <button>Log In</button>
      </div>
    </div>
  )
}
