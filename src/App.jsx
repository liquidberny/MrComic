// main
import React from 'react';
//components
import Navbar from './components/Navbar';
import Featured from './components/Featured';
import Footer from './components/Footer';
import Card from './components/Card';
function App() {

  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        <Featured />
        <Card />
        <h1>Aqui van las categorias, archivos, post populares, post recientes</h1>
      </main>

      <footer>
        <Footer />
      </footer>


    </div>

  );
}

export default App;



