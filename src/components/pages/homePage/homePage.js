import React from 'react';
import '../../../css/homepage.css';
import FrontText from '../../textItems/frontText';

function HomePage() {
  return (
    <div className="homepage-container">
        <div className='portrait-container'>
          <img src='/images/presentacion/Morris.png' className='morris-back'></img>
          <img src='/images/presentacion/autoretrato.png' className='portrait'></img>
        </div>
        <div className='frontText-asd'>
          <FrontText/>
        </div>

    </div>
  );
}

export default HomePage;


