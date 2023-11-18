import React, { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import axios from "axios";
import Select from "react-select";
const showData = () => {
  const [options, setOptions] = useState<{ value: string; label: string }[]>(
    []
  );
  const [currentYear, setCurrentYear] = useState<any>("");
  const [previousYear, setPreviousYear] = useState<any>("");
  const [precedingYear, setPrecedingYear] = useState<any>("");
  const [disclosureData, setDisclosureData] = useState<any>();
  useEffect(() => {
    // Make a GET request to the API
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer 6437243509fa58a26d4c7af3",
    };
    axios
      .get(
        "https://loan.test.api.myfinalyst.com/loan/all?sortBy=createdAt&sort=-1",
        {
          headers: headers,
        }
      )
      .then((response) => {
        // Handle the response data
        console.log(response);
        response.data.loans.map((loan: any) => {
          setOptions((prevData) => [
            ...prevData,
            { value: loan._id, label: loan.name },
          ]);
        });
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching data:", error);
      });
  }, []);
  const handleInputChange = (field: any) => (selectedOption: any) => {
    if (field == "currentYear") {
      setCurrentYear(selectedOption.value);
    } else if (field == "previousYear") {
      setPreviousYear(selectedOption.value);
    } else if (field == "precedingYear") {
      setPrecedingYear(selectedOption.value);
    }
  };

  let headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer 6437243509fa58a26d4c7af3",
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    axios
      .get(
        "https://loan.test.api.myfinalyst.com/loan/disclosure?currentYear=" +
          currentYear +
          "&previousYear=" +
          previousYear +
          "&precedingYear=" +
          precedingYear,
        {
          headers: headers,
        }
      )
      .then((response) => {
        console.log(response);
        // navigate("/showData");
        setDisclosureData(response);
        // console.log(disclosureData);

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
      <Row style={{ marginTop: "5rem", marginBottom: "3rem" }}>
        <Col>
          <div>
            <label style={{ marginBottom: "5px" }}>
              <b>Current Year</b>
            </label>
            <Select
              onChange={handleInputChange("currentYear")}
              options={options}
            />
          </div>
        </Col>
        <Col>
          <div>
            <label style={{ marginBottom: "5px" }}>
              <b>Previous Year</b>
            </label>
            <Select
              onChange={handleInputChange("previousYear")}
              options={options}
            />
          </div>
        </Col>
        <Col>
          <div>
            <label style={{ marginBottom: "5px" }}>
              <b>Preceding Year</b>
            </label>
            <Select
              onChange={handleInputChange("precedingYear")}
              options={options}
            />
          </div>
        </Col>
        <Col style={{ alignSelf: "flex-end" }}>
          <Button
            onClick={handleSubmit}
            className="primary_btn"
            variant="primary"
          >
            Submit
          </Button>
        </Col>
      </Row>
      {disclosureData?.data.disclosures.map((disclosure: any) => {
        return (
          <div key={disclosure.end}>
            <p>
              <b>
                FY {disclosure.start}-{disclosure.end}
              </b>
            </p>
            {disclosure.tables.map((table: any) => {
              const tableHeadingKeys = Object.keys(table);

              return (
                <div className="table-container">
                  <table style={{ width: "100%", marginBottom: "3rem" }}>
                    <caption style={{ captionSide: "top" }}>
                      <b>{tableHeadingKeys[0]}</b>
                    </caption>
                    <thead>
                      <tr>
                        <th>Particulars</th>
                        {disclosure.IndASStages.map((heading: any) => {
                          return <th>{heading}</th>;
                        })}
                      </tr>
                    </thead>
                    <tbody>
                      {table[tableHeadingKeys[0]].map((row: any) => {
                        // console.log(row);
                        const rowKeys = Object.keys(row);
                        // console.log(rowKeys);
                        return (
                          <tr>
                            <th>{rowKeys[0]}</th>
                            {row[rowKeys[0]].map((value: any) => {
                              const valueKeys = Object.keys(value);
                              return <td>{value[valueKeys[0]]}</td>;
                            })}
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              );
            })}
          </div>
        );
      })}
    </Container>
  );
};

export default showData;
