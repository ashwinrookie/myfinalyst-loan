import { Container } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
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
            <Tab eventKey="home" title="Sheet 1"></Tab>
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
