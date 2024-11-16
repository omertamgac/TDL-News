import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./Components/MyNavBar";
import MyCard from "./Components/Card";
import Deneme from "./Components/deneme";
import { Container, Row, Col } from 'react-bootstrap';





function App() {
  return (
    <>
      <Navbar />
      <Container fluid>
  <Row>
    <Col style={{ backgroundColor: '#f8d7da' }} xs={3}>
      {/* %25 genişlik */}
      <MyCard
        width={"70%"}
        src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        name="Başlığımız"
        text="Deneme yazısı"
      />
      <MyCard
         width={"70%"}
        src="https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        name="Başlığımız"
        text="Deneme yazısı"
      />
    </Col>
    <Col style={{ backgroundColor: '#d4edda' }} xs={8}>
      {/* %75 genişlik */}
      <Deneme />
    </Col>
  </Row>
</Container>

    </>
  );
}

export default App;
