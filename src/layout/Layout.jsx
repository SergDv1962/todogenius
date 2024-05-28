import React, { useContext } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

import { ROUTES } from "../utils/routes";

import { AuthContext } from "../context/AuthContext";

const Layout = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);

  return (
    <div className="container-layout">
      <header>
        <NavLink to={ROUTES.HOME}>Home</NavLink>
        {isAuthenticated ? (
          <>
            <NavLink to={ROUTES.TODOAPP}>Todo-App</NavLink>
            <NavLink to={ROUTES.ABOUT}>About</NavLink>
            <Link to={ROUTES.LOGIN} onClick={() => {
              setIsAuthenticated(false);
              localStorage.removeItem('email');
              }}>Log out</Link>
          </>
        ) : (
          <NavLink to={ROUTES.LOGIN}>Login</NavLink>
        )}
        
      </header>
      <main>
        <Outlet />
      </main>
      <footer>
        <div>
          Developed by{" "}
          <a
            href="https://fox-taras-5865d2.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Fox Taras
          </a>
          <div>2024</div>
        </div>
        
      </footer>
    </div>
  );
};

export default Layout;
