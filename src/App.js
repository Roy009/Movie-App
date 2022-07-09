import './App.css';
import LandingPage from './container/LandingPage/LandingPage';
import SignIn from './container/SignIn/SignIn';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './container/HomePage/HomePage';
import { useAuth0 } from "@auth0/auth0-react";
function App() {
  const {user, isAuthenticated, isLoading } = useAuth0();

  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element = { isAuthenticated ? <HomePage /> : <LandingPage/> }/>
          <Route path="/sign-in" element = { <SignIn/> }/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
