import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

function BasicInfo() {
  return (
    <Container>
      <div
        style={{ display: "flex", justifyContent: "right", marginTop: "5rem" }}
      >
        <Button className="primary_btn">Back</Button>
      </div>
      <Form style={{ width: "30%", margin: "auto" }}>
        <Form.Group className="mb-3" controlId="formRegisterName">
          <Form.Label>Register Name</Form.Label>
          <Form.Control type="text" placeholder="Enter register name" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formCompanyName">
          <Form.Label>Company Name</Form.Label>
          <Form.Control type="text" placeholder="Enter company name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Link Preset</Form.Label>
          <Form.Select>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </Form.Select>
        </Form.Group>
        <Row>
          <Col style={{ textAlign: "center" }}>
            <Button className="primary_btn" variant="primary" type="submit">
              Create Register <br />
              <i>Create the register is MyFinalyst</i>
            </Button>
          </Col>
          <Col style={{ textAlign: "center" }}>
            <Link to={"/uploadPage"}>
              <Button className="primary_btn" variant="primary" type="submit">
                Upload Register <br />
                <i>Upload excel/csv files with the list of</i>
              </Button>
            </Link>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default BasicInfo;
