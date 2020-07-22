import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';

export default function Hero({ children, hero }) {
  return <header className={hero}>{children}</header>;
}

Hero.defaultProps = {
  hero: 'defaultHero',
};
