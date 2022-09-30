// main
import React from 'react';
//components
import Navbar from './components/Navbar';
import Featured from './components/Featured';
import Footer from './components/Footer';
import CardSection from './components/CardSection';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className='container'>
      <header>
        <Navbar />
      </header>
      <main>
        <Featured />
        <br />
        <CardSection />
        <br />
      </main>

      <footer>
        <Footer />
      </footer>


    </div>

  );
}

export default App;



