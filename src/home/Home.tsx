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

function Home() {
  return (
    <Container>
      <Tabs
        defaultActiveKey="Receivable"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="Receivable" title="Receivable Registers">
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
          <Link
            to={"/basicInfo"}
            onClick={() => {
              localStorage.setItem("registerType", "Receivable");
            }}
          >
            <Button className="primary_btn">Add new register</Button>
          </Link>
        </Tab>

        <Tab eventKey="Payable" title="Payable Registers">
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
          <Link
            to={"/basicInfo"}
            onClick={() => {
              localStorage.setItem("registerType", "Payable");
            }}
          >
            <Button className="primary_btn">Add new register</Button>
          </Link>
        </Tab>

        <Tab eventKey="Sales" title="Sales Registers">
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
          <Link
            to={"/basicInfo"}
            onClick={() => {
              localStorage.setItem("registerType", "Sales");
            }}
          >
            <Button className="primary_btn">Add new register</Button>
          </Link>
        </Tab>

        <Tab
          eventKey="Purchases/Inventory"
          title="Purchases/Inventory Registers"
        >
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
          <Link
            to={"/basicInfo"}
            onClick={() => {
              localStorage.setItem("registerType", "Purchases/Inventory");
            }}
          >
            <Button className="primary_btn">Add new register</Button>
          </Link>
        </Tab>
      </Tabs>
    </Container>
  );
}

export default Home;
