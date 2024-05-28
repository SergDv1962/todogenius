import { Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { useQuery } from "react-query";

import { ROUTES } from "./utils/routes";

import "./App.css";
import { getAllUsers } from "./api/api";
import Loader from "./loaders/Loader";
import { AuthContext } from "./context/AuthContext";

import Layout from "./layout/Layout";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import AppTodo from "./pages/app-todo/AppTodo";
import NotFoundPages from "./pages/notfoundpages/NotFoundPages";
import Login from "./pages/login/Login";
import Registration from "./pages/registration/Registration";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("email")
  );

  const { data: users } = useQuery({
    queryKey: ["userList"],
    queryFn: getAllUsers,
    refetchOnReconnect: false,
    refetchOnWindowFocus: false,
  });

  return (
    <div className="App">
      <div className="App-container">
        <p>My TODO App</p>
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path={ROUTES.LOGIN} element={<Login users={users}/>} />
                <Route index element={<Home />} />
                <Route path={ROUTES.ABOUT} element={<About />} />
                <Route path={ROUTES.TODOAPP} element={<AppTodo />} />
                <Route path={ROUTES.REGICTRATION} element={<Registration />} />
                <Route path="*" element={<NotFoundPages />} />
              </Route>
            </Routes>
          </Suspense>
        </AuthContext.Provider>
      </div>
    </div>
  );
}

export default App;
