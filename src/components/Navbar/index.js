import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,  
} from './NavbarElements';

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavLink to='/'>
          <img src={require('../../images/logo.svg')} alt='logo' />
        </NavLink>
        <Bars />
        <NavMenu>
          <NavLink to='/index' activeStyle>
            Inicio
          </NavLink>
          <NavLink to='/productos' activeStyle>
            Productos
          </NavLink>
          <NavLink to='/faq' activeStyle>
            Preguntas frecuentes
          </NavLink>
          <NavLink to='/ayuda' activeStyle>
            Ayuda
          </NavLink>
          {/* Second Nav */}
          {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;
