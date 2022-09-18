//import { Routes, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import NavBar from './components/layout/NavBar/NavBar';

import styles from './App.module.scss';

export const App = () => {
  return (
    <Container className={styles.root}>
      <NavBar />
    </Container>
  );
};

export default App;
