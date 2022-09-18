import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavBar from './components/layout/NavBar/NavBar';

import styles from './App.module.scss';
import HomePage from '../src/components/pages/HomePage/HomePage';

export const App = () => {
  return (
    <Container className={styles.root}>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </Container>
  );
};

export default App;
