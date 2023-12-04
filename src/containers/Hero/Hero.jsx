/* eslint-disable max-len */
/* eslint-disable import/no-unresolved */
/* eslint-disable object-shorthand */
/* eslint-disable no-return-assign */
import React, { useEffect, useRef } from 'react';
import './Hero.scss';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

import { Title } from './Title/Title';
import { Cookie } from './Cookie';
import { Button } from '../../components/Button/Button';
import { TextSplit } from '../../components/TextSplit/TextSplit';

export const Hero = () => {
  const descriptionRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap
      .timeline({
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: 0.2,
          start: '100px',
          end: '1000vh',
        },
      })
      .to('.hero__button', {
        top: '-130px',
        duration: 2,
      });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: 0.2,
          start: '100px',
          end: '1000vh',
        },
      })
      .to('.hero__top', {
        top: '-360px',
        duration: 2,
      });
  }, []);

  return (
    <section
      className="hero"
      id="hero"
    >
      <div className="hero__top" ref={descriptionRef}>
        <TextSplit
          phrase="We bake your fantasies — croissants, cakes, cookies, and cupcakes."
        />
      </div>

      <Title />

      <Cookie />

      <div className="hero__button">
        <Button
          to="#/"
          title="Learn More"
          isButton
        />
      </div>
    </section>
  );
};
