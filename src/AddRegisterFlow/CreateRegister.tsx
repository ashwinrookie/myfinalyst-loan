import { Button, Container, Table } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { BsTrashFill } from "react-icons/bs";

import { useState } from "react";

function CreatRegister() {
  const [assetBlocks, setAssetBlocks] = useState([1]);
  const [projectsArray, setProjectArray] = useState([
    {
      inoiceDate: "23/3/23",
      customerName: "Sezad",
      invoiceAmount: "2300 Rs",
      outstandingAmtinRepCountry: "340 $",
      creditPeriod: "23/4/23",
      natureOfReceivables: "Securred",
    },
  ]);

  const handleAddLine = () => {
    console.log("hi");

    setProjectArray([
      ...projectsArray,
      {
        inoiceDate: "",
        customerName: "",
        invoiceAmount: "",
        outstandingAmtinRepCountry: "",
        creditPeriod: "",
        natureOfReceivables: "",
      },
    ]);
  };
  const handleAddBlock = () => {
    setAssetBlocks([...assetBlocks, 2]);
  };
  const handleDeleteBlock = (e: number) => {
    setAssetBlocks((currentArray) => {
      return currentArray.filter((i) => i !== e);
    });
  };
  return (
    <>
      {localStorage.getItem("registerType") === "Receivable" && (
        <Container style={{ paddingTop: "5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <b style={{ fontSize: "20px" }}>
              Create {localStorage.getItem("registerType")} Register
            </b>
          </div>
          <Table bordered hover>
            <thead>
              <tr>
                <th></th>
                <th>S.No</th>
                <th>Invoice Date</th>
                <th>Invoice Number</th>
                <th>Customer ID</th>
                <th>Outstanding Amt in rep.currency</th>
                <th>Due Date</th>
                <th>Invoice Amount</th>
              </tr>
            </thead>
            <tbody>
              {projectsArray.map((data) => {
                return (
                  <tr key={data.customerName}>
                    <td>
                      <Form>
                        <Form.Check
                          type="checkbox"
                          id="exampleCheckbox"
                          label="Select"
                        />
                      </Form>
                    </td>
                    <td>1</td>
                    <td>{data.inoiceDate}</td>
                    <td>{data.customerName}</td>
                    <td>{data.invoiceAmount}</td>
                    <td>{data.outstandingAmtinRepCountry}</td>
                    <td>{data.creditPeriod}</td>
                    <td>{data.natureOfReceivables}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <Button
            style={{ background: "green", width: "100px", border: "none" }}
            onClick={() => handleAddLine()}
          >
            +
          </Button>
        </Container>
      )}

      {localStorage.getItem("registerType") === "Payable" && (
        <Container style={{ paddingTop: "5rem" }}>
          <div style={{ textAlign: "center", marginBottom: "2rem" }}>
            <b style={{ fontSize: "20px" }}>
              Create {localStorage.getItem("registerType")} Register
            </b>
          </div>
          <Table bordered hover>
            <thead>
              <tr>
                <th></th>
                <th>S.No</th>
                <th>Invoice Date</th>
                <th>Invoice Number</th>
                <th>Supplier ID</th>
                <th>Outstanding Amt in rep.currency</th>
                <th>Due Date</th>
                <th>Invoice Amount</th>
              </tr>
            </thead>
            <tbody>
              {projectsArray.map((data) => {
                return (
                  <tr key={data.customerName}>
                    <td>
                      <Form>
                        <Form.Check
                          type="checkbox"
                          id="exampleCheckbox"
                          label="Select"
                        />
                      </Form>
                    </td>
                    <td>1</td>
                    <td>{data.inoiceDate}</td>
                    <td>{data.customerName}</td>
                    <td>{data.invoiceAmount}</td>
                    <td>{data.outstandingAmtinRepCountry}</td>
                    <td>{data.creditPeriod}</td>
                    <td>{data.natureOfReceivables}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <Button
            style={{ background: "green", width: "100px", border: "none" }}
            onClick={() => handleAddLine()}
          >
            +
          </Button>
        </Container>
      )}

      {localStorage.getItem("registerType") === "Sales" && (
        <Container style={{ paddingTop: "5rem" }}>
          <Table bordered hover>
            <thead>
              <tr>
                <th></th>
                <th>S.No</th>
                <th>Invoice Date</th>
                <th>Customer Name</th>
                <th>Invoice Amount</th>
                <th>Outstanding Amt in rep.currency</th>
                <th>Credit Period</th>
                <th>Nature of receivables</th>
              </tr>
            </thead>
            <tbody>
              {projectsArray.map((data) => {
                return (
                  <tr key={data.customerName}>
                    <td>
                      <Form>
                        <Form.Check
                          type="checkbox"
                          id="exampleCheckbox"
                          label="Select"
                        />
                      </Form>
                    </td>
                    <td>1</td>
                    <td>{data.inoiceDate}</td>
                    <td>{data.customerName}</td>
                    <td>{data.invoiceAmount}</td>
                    <td>{data.outstandingAmtinRepCountry}</td>
                    <td>{data.creditPeriod}</td>
                    <td>{data.natureOfReceivables}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <Button
            style={{ background: "green", width: "100px", border: "none" }}
            onClick={() => handleAddLine()}
          >
            +
          </Button>
        </Container>
      )}

      {localStorage.getItem("registerType") === "Purchases/Inventory" && (
        <Container style={{ paddingTop: "5rem" }}>
          <Table bordered hover>
            <thead>
              <tr>
                <th></th>
                <th>S.No</th>
                <th>Invoice Date</th>
                <th>Customer Name</th>
                <th>Invoice Amount</th>
                <th>Outstanding Amt in rep.currency</th>
                <th>Credit Period</th>
                <th>Nature of receivables</th>
              </tr>
            </thead>
            <tbody>
              {projectsArray.map((data) => {
                return (
                  <tr key={data.customerName}>
                    <td>
                      <Form>
                        <Form.Check
                          type="checkbox"
                          id="exampleCheckbox"
                          label="Select"
                        />
                      </Form>
                    </td>
                    <td>1</td>
                    <td>{data.inoiceDate}</td>
                    <td>{data.customerName}</td>
                    <td>{data.invoiceAmount}</td>
                    <td>{data.outstandingAmtinRepCountry}</td>
                    <td>{data.creditPeriod}</td>
                    <td>{data.natureOfReceivables}</td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
          <Button
            style={{ background: "green", width: "100px", border: "none" }}
            onClick={() => handleAddLine()}
          >
            +
          </Button>
        </Container>
      )}

      {localStorage.getItem("registerType") === "FAR" && (
        <Container style={{ paddingTop: "5rem" }}>
          <h5>
            <b>Create Fixed assets register</b>
          </h5>
          <p>
            Please ensure that each asset block created is similar in terms of
            useful life and depreciation policy.
          </p>
          {assetBlocks.map((data) => {
            return (
              <Row key={data} style={{ marginTop: "1rem" }}>
                <Col>
                  <Form style={{ width: "70%" }}>
                    <Form.Group className="mb-3" controlId="formRegisterName">
                      <Form.Control
                        type="text"
                        placeholder="Enter block of asset"
                      />
                    </Form.Group>
                  </Form>
                </Col>
                <Col>
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <Button>Asset details</Button>
                    <BsTrashFill
                      onClick={() => handleDeleteBlock(data)}
                      style={{
                        marginLeft: "1rem",
                        height: "35px",
                        width: "25px",
                        cursor: "pointer",
                      }}
                    />
                  </div>
                </Col>
              </Row>
            );
          })}

          <Button
            onClick={() => handleAddBlock()}
            style={{ background: "green", border: "none" }}
          >
            Add new block
          </Button>
        </Container>
      )}
    </>
  );
}

export default CreatRegister;
