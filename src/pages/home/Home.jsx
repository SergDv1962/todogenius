import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../utils/routes";
import { AuthContext } from "../../context/AuthContext";

const Home = () => {
  const { isAuthenticated } = useContext(AuthContext);
  return (
    <div>
      <p>Home page</p>
      <Link
        className="btn btn-blue" 
        to={isAuthenticated ? ROUTES.TODOAPP : ROUTES.LOGIN}>
        START NOW
      </Link>
    </div>
  );
};

export default Home;
