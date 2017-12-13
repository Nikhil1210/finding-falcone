import * as React from 'react';
import { Link } from 'react-router-dom';

// The Header creates links that can be used to navigate
// between routes.
const Header = () => (
  <header>
    <nav>
      <Link to="/">Home</Link>
      {' | '}
      <Link to="/result">Result</Link>
    </nav>
  </header>
);

export default Header;