// main
import React from 'react';
//components
import OurNavbar from './components/Navbar';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from './pages/Landing';
import Login from './pages/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

//Auth & redux
import { connect } from "react-redux";

function App() {

  return (
    <div className='container'>
      <Router>
        <header>
          <OurNavbar />
        </header>


        <Switch>
          <Route path="/" exact component={Landing}/>
          <Route path="/login" exact component={Login}/>
        </Switch>
        <footer>
          <Footer />
          <br />
        </footer>

      </Router>

    </div>

  );
}
const mapStateToProps = ({session}) => ({
  checked: session.checked, authenticated: session.authenticated
}) 

export default connect(mapStateToProps)(App);


