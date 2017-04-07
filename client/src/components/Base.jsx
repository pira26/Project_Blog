import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

import Auth from '../modules/Auth'; 

const Base = ({ children }) => (
  <div className="col-xs-12
                  col-sm-12
                  col-md-12
                  col-lg-12">
    <div className="top-bar">
      <div className="top-bar-left">
        <IndexLink to="/blog">Blog</IndexLink>
      </div>

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
    {children}

  </div>
);

Base.propTypes = {
  children: PropTypes.object.isRequired
};

export default Base;