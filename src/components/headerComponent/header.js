import React from 'react';
import logo from '../../img/logo/logo.png'
import {Link} from 'react-router-dom';

function Header() {
  return (
    <header>
      <div className="frontLogo">
        <img src={logo} className="App-logo" alt="logo" width="70" height="70"></img>
        USOA-PENKI
      </div>
      {/* nav for group of links */}
      <nav>
        <ul>
          <li className="first"><Link to='/'>Home</Link></li>

          <li><Link to='/digitalArt'>Digital Art</Link></li>

          <li><Link to='/traditionalArt'>Traditional Art</Link></li>

          <li><Link to='/graphicDesign'>Graphic Design</Link></li>

          <li className="last"><Link to='/contact'>Contact</Link></li>
        </ul>
      </nav>
        
        


    </header>
  );
}

export default Header;
