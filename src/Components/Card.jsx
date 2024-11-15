import Card from 'react-bootstrap/Card';

function BasicCard(prop) {
      return (
        <div className="d-flex justify-content-center mb-4 mt-5">
  <Card style={{ width: '30%' }}>
      <Card.Img variant="top" src={prop.src} alt="News Thumbnail" />
      <Card.Body>
        <Card.Title>{prop.name}</Card.Title>
        <Card.Text>{prop.text}</Card.Text>
      </Card.Body>
    </Card>
      </div>
  );
}

export default BasicCard;
