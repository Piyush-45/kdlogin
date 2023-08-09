import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';

// import MainPage from './pages/MainPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login/>} />
        {/* <Route path="/custom-page" element={<MainPage/>} /> */}
      </Routes>
    </Router>
  );
};

export default App;
