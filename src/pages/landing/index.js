// main
import React from 'react';
//components
import Featured from '../../components/Featured';
import CardSection from '../../components/CardSection';
function Landing() {

  return (
    <div className='container'>

      <main>
        <Featured />
        <br />
        <CardSection />
        <br />
      </main>

    </div>

  );
}

export default Landing;