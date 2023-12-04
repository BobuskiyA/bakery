import React from 'react';
import logo from '../../images/icons/logo.svg';
import logoWhite from '../../images/icons/logo-white.svg';

export const Logo = ({ white = false }) => (
  <a href="/#" className="logo">
    <img
      src={white ? logoWhite : logo}
      alt="logo"
      className="logo__image"
    />
  </a>
);
