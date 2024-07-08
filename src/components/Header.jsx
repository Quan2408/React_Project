import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContext";

export default function Header() {
  const { isAuthenticated, user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <header>
      <ul>
        <li>
          <Link className="btn btn-light" to="/">
            Home
          </Link>
        </li>

        <li>
          <Link className="btn btn-light" to="/blog">
            Blog
          </Link>
        </li>
        {isAuthenticated ? (
          <>
            <li>
              <Link to="/admin">
                <button className="btn btn-primary">Are you an admin ?</button>
              </Link>
            </li>
            <li>
              <button className="btn btn-danger" onClick={handleLogout}>
                LOGOUT
              </button>
            </li>
            <li>Hello: {user?.email}</li>
          </>
        ) : (
          <>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/register">Register</Link>
            </li>
          </>
        )}
      </ul>
    </header>
  );
}
