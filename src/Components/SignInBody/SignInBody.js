import React, { useState } from 'react';
import "./SignInBody.css";

export default function SignInBody() {
  const [showSignInBox, setSignInBox] = useState(true)

  return (
    <>
      {showSignInBox ? (
        <div className='signinbody_container'>
          <div className="signinbody_form">
            <p className="signinbody_title">Sign In</p>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign In</button>
            <button>Login as Guest User</button>
            <p className="signinbody_text">
              New to MovieApp? <span onClick={() => setSignInBox(false)}>SignUp Now.</span>
            </p>
          </div>
        </div>
      ) : (
        <div className='signinbody_container'>
          <div className="signinbody_form">
            <p className="signinbody_title">Sign Up</p>
            <input type="text" placeholder='Name' />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Sign Up</button>
            <button>Login as Guest User</button>
            <p className="signinbody_text"><span onClick={() => setSignInBox(true)}>Sign In.</span>
            </p>
          </div>
        </div>)}
    </>
  );
}
