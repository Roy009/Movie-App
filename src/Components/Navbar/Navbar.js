import React from 'react';
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";


export default function Navbar({showSignInButton, logout}) {
  const navigate = useNavigate();

  const goToSignInPage = () => {
    navigate("./sign-in");
  }
  return (
    <div className='navbar_container'>
      <img className='navbar_logo' src="https://th.bing.com/th/id/R.6c617dcfcc6933dae210f6bb0c1c71d2?rik=0npmGpf0lrWEfg&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fmovie-png-hd-movie-logo-cliparts-2524910-1118.png&ehk=G3GfIkpmGGFizSQXbqYq%2fWy9Pf5St7ECppgIhUxpdEc%3d&risl=&pid=ImgRaw&r=0" alt="logo" />
      {showSignInButton === false ? (
        " "
      ) : (
        <button className="navbar_button" onClick={goToSignInPage}>
          Sign In
        </button>
      )}
      {logout && (
        <p className="navbar_icon">
          <AccountCircleIcon />
        </p>
      )}


    </div>
  )
}
