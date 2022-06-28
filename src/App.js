import './App.css';
import LandingPage from './container/LandingPage/LandingPage';
import SignIn from './container/SignIn/SignIn';
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  const isUserLoggedIn = false;
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element = { isUserLoggedIn ? <h1>hello</h1> : <LandingPage/> }/>
          <Route path="/sign-in" element = { <SignIn/> }/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
