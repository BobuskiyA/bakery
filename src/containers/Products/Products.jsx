import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Cards } from './Cards';

import './Products.scss';
import { TextSplit } from '../../components/TextSplit/TextSplit';

const Products = () => {
  const topRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap
      .timeline({
        scrollTrigger: {
          trigger: document.documentElement,
          scrub: 0.2,
          start: '80vw',
          end: '800vw',
        },
      })
      .to('#products', {
        top: '-330px',
        duration: 2,
      });
  }, []);

  return (
    <section
      className="products"
      id="products"
    >
      <div className="products__top" ref={topRef}>
        <h2 className="products__title">
          <TextSplit
            phrase="What we bake"
            space="1.5vw"
          />
        </h2>

        <TextSplit
          phrase="We can customize our cookies right for your needs.
            Just imagine it"
        />
      </div>

      <div className="products__cards">
        <Cards />
      </div>
    </section>
  );
};

export default Products;
