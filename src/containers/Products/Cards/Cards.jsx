import React from 'react';
import CardsContent from '../WhatWeBakeContent/WhatWeBakeContent.json';

import oatsCakes from '../../../images/oats-cakes.png';
import chocolateCakes from '../../../images/chocolate-cakes.png';
import donutsMultiLayered from '../../../images/donuts-multi-layered.png';
import donutsCoconut from '../../../images/donuts-coconut.png';
import cakesCaramel from '../../../images/cakes-caramel.png';
import oatsCookies from '../../../images/oats-cookies.png';
import { Link } from '../../../components/Link';

import './Cards.scss';

function getImage(block) {
  switch (block) {
    case ('chocolate-cakes'):
      return chocolateCakes;

    case ('donuts-multi-layered'):
      return donutsMultiLayered;

    case ('donuts-coconut'):
      return donutsCoconut;

    case ('cakes-caramel'):
      return cakesCaramel;

    case ('oats-cookies'):
      return oatsCookies;

    default:
      return oatsCakes;
  }
}

export const Cards = () => (
  <ul className="cards grid">
    {CardsContent.map(({
      id,
      photoLink,
      title,
      content,
    }) => (
      <li className="card" key={id}>
        <img
          className="card__image"
          src={getImage(photoLink)}
          alt={title}
        />

        <p className="card__title">
          {title}
        </p>

        <p className="card__content">
          {content}
        </p>

        <div>
          <Link
            to="#/"
            title="Order"
            customClass="card__link"
            isArrow
          />
        </div>
      </li>
    ))}
  </ul>
);
