import { Container } from "react-bootstrap";

function MappingPage() {
  return (
    <>
      {localStorage.getItem("registerType") === "Receivable" && (
        <Container>hi Receivable</Container>
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
