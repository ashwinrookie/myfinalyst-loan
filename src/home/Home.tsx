import "./Home.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Table from "react-bootstrap/Table";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BsFillShareFill } from "react-icons/bs";
import { BsTrashFill } from "react-icons/bs";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import { AiFillFolder } from "react-icons/ai";
import { AiOutlineUnorderedList } from "react-icons/ai";
import { AiFillFolderOpen } from "react-icons/ai";
import { useState } from "react";

function Home() {
  const [activeView, setActiveView] = useState("list");
  return (
    <Container>
      <Tabs
        defaultActiveKey="Receivable"
        id="uncontrolled-tab-example"
        className="mb-4"
      >
        <Tab eventKey="Receivable" title="Receivable Registers">
          {activeView === "list" ? (
            <Table bordered hover>
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Company Name</th>
                  <th>Date Ended</th>
                  <th>Link to present</th>
                  <th>Related Project Name</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Form>
                      <Form.Check
                        type="checkbox"
                        id="exampleCheckbox"
                        label="Select"
                      />
                    </Form>
                  </td>
                  <td>Receivable Register</td>
                  <td>Otto</td>
                  <td>23/3/23</td>
                  <td>R</td>
                  <td>NA</td>
                  <td>
                    <div className="actionIcons">
                      <BsFillShareFill />
                      <MdDriveFileRenameOutline />
                      <BsTrashFill />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Form>
                      <Form.Check
                        type="checkbox"
                        id="exampleCheckbox"
                        label="Select"
                      />
                    </Form>
                  </td>
                  <td>Receivable Register 2</td>
                  <td>Otto</td>
                  <td>23/3/23</td>
                  <td>R</td>
                  <td>NA</td>
                  <td>
                    <div className="actionIcons">
                      <BsFillShareFill />
                      <MdDriveFileRenameOutline />
                      <BsTrashFill />
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "2rem",
              }}
            >
              <div
                style={{
                  border: "2px solid black",
                  padding: "5px",
                  borderRadius: "3px",
                  width: "140px",
                  textAlign: "center",
                  marginRight: "2rem",
                }}
              >
                <AiFillFolderOpen
                  style={{
                    height: "80px",
                    width: "80px",
                  }}
                />
                Receivable Register
              </div>

              <div
                style={{
                  border: "2px solid black",
                  padding: "5px",
                  borderRadius: "3px",
                  width: "140px",
                  textAlign: "center",
                  marginRight: "2rem",
                }}
              >
                <AiFillFolderOpen
                  style={{
                    height: "80px",
                    width: "80px",
                  }}
                />
                Receivable Register
              </div>
            </div>
          )}

          <div style={{ display: "flex", alignItems: "center" }}>
            <Link
              to={"/basicInfo"}
              onClick={() => {
                localStorage.setItem("registerType", "Receivable");
              }}
            >
              <Button className="primary_btn">Add new register</Button>
            </Link>
            <div style={{ marginLeft: "auto" }}>
              <AiOutlineUnorderedList
                className={`${
                  activeView === "list" ? "activeView" : "inactiveView"
                }`}
                style={{
                  height: "40px",
                  width: "40px",
                  padding: "7px",
                  marginRight: "10px",
                }}
                onClick={() => {
                  setActiveView("list");
                }}
              />
              <AiFillFolder
                className={`${
                  activeView === "grid" ? "activeView" : "inactiveView"
                }`}
                style={{
                  height: "40px",
                  width: "40px",
                  padding: "5px",
                }}
                onClick={() => {
                  setActiveView("grid");
                }}
              />
            </div>
          </div>
        </Tab>

        <Tab eventKey="Payable" title="Payable Registers">
          {activeView === "list" ? (
            <Table bordered hover>
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Company Name</th>
                  <th>Date Ended</th>
                  <th>Link to present</th>
                  <th>Related Project Name</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Form>
                      <Form.Check
                        type="checkbox"
                        id="exampleCheckbox"
                        label="Select"
                      />
                    </Form>
                  </td>
                  <td>Payable Register</td>
                  <td>Otto</td>
                  <td>23/3/23</td>
                  <td>R</td>
                  <td>NA</td>
                  <td>
                    <div className="actionIcons">
                      <BsFillShareFill />
                      <MdDriveFileRenameOutline />
                      <BsTrashFill />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Form>
                      <Form.Check
                        type="checkbox"
                        id="exampleCheckbox"
                        label="Select"
                      />
                    </Form>
                  </td>
                  <td>Payable Register 2</td>
                  <td>Otto</td>
                  <td>23/3/23</td>
                  <td>R</td>
                  <td>NA</td>
                  <td>
                    <div className="actionIcons">
                      <BsFillShareFill />
                      <MdDriveFileRenameOutline />
                      <BsTrashFill />
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "2rem",
              }}
            >
              <div
                style={{
                  border: "2px solid black",
                  padding: "5px",
                  borderRadius: "3px",
                  width: "140px",
                  textAlign: "center",
                  marginRight: "2rem",
                }}
              >
                <AiFillFolderOpen
                  style={{
                    height: "80px",
                    width: "80px",
                  }}
                />
                Payable Register
              </div>

              <div
                style={{
                  border: "2px solid black",
                  padding: "5px",
                  borderRadius: "3px",
                  width: "140px",
                  textAlign: "center",
                  marginRight: "2rem",
                }}
              >
                <AiFillFolderOpen
                  style={{
                    height: "80px",
                    width: "80px",
                  }}
                />
                Payable Register
              </div>
            </div>
          )}

          <div style={{ display: "flex", alignItems: "center" }}>
            <Link
              to={"/basicInfo"}
              onClick={() => {
                localStorage.setItem("registerType", "Payable");
              }}
            >
              <Button className="primary_btn">Add new register</Button>
            </Link>
            <div style={{ marginLeft: "auto" }}>
              <AiOutlineUnorderedList
                className={`${
                  activeView === "list" ? "activeView" : "inactiveView"
                }`}
                style={{
                  height: "40px",
                  width: "40px",
                  padding: "7px",
                  marginRight: "10px",
                }}
                onClick={() => {
                  setActiveView("list");
                }}
              />
              <AiFillFolder
                className={`${
                  activeView === "grid" ? "activeView" : "inactiveView"
                }`}
                style={{
                  height: "40px",
                  width: "40px",
                  padding: "5px",
                }}
                onClick={() => {
                  setActiveView("grid");
                }}
              />
            </div>
          </div>
        </Tab>

        <Tab eventKey="Sales" title="Sales Registers">
          {activeView === "list" ? (
            <Table bordered hover>
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Company Name</th>
                  <th>Date Ended</th>
                  <th>Link to present</th>
                  <th>Related Project Name</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Form>
                      <Form.Check
                        type="checkbox"
                        id="exampleCheckbox"
                        label="Select"
                      />
                    </Form>
                  </td>
                  <td>Sales Register</td>
                  <td>Otto</td>
                  <td>23/3/23</td>
                  <td>R</td>
                  <td>NA</td>
                  <td>
                    <div className="actionIcons">
                      <BsFillShareFill />
                      <MdDriveFileRenameOutline />
                      <BsTrashFill />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Form>
                      <Form.Check
                        type="checkbox"
                        id="exampleCheckbox"
                        label="Select"
                      />
                    </Form>
                  </td>
                  <td>Sales Register 2</td>
                  <td>Otto</td>
                  <td>23/3/23</td>
                  <td>R</td>
                  <td>NA</td>
                  <td>
                    <div className="actionIcons">
                      <BsFillShareFill />
                      <MdDriveFileRenameOutline />
                      <BsTrashFill />
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "2rem",
              }}
            >
              <div
                style={{
                  border: "2px solid black",
                  padding: "5px",
                  borderRadius: "3px",
                  width: "140px",
                  textAlign: "center",
                  marginRight: "2rem",
                }}
              >
                <AiFillFolderOpen
                  style={{
                    height: "80px",
                    width: "80px",
                  }}
                />{" "}
                <br />
                Sales Register
              </div>

              <div
                style={{
                  border: "2px solid black",
                  padding: "5px",
                  borderRadius: "3px",
                  width: "140px",
                  textAlign: "center",
                  marginRight: "2rem",
                }}
              >
                <AiFillFolderOpen
                  style={{
                    height: "80px",
                    width: "80px",
                  }}
                />{" "}
                <br />
                Sales Register
              </div>
            </div>
          )}

          <div style={{ display: "flex", alignItems: "center" }}>
            <Link
              to={"/basicInfo"}
              onClick={() => {
                localStorage.setItem("registerType", "Sales");
              }}
            >
              <Button className="primary_btn">Add new register</Button>
            </Link>
            <div style={{ marginLeft: "auto" }}>
              <AiOutlineUnorderedList
                className={`${
                  activeView === "list" ? "activeView" : "inactiveView"
                }`}
                style={{
                  height: "40px",
                  width: "40px",
                  padding: "7px",
                  marginRight: "10px",
                }}
                onClick={() => {
                  setActiveView("list");
                }}
              />
              <AiFillFolder
                className={`${
                  activeView === "grid" ? "activeView" : "inactiveView"
                }`}
                style={{
                  height: "40px",
                  width: "40px",
                  padding: "5px",
                }}
                onClick={() => {
                  setActiveView("grid");
                }}
              />
            </div>
          </div>
        </Tab>

        <Tab
          eventKey="Purchases/Inventory"
          title="Purchases/Inventory Registers"
        >
          {activeView === "list" ? (
            <Table bordered hover>
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Company Name</th>
                  <th>Date Ended</th>
                  <th>Link to present</th>
                  <th>Related Project Name</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <Form>
                      <Form.Check
                        type="checkbox"
                        id="exampleCheckbox"
                        label="Select"
                      />
                    </Form>
                  </td>
                  <td>Purchases/Inventory Register</td>
                  <td>Otto</td>
                  <td>23/3/23</td>
                  <td>R</td>
                  <td>NA</td>
                  <td>
                    <div className="actionIcons">
                      <BsFillShareFill />
                      <MdDriveFileRenameOutline />
                      <BsTrashFill />
                    </div>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Form>
                      <Form.Check
                        type="checkbox"
                        id="exampleCheckbox"
                        label="Select"
                      />
                    </Form>
                  </td>
                  <td>Purchases/Inventory Register 2</td>
                  <td>Otto</td>
                  <td>23/3/23</td>
                  <td>R</td>
                  <td>NA</td>
                  <td>
                    <div className="actionIcons">
                      <BsFillShareFill />
                      <MdDriveFileRenameOutline />
                      <BsTrashFill />
                    </div>
                  </td>
                </tr>
              </tbody>
            </Table>
          ) : (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "2rem",
              }}
            >
              <div
                style={{
                  border: "2px solid black",
                  padding: "5px",
                  borderRadius: "3px",
                  width: "140px",
                  textAlign: "center",
                  marginRight: "2rem",
                }}
              >
                <AiFillFolderOpen
                  style={{
                    height: "80px",
                    width: "80px",
                  }}
                />
                Purchases Register
              </div>

              <div
                style={{
                  border: "2px solid black",
                  padding: "5px",
                  borderRadius: "3px",
                  width: "140px",
                  textAlign: "center",
                  marginRight: "2rem",
                }}
              >
                <AiFillFolderOpen
                  style={{
                    height: "80px",
                    width: "80px",
                  }}
                />
                Purchases Register
              </div>
            </div>
          )}

          <div style={{ display: "flex", alignItems: "center" }}>
            <Link
              to={"/basicInfo"}
              onClick={() => {
                localStorage.setItem("registerType", "Purchases/Inventory");
              }}
            >
              <Button className="primary_btn">Add new register</Button>
            </Link>
            <div style={{ marginLeft: "auto" }}>
              <AiOutlineUnorderedList
                className={`${
                  activeView === "list" ? "activeView" : "inactiveView"
                }`}
                style={{
                  height: "40px",
                  width: "40px",
                  padding: "7px",
                  marginRight: "10px",
                }}
                onClick={() => {
                  setActiveView("list");
                }}
              />
              <AiFillFolder
                className={`${
                  activeView === "grid" ? "activeView" : "inactiveView"
                }`}
                style={{
                  height: "40px",
                  width: "40px",
                  padding: "5px",
                }}
                onClick={() => {
                  setActiveView("grid");
                }}
              />
            </div>
          </div>
        </Tab>
      </Tabs>
    </Container>
  );
}

export default Home;
