// main
import React from 'react';
//components
import OurNavbar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './pages/landing';
//router components
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
function App() {

  return (
    <div className='container'>
      <Router>


        <header>
          <OurNavbar />
        </header>
        <Routes>
          <Route path="/home">
            <Landing />
          </Route>
        </Routes>

        <footer>
          <Footer />
          <br />
        </footer>


      </Router>
    </div>

  );
}

export default App;



