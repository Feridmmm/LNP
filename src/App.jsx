import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home/home'; // Adjust the path based on your actual file structure
import Login from './pages/Login/login'; // Ensure this path is correct
import Signup from './pages/Signup/signup'; // Ensure this path is correct
import School from './pages/School/school'; // Ensure the path is correct
import Kindergarten from './pages/Kindergarten/kindergarten'; // Ensure the path is correct
import SocialChildProject from './pages/SocialChildProject/socialChildProject'; // Ensure the path is correct
import SocialTeenagerProject from './pages/SocialTeenagerProject/socialTeenagerProject';
import MapComponent from './components/MapComponent/MapComponent'; // Ensure the path is correct

const App = () => {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/school" element={<School />} />
          <Route path="/kindergarten" element={<Kindergarten />} />
          <Route path="/social-child-project" element={<SocialChildProject />} />
          <Route path="/social-teenager-project" element={<SocialTeenagerProject />} />
          {/* Add other routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
