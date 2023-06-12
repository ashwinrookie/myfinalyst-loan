import { Button, Container } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
function MappingPage() {
  return (
    <>
      <Container style={{ paddingTop: "3rem", paddingBottom: "1rem" }}>
        <h5>Map {localStorage.getItem("registerType")} register</h5>
      </Container>
      {localStorage.getItem("registerType") === "Receivable" && (
        <Container>
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
                      <b>Customer ID</b>
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
                      <b>Outstanding amount in reporting currency</b>
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
                      <b>Nature of receivables</b>
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
                      <b>Currency</b>
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
                      <b>Exchange rates used</b>
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
        <Container>
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
                      <b>Invoice number</b>
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
                      <b>Supplier Name</b>
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
                      <b>Supplier ID</b>
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
                      <b>Outstanding amount in reporting currency</b>
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
                      <b>Credit period</b>
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
                      <b>MSME Status</b>
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
                      <b>Currency</b>
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
                      <b>Exchange rates used</b>
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
        <Container>
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
                      <b>Invoice date</b>
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
                      <b>Invoice Number</b>
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
                      <b>Customer Code</b>
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
                      <b>Item code/Product Sold</b>
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
                      <b>Quantity sold</b>
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
                      <b>Item description</b>
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
                      <b>Segment</b>
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
                      <b>Invoice value</b>
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
                      <b>Sales value</b>
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
                      <b>Tax value</b>
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
                      <b>Invoice value</b>
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
                      <b>Type of sale</b>
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
                      <b>Currency</b>
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
                      <b>Exchange rate</b>
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
        <Container>
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
                      <b>Invoice date</b>
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
                      <b>Invoice Number</b>
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
                      <b>Supplier Code</b>
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
                      <b>Supplier name</b>
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
                      <b>Inventory part</b>
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
                      <b>Inventory quantity</b>
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
                      <b>Purchase amount</b>
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
                      <b>Rate</b>
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
                      <b>Tax</b>
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
                      <b>Currency</b>
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
                      <b>Exchange rates</b>
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
                      <b>Amount is base currency</b>
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
                      <b>Invoice value</b>
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
        <Container>
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
                      <b>Asset ID</b>
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
                      <b>Dep rate</b>
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
                      <b>Business area</b>
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
                      <b>Asset description</b>
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
                      <b>Block of asset</b>
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
                      <b>Capitalized on</b>
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
                      <b>Deactivation on</b>
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
                      <b>Book value of deletion</b>
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
                      <b>Opening gross block</b>
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
                      <b>Opening accumulated description</b>
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
                      <b>Terminal value of asset</b>
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
                      <b>Opening book value</b>
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
                      <b>Acquisition cost for current additions</b>
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
                      <b>Depreciation charge for the period</b>
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
                      <b>Deletion gross block</b>
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
                      <b>Deletion depreciation</b>
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
