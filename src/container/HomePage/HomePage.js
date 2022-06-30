import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import "./HomePage.css";
import Banner from '../../Components/Banner/Banner';
export default function HomePage() {
  return (
    <div>
      <Navbar showSignInButton = {false} logout={true} />
      <Banner />
    </div>
  )
}
