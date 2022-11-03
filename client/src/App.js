import { Routes, Route } from 'react-router-dom';
import NavBar from './components/layout/NavBar/NavBar';

import styles from './App.module.scss';
import HomePage from '../src/components/pages/HomePage/HomePage';
import AboutMe from './components/pages/AboutMe/AboutMe';
import Register from './components/features/Register/Register';
import Login from './components/features/Login/Login';
import Logout from './components/features/Logout/Logout';
import Footer from './components/layout/Footer/Footer';

export const App = () => {
  return (
    <div className={styles.root}>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/logout" element={<Logout />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
