import { Container } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
function MappingPage() {
  return (
    <>
      {localStorage.getItem("registerType") === "Receivable" && (
        <Container>
          <Tabs
            defaultActiveKey="home"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Sheet 1">
              <Row style={{ marginTop: "3rem" }}>
                <Col style={{ padding: "0 6rem" }}>
                  <label>Invoice Amount</label>
                  <Form.Select aria-label="Default select example">
                    <option>Open this select menu</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </Form.Select>
                </Col>
                <Col></Col>
              </Row>
            </Tab>
            <Tab eventKey="profile" title="Sheet 2">
              Tab content for Profile
            </Tab>
            <Tab eventKey="contact" title="Sheet 3">
              Tab content for Contact
            </Tab>
          </Tabs>
        </Container>
      )}

      {localStorage.getItem("registerType") === "Payable" && (
        <Container>hi Payable</Container>
      )}

      {localStorage.getItem("registerType") === "Sales" && (
        <Container>hi Sales</Container>
      )}

      {localStorage.getItem("registerType") === "Purchases/Inventory" && (
        <Container>hi Pur</Container>
      )}
    </>
  );
}

export default MappingPage;
