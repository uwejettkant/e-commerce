import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Home from './images/home.png'
import Products from './images/shirt.png'
import Shoppingcart from './images/shopping-cart.png'

export default function Footer() {
  return (
    <FooterStyled>
      <LinkStyled exact to="/" activeClassName="selected">
        <img src={Home} alt="home Button" /> 
      </LinkStyled>
      <LinkStyled to="/products" activeClassName="selected">
      <img src={Products} alt="product Button" />
      </LinkStyled>
      <LinkStyled to="/shoppingcart" activeClassName="selected">
      <img src={Shoppingcart} alt="shoppingcard Button" />
      </LinkStyled>
    </FooterStyled>
  );
}
const FooterStyled = styled.footer`
  display: flex;
  justify-content: space-evenly;
  width: 100%;
  background: white;
`;
const LinkStyled = styled(NavLink)`
  padding: 10px;
  &.selected {
    background: #dde8eb;
  }
  img {
    height: 25px;
  }
`;
