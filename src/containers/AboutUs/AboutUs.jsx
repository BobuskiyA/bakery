import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { TextSplit } from "../../components/TextSplit/TextSplit";

import "./AboutUs.scss";
import { Achievements } from "./Achievements/Achievements";

const opacity = {
  initial: {
    opacity: 0,
  },
  open: {
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.2,
    },
  },
  closed: {
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

export const AboutUs = () => {
  const aboutUsRef = useRef(null);
  const isInView = useInView(aboutUsRef);

  return (
    <section className="about-us" ref={aboutUsRef}>
      <div className="about-us__top">
        <h2 className="about-us__title">
          <TextSplit phrase="Few words About us" />
        </h2>

        <motion.p variants={opacity} animate={isInView ? "open" : "closed"}>
          Like many design teams, Onfido made the transition from Abstract +
          Sketch, to Figma in the last couple of years. One of the common
          resistance points internally before making that switch, was Figma’s
          lack of Git-style branching that Abstract enabled. The design team had
          come to rely on branching and had built a lot of our processes around
          it.
        </motion.p>
      </div>

      <Achievements />
    </section>
  );
};
