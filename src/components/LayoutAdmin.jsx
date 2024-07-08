import React from "react";
import { Link, Outlet } from "react-router-dom";

const LayoutAdmin = () => {
  return (
    <>
      <header>
        <ul>
          <li>
            <Link className="btn btn-light" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="btn btn-light" to="/dash">
              DashBoard
            </Link>
          </li>
        </ul>
      </header>
      <div className="col-9">
        <div className="main">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default LayoutAdmin;
