import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

import { ROUTES } from "./utils/routes";

import "./App.css";

import Home from "./pages/home/Home";
import About from "./pages/about/About";
import AppTodo from "./pages/app-todo/AppTodo";
import Layout from "./layout/Layout";
import NotFoundPages from "./pages/notfoundpages/NotFoundPages";

import Loader from "./loaders/Loader";

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <Suspense fallback={<Loader/>}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path={ROUTES.ABOUT} element={<About />} />
              <Route path={ROUTES.TODOAPP} element={<AppTodo />} />
              <Route path="*" element={<NotFoundPages />} />
            </Route>
          </Routes>
        </Suspense>
        App
      </div>
    </div>
  );
}

export default App;
