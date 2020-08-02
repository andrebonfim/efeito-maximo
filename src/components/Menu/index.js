import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import './Menu.css';
import Button from '../Button';
// import ButtonLink from './components/ButtonLink';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Logo/Efeito Máximo" />
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        ADD VIDEO
      </Button>
    </nav>
  );
}

export default Menu;
