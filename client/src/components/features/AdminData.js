import { Row, Col, Image } from 'react-bootstrap';
import { IMAGES_URL } from '../../config';
const AdminData = ({ title, text, photo }) => {
  return (
    <div>
      <Row>
        <Col>
          <Image src={IMAGES_URL + photo} />
        </Col>

        <Col>
          <h1>Hi!, I'm Maciej Kusztal</h1>

          <p>
            <span>{title}</span>
            {text}
          </p>
        </Col>
      </Row>
    </div>
  );
};
export default AdminData;
