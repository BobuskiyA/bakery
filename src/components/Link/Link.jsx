/* eslint-disable react/prop-types */
import React from 'react';
import classNames from 'classnames';

import './Link.scss';

export const Link = ({
  to,
  title,
  customClass = false,
  isArrow = false,
  phone = false,
}) => (
  <a
    href={to}
    className={classNames(
      'link', 'link--without-border',
      {
        'link--without-border-phone': phone,
        'link--without-border-arrow': isArrow,
      },
      { [customClass]: customClass },
    )}
  >
    {title}
  </a>
);
