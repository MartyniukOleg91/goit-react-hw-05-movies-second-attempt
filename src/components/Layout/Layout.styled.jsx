import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  padding: 15px;
`;

export const Header = styled.header`
  padding: 15px 30px;
  display: flex;
  gap: 20px;
  background-color: #69709c;
  box-shadow: 0 0 10px 4px hsl(0deg 0% 38% / 75%);
`;

export const NavItem = styled(NavLink)`
  font-size: 700;
  /* border: 1px solid black; */
  display: flex;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  color: #ffffff;
  &.active {
    color: #ff7b96;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    text-decoration: underline;
  }
`;

export const Form = styled.form`
  /* padding: 25px 0 0 25px; */
  display: flex;
  //   gap: 15px;
  > input {
    width: 350px;
    padding: 7px;
  }
`;

export const Box = styled.div`
  border-bottom: 1px solid #727272;
  padding: 15px;
  p {
    padding-left: 15px;
  }
`;

export const MoreInfoList = styled.ul`
  text-decoration: none;
  list-style: none;
  margin-top: 15px;
  padding-left: 20px;
`;

export const MoreInfoLink = styled(NavLink)`
  margin: 0;
  padding: 5px;
  display: block;
  color: black;
  text-decoration: none;
  list-style: none;
  &.active {
    color: #ff4388;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    text-decoration: underline;
  }
`;

export const GoBack = styled(Link)`
  padding: 3px;
  display: block;
  width: 100px;
  text-align: center;
  svg {
    width: 20px;
    height: 15px;
  }
`;

export const MoviesList = styled.ul`
  padding: 20px;
`;

export const Input = styled.input`
  display: inline-block;
  width: 100%;
  font: inherit;
  font-size: 20px;
  border: 0;
  border-radius: 7px 0px 0px 7px;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  background-color: #dde0e1;
`;

export const Button = styled.button`
  display: inline-block;
  width: 48px;
  height: 48px;
  border: 0;
  border-radius: 0px 7px 7px 0px;
  background-image: url('https://img.icons8.com/color/512/search.png');
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.7;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  background-color: #dde0e1;
`;
