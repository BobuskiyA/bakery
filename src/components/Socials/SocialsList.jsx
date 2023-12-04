import React from 'react';
import SocialsContent from './SocialsContent/SocialsContent.json';

import './Socials.scss';
import { Socials } from './Socials';

export const SocialsList = () => (
  <ul className="socials">
    {SocialsContent.map((social, index) => (
      <li key={social.social}>
        <Socials
          link={social.link}
          social={social.social}
        />
      </li>
    ))}
  </ul>
);
