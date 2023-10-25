import React from 'react';
import {Route, Routes} from 'react-router-dom'
import Home from './Home'
import NavBar from './NavBar'
import Projects from './Projects'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/projects" element={<Projects />}/>
        <Route exact path="/" element={<Home />}/>
      </Routes>

    </div>
  );
}

export default App;
