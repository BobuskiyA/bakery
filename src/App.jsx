import React from 'react';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

import './App.scss';
import { Header } from './containers/Header';
import { Footer } from './containers/Footer/Footer';

import { Hero } from './containers/Hero';
import Products from './containers/Products/Products';
import { AboutUs } from './containers/AboutUs/AboutUs';

gsap.registerPlugin(ScrollTrigger);

export default function App() {
  const lenis = new Lenis();

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  function easing(x) {
    // eslint-disable-next-line no-restricted-properties
    return x === 0 ? 0 : Math.pow(2, 10 * x - 10);
  }

  requestAnimationFrame(raf, easing);

  return (
    <div className="app">
      <div className="container">
        <header className="app__header">
          <Header />
        </header>

        <main className="app__main">
          <Hero />

          <Products />

          <AboutUs />
        </main>
      </div>

      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}
