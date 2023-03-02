import Navbar from "./components/Navbar";
import News from "./components/News"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import React from "react";

function App() {


  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/news" element={<News/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
