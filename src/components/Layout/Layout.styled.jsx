import styled from 'styled-components';
import { Link, NavLink } from 'react-router-dom';

export const Container = styled.div`
  margin: 0 auto;
  padding: 15px;
  padding-top: 10px;
`;

export const Header = styled.header`
  padding: 15px 30px;
  display: flex;
  border-radius: 10px;
  justify-content: center;
  gap: 20px;
  background-color: #ffa500;
  box-shadow: 0 0 10px 4px hsl(0deg 0% 38% / 75%);
`;

export const NavItem = styled(NavLink)`
  font-size: 700;
  border: 3px solid black;
  border-radius: 1px;
  background-color: 919191;
  padding: 10px;
  display: flex;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  color: #111111;
  &.active {
    color: black;

    background-color: red;
    border-radius: 10px;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    text-decoration: underline;
  }
`;

export const Form = styled.form`
  /* padding: 25px 0 0 25px; */
  display: flex;
  justify-content: center;
  //   gap: 15px;
  > input {
    width: 350px;
    padding: 7px;
  }
`;

export const Box = styled.div`
  border-bottom: 3px solid #000000;
  padding: 20px;
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
    color: red;
  }
  :hover:not(.active),
  :focus-visible:not(.active) {
    text-decoration: underline;
  }
`;

export const GoBack = styled(Link)`
  display: inline-block;
  padding: 10px 20px;
  background-color: #ffa999;
  color: black;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
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
  border: 1;
  border-radius: 10px 0px 0px 7px;
  outline: none;
  padding-left: 4px;
  padding-right: 4px;
  background-color: orang;
`;

export const Button = styled.button`
  display: inline-block;
  width: 50px;
  height: 68px;
  border: 1;
  border-radius: 0px 10px 7px 0px;
  background-image: url('https://img.icons8.com/color/512/search.png');
  background-size: 60%;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.9;
  transition: opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  outline: none;
  background-color: #dde0e1;
`;
