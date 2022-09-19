import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavBar from './components/layout/NavBar/NavBar';

import styles from './App.module.scss';
import HomePage from '../src/components/pages/HomePage/HomePage';
import AboutMe from './components/pages/AboutMe/AboutMe';

export const App = () => {
  return (
    <Container className={styles.root}>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/aboutme" element={<AboutMe />} />
      </Routes>
    </Container>
  );
};

export default App;
