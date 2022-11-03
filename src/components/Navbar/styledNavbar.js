import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavbarContainer = styled.nav`
  width: 100%;
  height: 50px;
  background-color: #697689;
  display: flex;
  flex-direction: row;
  padding: 10px;
  align-items: center;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
`;

export const NavbarLink = styled(Link)`
  color: white;
  font-size: x-large;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
//   a:-webkit-any-link {
//     color: white;
//   }
  &:hover,
  &:focus {
    color: blue;
  }
  &:active {
    color: red;
  }
`;
