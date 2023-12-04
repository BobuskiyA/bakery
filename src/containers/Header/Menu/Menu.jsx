/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import classNames from 'classnames';
import MenuContent from '../../../components/MenuContent/MenuContent.json';

import './Menu.scss';
import { BackToUp } from '../../../components/BackToUp/BackToUp';
import { Logo } from '../../../components/Logo';
import { getLink } from '../../../components/MenuContent/getLink';
import { getTitle } from '../../../components/MenuContent/getTitle';
import { Link } from '../../../components/Link';

export const Menu = () => {
  const classListBody = document.body.classList;
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  const handleOpenMenu = () => {
    setIsActiveMenu(true);
    classListBody.add('body-with-menu');
  };

  const handleCloseMenu = () => {
    setIsActiveMenu(false);
    classListBody.remove('body-with-menu');

    BackToUp();
  };

  return (
    <div className="menu">
      <button
        type="button"
        className="menu__open"
        onClick={handleOpenMenu}
      />

      <div className={classNames(
        'menu__content',
        { isActive: isActiveMenu },
      )}
      >
        <div className="container">
          <div className="menu__content--top">
            <Logo />

            <button
              type="button"
              className="menu__close"
              onClick={handleCloseMenu}
            />
          </div>

          <ul className="menu__list">
            {MenuContent
              .slice(0, 3)
              .map(currentLink => (
                <li
                  key={currentLink}
                >
                  <a
                    href={`#${getLink(currentLink)}`}
                    onClick={handleCloseMenu}
                    className="menu__link"
                  >
                    {getTitle(currentLink)}
                  </a>
                </li>
              ))}
            <div className="menu--button">
              <Link
                title="Contact Us"
                to="#/"
                phone
              />
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};
