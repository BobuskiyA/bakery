/* eslint-disable react/prop-types */
import React from 'react';
import classNames from 'classnames';
import { getLink } from '../../../components/MenuContent/getLink';
import { getTitle } from '../../../components/MenuContent/getTitle';

import Menu from '../../../components/MenuContent/MenuContent.json';
import Contacts from '../ContactsContent/ContactsContent.json';

import './LinksList.scss';
import { Link } from '../../../components/Link';

export const LinksList = ({
  title,
  links,
  blockLink = true,
  customClass = false,
}) => {
  let array = [];

  if (links === 'menu') {
    array = Menu;
  } else if (links === 'contacts') {
    array = Contacts;
  }

  return (
    <div className={classNames(
      'links-list',
      { [customClass]: customClass },
    )}
    >
      <h3 className="links-list__title">
        {title}
      </h3>

      <ul className="links-list__list">
        {array.map(currentLink => (
          <li key={currentLink}>
            <Link
              to={`
                ${blockLink
            ? `#${getLink(currentLink)}`
            : `tel:${currentLink}`}`
              }
              title={blockLink ? getTitle(currentLink) : currentLink}
              customClass="links-list__link"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
