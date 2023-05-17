import { Outlet } from 'react-router-dom';
import { Header, NavItem } from './Layout.styled';

const Layout = () => {
  return (
    <>
      <Header>
        <NavItem to="/" end>
          Home
        </NavItem>
        <NavItem to={'movies'}>Movies</NavItem>
      </Header>
      <Outlet />
    </>
  );
};

export default Layout;
