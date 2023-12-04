import React from 'react';
import AchievementsContent from './OurAchievements.json';

import './Achievements.scss';

export const Achievements = () => (
  <ul className="achievements">
    {AchievementsContent.map(({
      num,
      text,
    }) => (
      <li key={num} className="achievements__item">
        <span className="big-text primary-text">
          {num}
        </span>

        <p>
          {text}
        </p>
      </li>
    ))}
  </ul>
);
