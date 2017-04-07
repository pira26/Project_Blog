import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

import Auth from '../modules/Auth';
import Nav from './Nav.jsx';
import '../static/css/base.scss';

const Base = ({ children }) => (
  <div className="header" style={{textAlign:"center"}}>
    <div className="top-bar" style={{paddingTop:"50px"}}>
      <div className="top-bar-left">
        <IndexLink to="/blog">Blog</IndexLink>
      </div>

      <Nav /> 

      {Auth.isUserAuthenticated() ? (
        <div className="top-bar-right">
          <Link to="/logout">Log out</Link>
        </div>
      ) : (
        <div className="top-bar-right">
          <Link to="/login">Log in</Link>
          <Link to="/signup">Sign up</Link>
        </div>
      )}

    </div>

    { /* child component will be rendered here */ }
    <div style={{marginTop:"175px"}}>{children}</div>

  </div>
);

Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;