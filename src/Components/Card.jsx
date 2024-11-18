import Card from 'react-bootstrap/Card';

function BasicCard(prop) {
  return (
    <Card 
      className="mb-4 mt-5" 
      style={{ 
        width: prop.width, 
        margin: '5%', 
        float:'left'
      }}
    >
      <Card.Img variant="top" src={prop.src} alt="News Thumbnail" />
      <Card.Body>
      <Card.Title 
  style={{ 
    fontFamily: "'Roboto Slab', serif", 
    fontSize: '1.6rem', 
    fontWeight: 'bold' 
  }}
>
  {prop.name}
</Card.Title>
<Card.Text 
  style={{ 
    fontFamily: "'Georgia', serif", 
    fontSize: '1rem',
    lineHeight: '1.6',
    color: '#444' 
  }}
>
 {prop.text}
</Card.Text>
    </Card.Body>
    </Card>
  );
}

export default BasicCard;
