import { Container, Row, Col } from "react-bootstrap";

import HomeSidebar from "./HomeSidebar";

const Homepage = () => {
  return (
    <div>
      <Container className="container-fluid main-container">
        <Row className="row">
          <Col className="column12 col-lg-3">
            <HomeSidebar/>
          </Col>
          <Col className="column12 col-sm-12 col-lg-9">
          </Col>
        </Row>
      </Container>
    </div>
  );
};
export default Homepage;
