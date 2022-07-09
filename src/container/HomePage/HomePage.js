import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import "./HomePage.css";
import Banner from '../../Components/Banner/Banner';
import Row from '../../Components/Row/Row';
export default function HomePage() {
  return (
    <div>
      <Navbar showSignInButton = {false} logout={true} />
      <Banner />
      <Row title="MOVIE BOX HITS"
      fetchUrl="https://api.themoviedb.org/3/trending/all/week?api_key=eb739588a651c4541b60bde80c864b8c&language=en-US"
      isLargeRow 
      />
      <Row title="MOVIE BOX HITS"
      fetchUrl="https://api.themoviedb.org/3/trending/all/week?api_key=eb739588a651c4541b60bde80c864b8c&language=en-US"
      isLargeRow 
      />
      <Row title="MOVIE BOX HITS"
      fetchUrl="https://api.themoviedb.org/3/trending/all/week?api_key=eb739588a651c4541b60bde80c864b8c&language=en-US"
      isLargeRow 
      />
      <Row title="MOVIE BOX HITS"
      fetchUrl="https://api.themoviedb.org/3/trending/all/week?api_key=eb739588a651c4541b60bde80c864b8c&language=en-US"
      isLargeRow 
      />
    </div>
  )
}
