import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { authActions } from "../store/auth/authSlice";

const setActive = ({ isActive }) => (isActive ? "activeLink" : "noActiveLink");

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthorized = useSelector((state) => state.auth.isAuthorized);

  const logoutHandler = () => {
    dispatch(authActions.logout());
    navigate("/auth");
  };

  return (
    <HeaderStyled>
      <h1>Redux Auth</h1>
      {isAuthorized === true ? (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>
                <NavLink to="/auth" className={setActive}>
                  Logout
                </NavLink>
              </button>
            </li>
          </ul>
        </nav>
      ) : null}
    </HeaderStyled>
  );
};

export default Header;

const HeaderStyled = styled.header`
  width: 100%;
  height: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #3c0080;
  color: white;
  padding: 0 10%;

  .activeLink {
    color: #2c2922;
    text-decoration: none;
  }

  .noActiveLink {
    text-decoration: none;
  }

  ul {
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    align-items: center;
  }

  li {
    margin: 0 1rem;
  }

  a {
    text-decoration: none;
    color: white;
    font-size: 1.25rem;

    :hover {
      color: #b864da;
    }
  }

  button {
    font-size: 1.25rem;
    background-color: #ffbb00;
    border: 1px solid #ffbb00;
    padding: 0.5rem 1.5rem;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    color: #2c2922;
    border-radius: 6px;

    :hover {
      background-color: #d98d00;
      border-color: #ffa600;
    }

    :active {
      background-color: #ffbb00;
      border-color: #ffbb00;
    }
  }
`;
