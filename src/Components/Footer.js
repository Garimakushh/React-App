import React from 'react';
import {NavLink} from 'react-router-dom';

const Footer = () => {
  return (
    <div class="card text-center">
      <div class="card-body bg-dark text-light py-4">
        <h5 class="card-title">Made by Garima kushwaha</h5>
        <p class="card-text">
          National Institute of Technology Patna 
        </p>
        <NavLink to="/">
        <button className="btn btn-primary">Home page</button>
        </NavLink>
          
      </div>
    </div>
  );
};

export default Footer;
