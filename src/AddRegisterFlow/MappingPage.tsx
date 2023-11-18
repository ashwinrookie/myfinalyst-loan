import { Button, Container } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import { useEffect, useState } from "react";
import Select from "react-select";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function MappingPage() {
  const loanId = localStorage.getItem("loanId");
  const navigate = useNavigate();

  const [formdata, setFormData] = useState({
    RBIStages: [
      {
        key: "",
        values: [""],
      },
    ],
    IndASStages: [
      {
        key: "",
        values: [""],
      },
    ],
    productClassificationStages: [
      {
        key: "",
        values: [""],
      },
    ],
  });
  const [rbiOptions, setrbiOptions] = useState<
    { value: string; label: string }[]
  >([]);
  const [indAsOptions, setindAsOptions] = useState<
    { value: string; label: string }[]
  >([]);
  const [productOptions, setproductOptions] = useState<
    { value: string; label: string }[]
  >([]);
  const [newFieldName, setNewFieldName] = useState("");
  const [isAddingNewField, setIsAddingNewField] = useState(false);
  const [rbiFields, setRbiFields] = useState([
    "Standard",
    "Sub-Standard",
    "Doubtful 1",
    "Doubtful 2",
    "Doubtful 3",
  ]);
  const [indAsFields, setIndAsFields] = useState([
    "Stage 1",
    "Stage 2",
    "Stage 3",
  ]);
  const [productFields, setProductFields] = useState([
    "Home Loan",
    "Home Equity",
  ]);
  useEffect(() => {
    // Make a GET request to the API
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer 6437243509fa58a26d4c7af3",
    };
    axios
      .get(
        "https://loan.test.api.myfinalyst.com/loan/submapping?id=" +
          loanId +
          "&classification=RBI",
        {
          headers: headers,
        }
      )
      .then((response) => {
        // Handle the response data
        console.log(response);
        response.data.fields.map((field: any) => {
          setrbiOptions((prevData) => [
            ...prevData,
            { value: field, label: field },
          ]);
        });
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching data:", error);
      });
  }, []);
  useEffect(() => {
    // Make a GET request to the API
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer 6437243509fa58a26d4c7af3",
    };
    axios
      .get(
        "https://loan.test.api.myfinalyst.com/loan/submapping?id=" +
          loanId +
          "&classification=IndAS",
        {
          headers: headers,
        }
      )
      .then((response) => {
        // Handle the response data
        console.log(response);
        response.data.fields.map((field: any) => {
          setindAsOptions((prevData) => [
            ...prevData,
            { value: field, label: field },
          ]);
        });
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching data:", error);
      });
  }, []);
  useEffect(() => {
    // Make a GET request to the API
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer 6437243509fa58a26d4c7af3",
    };
    axios
      .get(
        "https://loan.test.api.myfinalyst.com/loan/submapping?id=" +
          loanId +
          "&classification=productClassification",
        {
          headers: headers,
        }
      )
      .then((response) => {
        // Handle the response data
        console.log(response);
        response.data.fields.map((field: any) => {
          setproductOptions((prevData) => [
            ...prevData,
            { value: field, label: field },
          ]);
        });
      })
      .catch((error) => {
        // Handle errors
        console.error("Error fetching data:", error);
      });
  }, []);
  const handleInputChange = (field: any) => (selectedOption: any) => {
    console.log(field, selectedOption);
    // console.log(formdata);
    const valuesArry = [];
    for (const value of selectedOption) {
      console.log(value);
      valuesArry.push(value.value);
    }
    let existingObjIndex: any;
    if (field[1] === "rbi") {
      existingObjIndex = formdata.RBIStages.findIndex(
        (obj) => obj.key === field[0]
      );
    } else if (field[1] === "indAS") {
      existingObjIndex = formdata.IndASStages.findIndex(
        (obj) => obj.key === field[0]
      );
    } else if (field[1] === "product") {
      existingObjIndex = formdata.productClassificationStages.findIndex(
        (obj) => obj.key === field[0]
      );
    }

    if (existingObjIndex !== -1) {
      // Update values if the key already exists
      if (field[1] === "rbi") {
        formdata.RBIStages[existingObjIndex].values = valuesArry;
      } else if (field[1] === "indAS") {
        formdata.IndASStages[existingObjIndex].values = valuesArry;
      } else if (field[1] === "product") {
        formdata.productClassificationStages[existingObjIndex].values =
          valuesArry;
      }
    } else {
      // Add a new object if the key doesn't exist
      const obj = {
        key: field[0],
        values: valuesArry,
      };

      if (field[1] === "rbi") {
        formdata.RBIStages.push(obj);
      } else if (field[1] === "indAS") {
        formdata.IndASStages.push(obj);
      } else if (field[1] === "product") {
        formdata.productClassificationStages.push(obj);
      }

      console.log(obj);
    }
    console.log(formdata);
  };

  const handleAddField = (classification: any) => {
    if (classification === "rbi") {
      if (newFieldName) {
        setRbiFields([...rbiFields, newFieldName]);
        setNewFieldName("");
        setIsAddingNewField(false); // Hide the new field input
      }
    } else if (classification === "indAS") {
      if (newFieldName) {
        setIndAsFields([...indAsFields, newFieldName]);
        setNewFieldName("");
        setIsAddingNewField(false); // Hide the new field input
      }
    } else if (classification === "product") {
      if (newFieldName) {
        setProductFields([...productFields, newFieldName]);
        setNewFieldName("");
        setIsAddingNewField(false); // Hide the new field input
      }
    }
  };
  let headers = {
    "Content-Type": "application/json",
    Authorization: "Bearer 6437243509fa58a26d4c7af3",
  };
  const handleSubmit = async (event: any) => {
    if (formdata.RBIStages[0].key == "") {
      formdata.RBIStages.shift();
    }
    if (formdata.IndASStages[0].key == "") {
      formdata.IndASStages.shift();
    }
    if (formdata.productClassificationStages[0].key == "") {
      formdata.productClassificationStages.shift();
    }
    event.preventDefault();
    axios
      .patch(
        "https://loan.test.api.myfinalyst.com/loan/submapping?id=" + loanId,
        formdata,
        {
          headers: headers,
        }
      )
      .then((response) => {
        console.log(response);
        navigate("/showData");

        // Handle the response
      })
      .catch((error) => {
        // Handle errors
        console.log(error);
        alert(error.response.data.error);
      });
  };

  return (
    <>
      <Container style={{ paddingTop: "3rem", paddingBottom: "1rem" }}>
        <h5>Submapping Loan register</h5>
      </Container>
      <Container style={{ paddingBottom: "2rem" }}>
        <Tabs
          defaultActiveKey="home"
          id="uncontrolled-tab-example"
          className="mb-3"
        >
          <Tab eventKey="home" title="Asset Classification as per RBI">
            <Row style={{ marginTop: "3rem" }}>
              <Col style={{ padding: "0 1rem" }}>
                {rbiFields.map((field: any) => {
                  return (
                    <div key={field} style={{ marginBottom: "2rem" }}>
                      <label style={{ marginBottom: "5px" }}>
                        <b>{field}</b>
                      </label>
                      <Select
                        onChange={handleInputChange([field, "rbi"])}
                        options={rbiOptions}
                        isMulti
                      />
                    </div>
                  );
                })}
                {isAddingNewField ? ( // Show the new field input when isAddingNewField is true
                  <div>
                    <input
                      style={{ marginRight: "1rem" }}
                      type="text"
                      placeholder="Enter field name"
                      value={newFieldName}
                      onChange={(e) => setNewFieldName(e.target.value)}
                    />
                    <button
                      className="secondary_btn"
                      onClick={() => handleAddField("rbi")}
                    >
                      Add Field
                    </button>
                  </div>
                ) : (
                  <button
                    className="secondary_btn"
                    onClick={() => setIsAddingNewField(true)}
                  >
                    Add New Field
                  </button>
                )}
              </Col>
              <Col></Col>
            </Row>
          </Tab>
          <Tab eventKey="profile" title="Asset Classification as per Ind AS">
            <Row style={{ marginTop: "3rem" }}>
              <Col style={{ padding: "0 1rem" }}>
                {indAsFields.map((field: any) => {
                  return (
                    <div key={field} style={{ marginBottom: "2rem" }}>
                      <label style={{ marginBottom: "5px" }}>
                        <b>{field}</b>
                      </label>
                      <Select
                        onChange={handleInputChange([field, "indAS"])}
                        options={indAsOptions}
                        isMulti
                      />
                    </div>
                  );
                })}
                {isAddingNewField ? ( // Show the new field input when isAddingNewField is true
                  <div>
                    <input
                      style={{ marginRight: "1rem" }}
                      type="text"
                      placeholder="Enter field name"
                      value={newFieldName}
                      onChange={(e) => setNewFieldName(e.target.value)}
                    />
                    <button
                      className="secondary_btn"
                      onClick={() => handleAddField("indAS")}
                    >
                      Add Field
                    </button>
                  </div>
                ) : (
                  <button
                    className="secondary_btn"
                    onClick={() => setIsAddingNewField(true)}
                  >
                    Add New Field
                  </button>
                )}
              </Col>
              <Col></Col>
            </Row>
          </Tab>
          <Tab eventKey="contact" title="Product Classification">
            <Row style={{ marginTop: "3rem" }}>
              <Col style={{ padding: "0 1rem" }}>
                {productFields.map((field: any) => {
                  return (
                    <div key={field} style={{ marginBottom: "2rem" }}>
                      <label style={{ marginBottom: "5px" }}>
                        <b>{field}</b>
                      </label>
                      <Select
                        onChange={handleInputChange([field, "product"])}
                        options={productOptions}
                        isMulti
                      />
                    </div>
                  );
                })}
                {isAddingNewField ? ( // Show the new field input when isAddingNewField is true
                  <div>
                    <input
                      style={{ marginRight: "1rem" }}
                      type="text"
                      placeholder="Enter field name"
                      value={newFieldName}
                      onChange={(e) => setNewFieldName(e.target.value)}
                    />
                    <button
                      className="secondary_btn"
                      onClick={() => handleAddField("product")}
                    >
                      Add Field
                    </button>
                  </div>
                ) : (
                  <button
                    className="secondary_btn"
                    onClick={() => setIsAddingNewField(true)}
                  >
                    Add New Field
                  </button>
                )}
              </Col>
              <Col></Col>
            </Row>
          </Tab>
        </Tabs>
        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          <Button
            onClick={handleSubmit}
            className="primary_btn"
            variant="primary"
          >
            Submit Sub mapping
          </Button>
        </div>
      </Container>
    </>
  );
}

export default MappingPage;
