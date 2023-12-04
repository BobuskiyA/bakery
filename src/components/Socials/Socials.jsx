/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-target-blank */
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import logoFacebook from "../../images/socials/facebook.svg";
import logoInstagram from "../../images/socials/instagram.svg";
import logoTwitter from "../../images/socials/twitter.svg";

import "./Socials.scss";

function getIcon(icon) {
  switch (icon) {
    case "facebook":
      return logoFacebook;

    case "instagram":
      return logoInstagram;

    default:
      return logoTwitter;
  }
}

export const Socials = ({ link, social }) => {
  const ref = useRef(null);
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const handleMouse = (e) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);

    setPosition({
      x: middleX,
      y: middleY,
    });
  };

  const reset = () => {
    setPosition({
      x: 0,
      y: 0,
    });
  };

  const { x, y } = position;

  return (
    <motion.div
      style={{ position: "relative" }}
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{
        x,
        y,
      }}
      transition={{
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
    >
      <a href={link} target="_blank">
        <img className="socials__link" src={getIcon(social)} alt={social} />
      </a>
    </motion.div>
  );
};
