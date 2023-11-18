import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
function BasicInfo() {
  const [formData, setFormData] = useState({
    company: "",
    name: "",
    startDate: "",
    endDate: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (event: { target: { name: any; value: any } }) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });

    if (name === "startDate") {
      setFormData((prevData) => ({
        ...prevData,
        endDate: value < prevData.endDate ? value : prevData.endDate,
      }));
    }
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    // try {
    //   console.log(JSON.stringify(formData));

    //   const response = await fetch("https://loan.test.api.myfinalyst.com/loan/add", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: "Bearer 6437243509fa58a26d4c7af3",
    //     },
    //     body: JSON.stringify(formData),
    //   });

    //   if (response.ok) {
    //     // Data successfully sent to the API
    //     // You can redirect the user to another page or show a success message
    //     navigate("/uploadPage");
    //     const resData = await response.json();
    //     localStorage.setItem("loanId", resData.loan._id);
    //     console.log(resData.loan._id);
    //   } else {
    //     // Handle the case when the API request fails
    //     console.error("API request failed");
    //   }
    // } catch (error) {
    //   // Handle any network or other errors
    //   console.error("Error:", error);
    // }
    let headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer 6437243509fa58a26d4c7af3",
    };
    axios
      .post("https://loan.test.api.myfinalyst.com/loan/add", formData, {
        headers: headers,
      })
      .then((response) => {
        console.log(response);
        const resData = response;
        localStorage.setItem("loanId", resData.data.loan._id);
        console.log(resData.data.loan._id);
        navigate("/uploadPage");

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
      {/* <div
        style={{ display: "flex", justifyContent: "right", marginTop: "5rem" }}
      >
        <Button className="primary_btn">Back</Button>
      </div> */}
      <Form style={{ width: "30%", margin: "auto", marginTop: "5rem" }}>
        <Form.Group className="mb-3" controlId="formCompanyName">
          <Form.Label>Company Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter company name"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formRegisterName">
          <Form.Label>Register Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter register name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Start Date</Form.Label>
          <Form.Control
            id="startDateInput"
            type="date"
            placeholder="Enter register name"
            name="startDate"
            value={formData.startDate}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>End Date</Form.Label>
          <Form.Control
            id="endDateInput"
            type="date"
            placeholder="Enter register name"
            name="endDate"
            value={formData.endDate}
            onChange={handleInputChange}
            min={formData.startDate}
          />
        </Form.Group>
        <Row>
          <Col style={{ textAlign: "center" }}>
            <Button
              onClick={handleSubmit}
              className="primary_btn"
              variant="primary"
              type="submit"
            >
              Create
              <i> Loan Register</i>
            </Button>
          </Col>
        </Row>
      </Form>
    </Container>
  );
}

export default BasicInfo;
