import React from 'react';
import { FooterBase } from './styles';
import LogoFooter from '../../assets/img/logo-2.png';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img className="Logo" src={LogoFooter} alt="Logo andreBonfimDev" />
      </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
