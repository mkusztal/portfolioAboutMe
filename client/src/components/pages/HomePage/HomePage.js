import { Col, Row, Button, Image } from 'react-bootstrap';
import styles from './HomePage.module.scss';
const HomePage = () => {
  return (
    <div className={styles.root}>
      <Row>
        <Col>
          <Image src="pobracZRedux" />
        </Col>

        <Col>
          <h3 className={styles.header}>Hi! I'm Maciej Kusztal</h3>
          <p className={styles.text}>
            I'm Junior Full Stack Web Developer who is looking for...
          </p>
          <Button variant="warning" className="pt-2 m-3">
            Read more
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default HomePage;
