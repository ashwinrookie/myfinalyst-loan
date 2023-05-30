import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function CreatRegister() {
  return (
    <>
      {localStorage.getItem("registerType") === "Receivable" && (
        <Container style={{ paddingTop: "5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <b style={{ fontSize: "20px" }}>
              Create {localStorage.getItem("registerType")} Register
            </b>
          </div>
          <Form style={{ width: "50%", margin: "auto" }}>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formInvoiceDate">
                  <Form.Label>Invoice Date</Form.Label>
                  <Form.Control type="text" placeholder="Enter Invoice Date" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formInvoiceNumber">
                  <Form.Label>Invoice Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Invoice Number"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formCustomerID">
                  <Form.Label>Customer ID</Form.Label>
                  <Form.Control type="text" placeholder="Enter Customer ID" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formOutstandingAmount">
                  <Form.Label>
                    Outstanding Amount in reporting currency
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Invoice Number"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formInvoiceAmount">
                  <Form.Label>Invoice Amount</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Invoice Amount"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formDueDate">
                  <Form.Label>Due Date</Form.Label>
                  <Form.Control type="text" placeholder="Enter Due Date" />
                </Form.Group>
              </Col>
            </Row>

            <Button className="primary_btn" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
      )}

      {localStorage.getItem("registerType") === "Payable" && (
        <Container style={{ paddingTop: "5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <b style={{ fontSize: "20px" }}>
              Create {localStorage.getItem("registerType")} Register
            </b>
          </div>
          <Form style={{ width: "50%", margin: "auto" }}>
            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formInvoiceDate">
                  <Form.Label>Invoice Date</Form.Label>
                  <Form.Control type="text" placeholder="Enter Invoice Date" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formInvoiceNumber">
                  <Form.Label>Invoice Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Invoice Number"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formSupplierID">
                  <Form.Label>Supplier ID</Form.Label>
                  <Form.Control type="text" placeholder="Enter Supplier ID" />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3" controlId="formOutstandingAmount">
                  <Form.Label>
                    Outstanding Amount in reporting currency
                  </Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Invoice Number"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formInvoiceAmount">
                  <Form.Label>Invoice Amount</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter Invoice Amount"
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formDueDate">
                  <Form.Label>Due Date</Form.Label>
                  <Form.Control type="text" placeholder="Enter Due Date" />
                </Form.Group>
              </Col>
            </Row>

            <Button className="primary_btn" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Container>
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

export default CreatRegister;
