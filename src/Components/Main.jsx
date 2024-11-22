import 'bootstrap/dist/css/bootstrap.min.css';
import SportTen from "./SportTen";
import NewsFeed from "./NewsFeed";
import { Container, Row, Col } from 'react-bootstrap';


function Main() {
  return (
    <>
      <Container fluid>
  <Row>
    <Col style={{backgroundColor:"black",backgroundImage: `url('/src/assets/shattered.png')`}} xs={3}>
      <SportTen/>
    </Col>
    <Col style={{backgroundColor:"black",backgroundImage: `url('/src/assets/shattered-dark.png')`}} xs={9}>
      <NewsFeed category="top" />
    </Col>
  </Row>
</Container> 
    </>
  );
}

export default Main;
