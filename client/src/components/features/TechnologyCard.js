import { Card } from 'react-bootstrap';
import { IMAGES_URL } from '../../config';

const TechnologyCard = ({ title, image, level }) => {
  return (
    <Card>
      <Card.Img variant="top" src={IMAGES_URL + image} />
      <Card.Body>
        <div>
          <Card.Title>{title}</Card.Title>

          <Card.Text>{level}/100</Card.Text>
        </div>
      </Card.Body>
    </Card>
  );
};

export default TechnologyCard;
