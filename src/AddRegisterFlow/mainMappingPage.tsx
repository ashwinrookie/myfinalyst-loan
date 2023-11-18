import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import axios from "axios";
import Select from "react-select";
import { useNavigate } from "react-router-dom";

interface KeyValuePair {
  [key: string]: string;
}
const MainMappingPage = () => {
  const loanId = localStorage.getItem("loanId");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  const [options, setOptions] = useState<{ value: string; label: string }[]>(
    []
  );
  let keyValuePairs: KeyValuePair = {};
  useEffect(() => {
    // Make a GET request to the API
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer 6437243509fa58a26d4c7af3",
    };
    axios
      .get("https://loan.test.api.myfinalyst.com/loan/mapping?id=" + loanId, {
        headers: headers,
      })
      .then((response) => {
        // Handle the response data
        console.log(response);
        response.data.fields.map((field: any) => {
          setOptions((prevData) => [
            ...prevData,
            { value: field, label: field },
          ]);
        });
        setLoading(false);
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);
  const handleInputChange = (field: string) => (selectedOption: any) => {
    keyValuePairs = Object.assign({}, keyValuePairs, {
      [field]: selectedOption.value,
    });
    console.log(keyValuePairs);
  };
  let headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer 6437243509fa58a26d4c7af3",
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    axios
      .patch(
        "https://loan.test.api.myfinalyst.com/loan/mapping?id=" + loanId,
        keyValuePairs,
        {
          headers: headers,
        }
      )
      .then((response) => {
        console.log(response);
        navigate("/mappingPage");

        // Handle the response
      })
      .catch((error) => {
        // Handle errors
        console.log(error);
        alert(error.response.data.error);
      });
  };

  return (
    <Container>
      <Row style={{ marginTop: "3rem" }}>
        <Col style={{ padding: "0 2rem" }}>
          <div style={{ marginBottom: "2rem" }}>
            <label style={{ marginBottom: "5px" }}>
              <b>Customer ID*</b>
            </label>
            <Select
              onChange={handleInputChange("customerID")}
              options={options}
            />
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <label style={{ marginBottom: "5px" }}>
              <b>Product name*</b>
            </label>
            <Select
              onChange={handleInputChange("productName")}
              options={options}
            />
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <label style={{ marginBottom: "5px" }}>
              <b>Sanction Amount*</b>
            </label>
            <Select
              onChange={handleInputChange("sanctionAmount")}
              options={options}
            />
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <label style={{ marginBottom: "5px" }}>
              <b>Current/Revised ROI*</b>
            </label>
            <Select
              onChange={handleInputChange("currentOrRevisedROI")}
              options={options}
            />
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <label style={{ marginBottom: "5px" }}>
              <b>Overdue Days*</b>
            </label>
            <Select
              onChange={handleInputChange("overdueDays")}
              options={options}
            />
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <label style={{ marginBottom: "5px" }}>
              <b>Interest/PEMI overdue*</b>
            </label>
            <Select
              onChange={handleInputChange("interestOrPEMIOverdue")}
              options={options}
            />
          </div>
          <div style={{ marginBottom: "2rem" }}>
            <label style={{ marginBottom: "5px" }}>
              <b>Asset Classification as per RBI*</b>
            </label>
            <Select
              onChange={handleInputChange("assetClassificationRBI")}
              options={options}
            />
          </div>
          <div style={{ marginBottom: "2rem" }}>
            <label style={{ marginBottom: "5px" }}>
              <b>Provision % as per Ind AS*</b>
            </label>
            <Select
              onChange={handleInputChange("provisionPercentageIndAS")}
              options={options}
            />
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <label style={{ marginBottom: "5px" }}>
              <b>Outstanding as per Ind AS*</b>
            </label>
            <Select
              onChange={handleInputChange("outstandingIndAS")}
              options={options}
            />
          </div>
          {/* <Button disabled className="secondary_btn">
            Add column
          </Button> */}
        </Col>
        <Col style={{ padding: "0 2rem" }}>
          <div style={{ marginBottom: "2rem" }}>
            <label style={{ marginBottom: "5px" }}>
              <b>Customer name*</b>
            </label>
            <Select
              onChange={handleInputChange("customerName")}
              options={options}
            />
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <label style={{ marginBottom: "5px" }}>
              <b>Loan ID*</b>
            </label>
            <Select onChange={handleInputChange("loanID")} options={options} />
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <label style={{ marginBottom: "5px" }}>
              <b>Sanction Date*</b>
            </label>
            <Select
              onChange={handleInputChange("sanctionDate")}
              options={options}
            />
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <label style={{ marginBottom: "5px" }}>
              <b>Sanctioned no.of months*</b>
            </label>
            <Select
              onChange={handleInputChange("sanctionedNumberOfMonths")}
              options={options}
            />
          </div>
          <div style={{ marginBottom: "2rem" }}>
            <label style={{ marginBottom: "5px" }}>
              <b>Loan Outstanding*</b>
            </label>
            <Select
              onChange={handleInputChange("loanOutstanding")}
              options={options}
            />
          </div>
          <div style={{ marginBottom: "2rem" }}>
            <label style={{ marginBottom: "5px" }}>
              <b>Processing fee collected*</b>
            </label>
            <Select
              onChange={handleInputChange("processingFeesCollected")}
              options={options}
            />
          </div>
          <div style={{ marginBottom: "2rem" }}>
            <label style={{ marginBottom: "5px" }}>
              <b>Asset Classification as per Ind AS*</b>
            </label>
            <Select
              onChange={handleInputChange("assetClassificationIndAS")}
              options={options}
            />
          </div>
          <div style={{ marginBottom: "2rem" }}>
            <label style={{ marginBottom: "5px" }}>
              <b>Provision Amount as per Ind AS*</b>
            </label>
            <Select
              onChange={handleInputChange("provisionAmountIndAS")}
              options={options}
            />
          </div>
          <div style={{ marginBottom: "2rem" }}>
            <label style={{ marginBottom: "5px" }}>
              <b>O/s Undrawn Commitment*</b>
            </label>
            <Select
              onChange={handleInputChange("outstandingUndrawnCommitment")}
              options={options}
            />
          </div>
        </Col>
        <Col style={{ padding: "0 2rem" }}>
          <div style={{ marginBottom: "2rem" }}>
            <label style={{ marginBottom: "5px" }}>
              <b>Product ID*</b>
            </label>
            <Select
              onChange={handleInputChange("productID")}
              options={options}
            />
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <label style={{ marginBottom: "5px" }}>
              <b>Loan name*</b>
            </label>
            <Select
              onChange={handleInputChange("loanName")}
              options={options}
            />
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <label style={{ marginBottom: "5px" }}>
              <b>Sanctioned ROI*</b>
            </label>
            <Select
              onChange={handleInputChange("sanctionedROI")}
              options={options}
            />
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <label style={{ marginBottom: "5px" }}>
              <b>Remaining no.of months*</b>
            </label>
            <Select
              onChange={handleInputChange("remainingNumberOfMonths")}
              options={options}
            />
          </div>
          <div style={{ marginBottom: "2rem" }}>
            <label style={{ marginBottom: "5px" }}>
              <b>Principle Overdue*</b>
            </label>
            <Select
              onChange={handleInputChange("principalOverdue")}
              options={options}
            />
          </div>
          <div style={{ marginBottom: "2rem" }}>
            <label style={{ marginBottom: "5px" }}>
              <b>Ind AS processing fees O/s*</b>
            </label>
            <Select
              onChange={handleInputChange("indASProcessingFees")}
              options={options}
            />
          </div>
          <div style={{ marginBottom: "2rem" }}>
            <label style={{ marginBottom: "5px" }}>
              <b>Provision % as per RBI*</b>
            </label>
            <Select
              onChange={handleInputChange("provisionPercentageRBI")}
              options={options}
            />
          </div>
          <div style={{ marginBottom: "2rem" }}>
            <label style={{ marginBottom: "5px" }}>
              <b>Provision Amount as per RBI*</b>
            </label>
            <Select
              onChange={handleInputChange("provisionAmountRBI")}
              options={options}
            />
          </div>
          <div style={{ marginBottom: "2rem" }}>
            <label style={{ marginBottom: "5px" }}>
              <b>Cumulative Disbursement*</b>
            </label>
            <Select
              onChange={handleInputChange("cumulativeDisbursement")}
              options={options}
            />
          </div>
        </Col>
      </Row>
      <div style={{ textAlign: "center" }}>
        <Button
          onClick={handleSubmit}
          style={{ width: "180px" }}
          className="primary_btn"
        >
          <b>Continue</b>
        </Button>
      </div>
    </Container>
  );
};

export default MainMappingPage;
