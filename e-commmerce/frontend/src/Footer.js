import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export default function Footer() {
  return (
    <FooterStyled>
      <LinkStyled exact to="/" activeClassName="selected">
        Home
      </LinkStyled>
      <LinkStyled to="/products" activeClassName="selected">
        Products
      </LinkStyled>
      <LinkStyled to="/shoppingcart" activeClassName="selected">
        Shopping Cart
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
`;
