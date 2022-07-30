import React from 'react';
import { Link } from 'react-router-dom';
import { AppLinks } from '../common/constants';

const NavLinks = () => {
  return (
    <div className="">
      <nav>
        {AppLinks.map(({link, label, showLink}) => (
            showLink && <Link to={link} key={link}>{label}</Link>
        ))}
      </nav>
    </div>
  );
}

export default NavLinks;
