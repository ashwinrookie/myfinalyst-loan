import { Button, Container } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
function MappingPage() {
  return (
    <>
      {localStorage.getItem("registerType") === "Receivable" && (
        <Container style={{ paddingTop: "5rem" }}>
          <Tabs
            defaultActiveKey="home"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Sheet 1">
              <Row style={{ marginTop: "3rem" }}>
                <Col style={{ padding: "0 7rem" }}>
                  <div style={{ marginBottom: "2rem" }}>
                    <label style={{ marginBottom: "5px" }}>
                      <b>Credit period</b>
                    </label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>

                  <div style={{ marginBottom: "2rem" }}>
                    <label style={{ marginBottom: "5px" }}>
                      <b>Invoice Amount</b>
                    </label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>

                  <div style={{ marginBottom: "2rem" }}>
                    <label style={{ marginBottom: "5px" }}>
                      <b>Invoice Date</b>
                    </label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>

                  <div style={{ marginBottom: "2rem" }}>
                    <label style={{ marginBottom: "5px" }}>
                      <b>Customer name</b>
                    </label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>

                  <div style={{ marginBottom: "2rem" }}>
                    <label style={{ marginBottom: "5px" }}>
                      <b>Invoice Amount</b>
                    </label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>
                </Col>
                <Col style={{ padding: "0 7rem" }}>
                  <div style={{ marginBottom: "2rem" }}>
                    <label style={{ marginBottom: "5px" }}>
                      <b>Invoice Amount</b>
                    </label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>

                  <div style={{ marginBottom: "2rem" }}>
                    <label style={{ marginBottom: "5px" }}>
                      <b>Invoice Amount</b>
                    </label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>

                  <div style={{ marginBottom: "2rem" }}>
                    <label style={{ marginBottom: "5px" }}>
                      <b>Invoice Amount</b>
                    </label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>
                  <Button className="primary_btn">Add column</Button>
                </Col>
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
        <Container style={{ paddingTop: "5rem" }}>
          <Tabs
            defaultActiveKey="home"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Sheet 1">
              <Row style={{ marginTop: "3rem" }}>
                <Col style={{ padding: "0 7rem" }}>
                  <div style={{ marginBottom: "2rem" }}>
                    <label style={{ marginBottom: "5px" }}>
                      <b>Credit period</b>
                    </label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>

                  <div style={{ marginBottom: "2rem" }}>
                    <label style={{ marginBottom: "5px" }}>
                      <b>Invoice Amount</b>
                    </label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>

                  <div style={{ marginBottom: "2rem" }}>
                    <label style={{ marginBottom: "5px" }}>
                      <b>Invoice Date</b>
                    </label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>

                  <div style={{ marginBottom: "2rem" }}>
                    <label style={{ marginBottom: "5px" }}>
                      <b>Customer name</b>
                    </label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>

                  <div style={{ marginBottom: "2rem" }}>
                    <label style={{ marginBottom: "5px" }}>
                      <b>Invoice Amount</b>
                    </label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>
                </Col>
                <Col style={{ padding: "0 7rem" }}>
                  <div style={{ marginBottom: "2rem" }}>
                    <label style={{ marginBottom: "5px" }}>
                      <b>Invoice Amount</b>
                    </label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>

                  <div style={{ marginBottom: "2rem" }}>
                    <label style={{ marginBottom: "5px" }}>
                      <b>Invoice Amount</b>
                    </label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>

                  <div style={{ marginBottom: "2rem" }}>
                    <label style={{ marginBottom: "5px" }}>
                      <b>Invoice Amount</b>
                    </label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>
                  <Button className="primary_btn">Add column</Button>
                </Col>
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

      {localStorage.getItem("registerType") === "Sales" && (
        <Container style={{ paddingTop: "5rem" }}>
          <Tabs
            defaultActiveKey="home"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Sheet 1">
              <Row style={{ marginTop: "3rem" }}>
                <Col style={{ padding: "0 7rem" }}>
                  <div style={{ marginBottom: "2rem" }}>
                    <label style={{ marginBottom: "5px" }}>
                      <b>Credit period</b>
                    </label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>

                  <div style={{ marginBottom: "2rem" }}>
                    <label style={{ marginBottom: "5px" }}>
                      <b>Invoice Amount</b>
                    </label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>

                  <div style={{ marginBottom: "2rem" }}>
                    <label style={{ marginBottom: "5px" }}>
                      <b>Invoice Date</b>
                    </label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>

                  <div style={{ marginBottom: "2rem" }}>
                    <label style={{ marginBottom: "5px" }}>
                      <b>Customer name</b>
                    </label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>

                  <div style={{ marginBottom: "2rem" }}>
                    <label style={{ marginBottom: "5px" }}>
                      <b>Invoice Amount</b>
                    </label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>
                </Col>
                <Col style={{ padding: "0 7rem" }}>
                  <div style={{ marginBottom: "2rem" }}>
                    <label style={{ marginBottom: "5px" }}>
                      <b>Invoice Amount</b>
                    </label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>

                  <div style={{ marginBottom: "2rem" }}>
                    <label style={{ marginBottom: "5px" }}>
                      <b>Invoice Amount</b>
                    </label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>

                  <div style={{ marginBottom: "2rem" }}>
                    <label style={{ marginBottom: "5px" }}>
                      <b>Invoice Amount</b>
                    </label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>
                  <Button className="primary_btn">Add column</Button>
                </Col>
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

      {localStorage.getItem("registerType") === "Purchases/Inventory" && (
        <Container style={{ paddingTop: "5rem" }}>
          <Tabs
            defaultActiveKey="home"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Sheet 1">
              <Row style={{ marginTop: "3rem" }}>
                <Col style={{ padding: "0 7rem" }}>
                  <div style={{ marginBottom: "2rem" }}>
                    <label style={{ marginBottom: "5px" }}>
                      <b>Credit period</b>
                    </label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>

                  <div style={{ marginBottom: "2rem" }}>
                    <label style={{ marginBottom: "5px" }}>
                      <b>Invoice Amount</b>
                    </label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>

                  <div style={{ marginBottom: "2rem" }}>
                    <label style={{ marginBottom: "5px" }}>
                      <b>Invoice Date</b>
                    </label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>

                  <div style={{ marginBottom: "2rem" }}>
                    <label style={{ marginBottom: "5px" }}>
                      <b>Customer name</b>
                    </label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>

                  <div style={{ marginBottom: "2rem" }}>
                    <label style={{ marginBottom: "5px" }}>
                      <b>Invoice Amount</b>
                    </label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>
                </Col>
                <Col style={{ padding: "0 7rem" }}>
                  <div style={{ marginBottom: "2rem" }}>
                    <label style={{ marginBottom: "5px" }}>
                      <b>Invoice Amount</b>
                    </label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>

                  <div style={{ marginBottom: "2rem" }}>
                    <label style={{ marginBottom: "5px" }}>
                      <b>Invoice Amount</b>
                    </label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>

                  <div style={{ marginBottom: "2rem" }}>
                    <label style={{ marginBottom: "5px" }}>
                      <b>Invoice Amount</b>
                    </label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>
                  <Button className="primary_btn">Add column</Button>
                </Col>
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

      {localStorage.getItem("registerType") === "FAR" && (
        <Container style={{ paddingTop: "5rem" }}>
          <Tabs
            defaultActiveKey="home"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="home" title="Sheet 1">
              <Row style={{ marginTop: "3rem" }}>
                <Col style={{ padding: "0 7rem" }}>
                  <div style={{ marginBottom: "2rem" }}>
                    <label style={{ marginBottom: "5px" }}>
                      <b>Credit period</b>
                    </label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>

                  <div style={{ marginBottom: "2rem" }}>
                    <label style={{ marginBottom: "5px" }}>
                      <b>Invoice Amount</b>
                    </label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>

                  <div style={{ marginBottom: "2rem" }}>
                    <label style={{ marginBottom: "5px" }}>
                      <b>Invoice Date</b>
                    </label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>

                  <div style={{ marginBottom: "2rem" }}>
                    <label style={{ marginBottom: "5px" }}>
                      <b>Customer name</b>
                    </label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>

                  <div style={{ marginBottom: "2rem" }}>
                    <label style={{ marginBottom: "5px" }}>
                      <b>Invoice Amount</b>
                    </label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>
                </Col>
                <Col style={{ padding: "0 7rem" }}>
                  <div style={{ marginBottom: "2rem" }}>
                    <label style={{ marginBottom: "5px" }}>
                      <b>Invoice Amount</b>
                    </label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>

                  <div style={{ marginBottom: "2rem" }}>
                    <label style={{ marginBottom: "5px" }}>
                      <b>Invoice Amount</b>
                    </label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>

                  <div style={{ marginBottom: "2rem" }}>
                    <label style={{ marginBottom: "5px" }}>
                      <b>Invoice Amount</b>
                    </label>
                    <Form.Select aria-label="Default select example">
                      <option>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </Form.Select>
                  </div>
                  <Button className="primary_btn">Add column</Button>
                </Col>
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
    </>
  );
}

export default MappingPage;
