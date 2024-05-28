import { Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";

import { ROUTES } from "./utils/routes";

import "./App.css";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import AppTodo from "./pages/app-todo/AppTodo";
import Layout from "./layout/Layout";
import NotFoundPages from "./pages/notfoundpages/NotFoundPages";

import Loader from "./loaders/Loader";
import Login from "./pages/login/Login";
import { AuthContext } from "./context/AuthContext";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("email")
  );

  return (
    <div className="App">
      <div className="App-container">
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
          <Suspense fallback={<Loader />}>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route path={ROUTES.LOGIN} element={<Login />} />
                <Route index element={<Home />} />
                <Route path={ROUTES.ABOUT} element={<About />} />
                <Route path={ROUTES.TODOAPP} element={<AppTodo />} />
                <Route path="*" element={<NotFoundPages />} />
              </Route>
            </Routes>
          </Suspense>
        </AuthContext.Provider>
        App
      </div>
    </div>
  );
}

export default App;
