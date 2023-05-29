import { Button, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function CreatRegister() {
  return (
    <>
      {localStorage.getItem("registerType") === "Receivable" && (
        <Container>
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
            <Button className="primary_btn" variant="primary" type="submit">
              Submit
            </Button>
          </Form>
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

export default CreatRegister;
