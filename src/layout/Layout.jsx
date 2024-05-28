import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import { ROUTES } from "../utils/routes";

const Layout = () => {
  return (
    <div className="container-layout">
      <header>
        <NavLink to={ROUTES.HOME}>Home</NavLink>
        <NavLink to={ROUTES.TODOAPP}>Todo-App</NavLink>
        <NavLink to={ROUTES.ABOUT}>About</NavLink>
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
