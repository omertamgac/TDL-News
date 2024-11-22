import { useSearchParams } from "react-router-dom";
import NewsFeed from "../Components/NewsFeed";
import { Container, Row, Col } from "react-bootstrap";

function CategoryResult() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "top";

  return (
    <Container fluid>
      <Row>
        <Col
          style={{
            backgroundColor: "black",
            backgroundImage: `url('/src/assets/shattered-dark.png')`
          }}
        >
          <NewsFeed category={category} />
        </Col>
      </Row>
    </Container>
  );
}

export default CategoryResult;
