// main
import React from 'react';
//components
import OurNavbar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './pages/Landing';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {

  return (
    <div className='container'>
      <Router>
        <header>
          <OurNavbar />
        </header>


        <Switch>
          <Route path="/">
            <Landing />
          </Route>

        </Switch>
        <footer>
          <Footer />
          <br />
        </footer>

      </Router>

    </div>

  );
}

export default App;



