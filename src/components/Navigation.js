import { NavLink, Outlet } from 'react-router-dom';
import styled from 'styled-components';
const Nav = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 50px;
`;
const Link = styled(NavLink)`
  text-decoration: none;
  font-weight: 800;
  font-size: 30px;
  &.active {
    color: red;
  }
`;
const Navigation = () => {
  return (
    <Nav>
      <Link to="/">Home</Link>
      <Link to="/movies">Movies</Link>
      <Outlet />
    </Nav>
  );
};
export default Navigation;
