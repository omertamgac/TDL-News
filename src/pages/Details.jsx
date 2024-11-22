import { Card, Container, Row,Col } from "react-bootstrap";
import  Navbar  from "../Components/MyNavBar";
import { useLocation } from "react-router-dom";

import "../style/Details.css"; 
const Details=()=> {
  const location = useLocation();
  const article = location.state;
 
  return (
    <>
      <Navbar/>
      <Container fluid>
      <Row className="justify-content-center ">
        <Col md={12} className="position-relative modifiedRow"> 
          <img
              src={article.urlToImage}
              style={{ width: "100%", borderRadius: "8px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)" }}
              className="detail-image"

          />
          <div className="overlay-text">
              <h1>{article.title}</h1>
          </div>
          </Col>
       </Row>
       <Row>
        <Col md={3} sm={12} className="MidLeft">
            <Card style={{borderRadius:"20px"}}>
                <Card.Body>
                  <Row md={12}>
                    <Col md={5} sm={6} >
                          <span style={{fontSize:"15px",fontWeight:"bold" ,float:"right"}}>Source:</span> 
                          <br />
                          <span style={{fontSize:"15px",fontWeight:"bold",float:"right"}}>Autohor:</span> 
                    </Col>
                    <Col md={7} sm={6}>
                       <span>{article.source.name}</span> 
                        <br />
                        <span>{article.author}</span>
                    </Col>
                  </Row>
                </Card.Body>
            </Card>
        </Col>
       
        <Col md={9} sm={12} className="MidRight">
          <Card  style={{borderRadius:"20px"}}> 
            <Card.Body>
              <Card.Text>{article.content}</Card.Text>
            </Card.Body>
          </Card>
        </Col>
       </Row>
     
      </Container>
    </>
  )
}

export default Details
