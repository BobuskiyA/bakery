import React from 'react';
import { Logo } from '../../components/Logo';
import { Menu } from './Menu';
import { Navigation } from './Navigation';

import './Header.scss';

export const Header = () => (
  <div className="header">
    <Logo />

    <div className="header__menu">
      <Menu />
    </div>

    <div className="header__navigation">
      <Navigation />
    </div>
  </div>
);
