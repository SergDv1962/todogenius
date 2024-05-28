import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home/Home';
import About from './pages/about/About';
import AppTodo from './pages/app-todo/AppTodo';
import Layout from './layout/Layout';
import { ROUTES } from './utils/routes';
import NotFoundPages from './pages/notfoundpages/NotFoundPages';

function App() {
  return (
    <div className="App">
      <div className="App-container">
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Home/>}/>
            <Route path={ROUTES.ABOUT} element={<About/>}/>
            <Route path={ROUTES.TODOAPP} element={<AppTodo/>}/>
            <Route path='*' element={<NotFoundPages/>}/>
          </Route>
        </Routes>
        App
      </div>
    </div>
  );
}

export default App;
