import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import "./HomePage.css";
import Banner from '../../Components/Banner/Banner';
import Row from '../../Components/Row/Row';
export default function HomePage() {
  return (
    <div>
      <Navbar showSignInButton = {false} logOut={true} />
      <Banner />
      <Row title="MOVIE BOX HITS"
      fetchUrl="https://api.themoviedb.org/3/trending/all/week?api_key=eb739588a651c4541b60bde80c864b8c&language=en-US"
      isLargeRow 
      />
      <Row title="MOVIE BOX NETFLIX ORIGINALS"
      fetchUrl="https://api.themoviedb.org/3/discover/tv?api_key=eb739588a651c4541b60bde80c864b8c&with_networks=123`"
      isLargeRow 
      />
      <Row title="MOVIE BOX COMEDY MOVIES"
      fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=eb739588a651c4541b60bde80c864b8c&with_genres=35"
      isLargeRow 
      />
      <Row title="MOVIE BOX HORROR MOVIES"
      fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=eb739588a651c4541b60bde80c864b8c&with_genres=27"
      isLargeRow 
      />
      <Row title="MOVIE BOX ROMANCE MOVIES"
      fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=eb739588a651c4541b60bde80c864b8c&with_genres=10749"
      isLargeRow 
      />
      <Row title="MOVIE BOX DOCUMENTRY"
      fetchUrl="https://api.themoviedb.org/3/discover/movie?api_key=eb739588a651c4541b60bde80c864b8c&with_genres=99"
      isLargeRow 
      />
    </div>
  )
}
