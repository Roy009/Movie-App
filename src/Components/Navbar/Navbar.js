import React, {useEffect, useState} from 'react';
import { useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useAuth0 } from '@auth0/auth0-react';
import AccountCircleIcon from "@mui/icons-material/AccountCircle";


export default function Navbar({ showSignInButton, logOut, show }) {
  const { user, loginWithRedirect } = useAuth0();

  const { logout } = useAuth0();
  // const navigate = useNavigate();

  const [dark, setDark] = useState(false);

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setDark(true);
    } else {
      setDark(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar);

    return () => {
      //cleanup function
      window.removeEventListener("scroll", transitionNavBar);
    };
  }, []);

  const goToSignInPage = () => {
    // navigate("./sign-in");
    loginWithRedirect();
  }
  return (
    
    <div className={`navbar_container 
    ${show && "nav-color"} 
    ${dark && "navbar_dark"}`}>
      <img className='navbar_logo' src="https://vignette2.wikia.nocookie.net/logopedia/images/b/b2/NetflixIcon2016.jpg/revision/latest/scale-to-width-down/2000?cb=20160620223003" alt="logo" />
      {showSignInButton === false ? (
        " "
      ) : (
        <button className="navbar_button" onClick={goToSignInPage}>
          Sign In
        </button>
      )}
      {logOut && (
        <>
          <h4 className="user_name"> {user && `Hi ${user.name}`} </h4>
          <p
            onClick={() =>
              logout({
                returnTo: window.location.origin,
              })
            }
            className="navbar_icon"
          >
            <AccountCircleIcon />
          </p>
        </>
      )}
    </div>
  );
}
