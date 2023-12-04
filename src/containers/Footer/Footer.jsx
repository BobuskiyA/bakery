import React from 'react';
import './Footer.scss';
import { Logo } from '../../components/Logo';
import { LinksList } from './LinksList';
import { SocialsList } from '../../components/Socials/SocialsList';
import { Link } from '../../components/Link';

export const Footer = () => (
  <div className="footer">
    <div className="footer__content container grid">
      <div className="footer__logo">
        <Logo white />
      </div>

      <LinksList
        title="Menu"
        links="menu"
        customClass="footer__link-list--menu"
      />

      <h2 className="footer__title">
        Contact us
      </h2>

      <LinksList
        title="Call us"
        links="contacts"
        blockLink={false}
        customClass="footer__link-list--contacts"
      />

      <div className="footer__email">
        <h3 className="footer__email-title">
          Email us
        </h3>

        <Link
          to="mailto:bakerlab@example.com"
          title="bakerlab@example.com"
          customClass="footer__email-link"
        />
      </div>

      <div className="footer__socials">
        <SocialsList />
      </div>

      <p className="footer__bottom">
        @Bakerlab 2022
      </p>
    </div>
  </div>
);
