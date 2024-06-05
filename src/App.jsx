import React from 'react';
import { BrowserRouter as Router, Route,  Routes , BrowserRouter } from 'react-router-dom';
import Home from './pages/Home/home'; // Adjust the path based on your actual file structure
import Login from './pages/Login/login'; // Ensure this path is correct
import Signup from './pages/Signup/signup'; // Ensure this path is correct
import Navbar from './components/Navbar/navbar'; // Ensure the path is correct

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
