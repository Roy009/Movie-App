import './App.css';
import LandingPage from './container/LandingPage/LandingPage';
import SignIn from './container/SignIn/SignIn';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './container/HomePage/HomePage';
function App() {
  const isUserLoggedIn = true;
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element = { isUserLoggedIn ? <HomePage /> : <LandingPage/> }/>
          <Route path="/sign-in" element = { <SignIn/> }/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
