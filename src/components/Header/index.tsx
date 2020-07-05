import React from 'react';

import logo from '../../img/logo.png';
import './style.css';

const Header = () => {
  return (
    <header className="center">
      <img src={logo} alt="breaking bad" />
    </header>
  );
};

export default Header;
