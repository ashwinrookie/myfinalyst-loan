import { useState } from "react";
import "./App.css";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Container from "react-bootstrap/Container";
import Table from "react-bootstrap/Table";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { BsFillShareFill } from "react-icons/bs";
import { BsTrashFill } from "react-icons/bs";
import { MdDriveFileRenameOutline } from "react-icons/md";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Dropzone from "react-dropzone";
import { ImFolderUpload } from "react-icons/im";
import { useDropzone } from "react-dropzone";
import * as XLSX from "xlsx";
function App() {
  const [count, setCount] = useState(0);
  const [excelFiles, setExcelFile] = useState<Array<File>>([]);
  const [onlyOneSheet, setOnlyOneSheet] = useState<Boolean>(true);

  const handleFileDelete = (name: string) => {
    const filteredFiles = excelFiles.filter((file) => file.name !== name);
    console.log(filteredFiles);

    setExcelFile(excelFiles.filter((file) => file.name !== name));
    console.log(excelFiles);

    if (excelFiles.length === 0) {
      setOnlyOneSheet(true);
    }
  };
  return (
    // <Container>
    //   <Tabs
    //     defaultActiveKey="Receivable"
    //     id="uncontrolled-tab-example"
    //     className="mb-3"
    //   >
    //     <Tab eventKey="Receivable" title="Receivable Registers">
    //       <Table bordered hover>
    //         <thead>
    //           <tr>
    //             <th></th>
    //             <th>Name</th>
    //             <th>Company Name</th>
    //             <th>Date Ended</th>
    //             <th>Link to present</th>
    //             <th>Related Project Name</th>
    //             <th></th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           <tr>
    //             <td>
    //               <Form>
    //                 <Form.Check
    //                   type="checkbox"
    //                   id="exampleCheckbox"
    //                   label="Select"
    //                 />
    //               </Form>
    //             </td>
    //             <td>Receivable Register</td>
    //             <td>Otto</td>
    //             <td>23/3/23</td>
    //             <td>R</td>
    //             <td>NA</td>
    //             <td>
    //               <div className="actionIcons">
    //                 <BsFillShareFill />
    //                 <MdDriveFileRenameOutline />
    //                 <BsTrashFill />
    //               </div>
    //             </td>
    //           </tr>
    //           <tr>
    //             <td>
    //               <Form>
    //                 <Form.Check
    //                   type="checkbox"
    //                   id="exampleCheckbox"
    //                   label="Select"
    //                 />
    //               </Form>
    //             </td>
    //             <td>Receivable Register 2</td>
    //             <td>Otto</td>
    //             <td>23/3/23</td>
    //             <td>R</td>
    //             <td>NA</td>
    //             <td>
    //               <div className="actionIcons">
    //                 <BsFillShareFill />
    //                 <MdDriveFileRenameOutline />
    //                 <BsTrashFill />
    //               </div>
    //             </td>
    //           </tr>
    //         </tbody>
    //       </Table>
    //       <Button className="primary_btn">Add new register</Button>
    //     </Tab>
    //     <Tab eventKey="Payable" title="Payable Registers">
    //       <Table bordered hover>
    //         <thead>
    //           <tr>
    //             <th></th>
    //             <th>Name</th>
    //             <th>Company Name</th>
    //             <th>Date Ended</th>
    //             <th>Link to present</th>
    //             <th>Related Project Name</th>
    //             <th></th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           <tr>
    //             <td>
    //               <Form>
    //                 <Form.Check
    //                   type="checkbox"
    //                   id="exampleCheckbox"
    //                   label="Select"
    //                 />
    //               </Form>
    //             </td>
    //             <td>Payable Register</td>
    //             <td>Otto</td>
    //             <td>23/3/23</td>
    //             <td>R</td>
    //             <td>NA</td>
    //             <td>
    //               <div className="actionIcons">
    //                 <BsFillShareFill />
    //                 <MdDriveFileRenameOutline />
    //                 <BsTrashFill />
    //               </div>
    //             </td>
    //           </tr>
    //           <tr>
    //             <td>
    //               <Form>
    //                 <Form.Check
    //                   type="checkbox"
    //                   id="exampleCheckbox"
    //                   label="Select"
    //                 />
    //               </Form>
    //             </td>
    //             <td>Payable Register 2</td>
    //             <td>Otto</td>
    //             <td>23/3/23</td>
    //             <td>R</td>
    //             <td>NA</td>
    //             <td>
    //               <div className="actionIcons">
    //                 <BsFillShareFill />
    //                 <MdDriveFileRenameOutline />
    //                 <BsTrashFill />
    //               </div>
    //             </td>
    //           </tr>
    //         </tbody>
    //       </Table>
    //       <Button className="primary_btn">Add new register</Button>
    //     </Tab>
    //     <Tab eventKey="Sales" title="Sales Registers">
    //       <Table bordered hover>
    //         <thead>
    //           <tr>
    //             <th></th>
    //             <th>Name</th>
    //             <th>Company Name</th>
    //             <th>Date Ended</th>
    //             <th>Link to present</th>
    //             <th>Related Project Name</th>
    //             <th></th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           <tr>
    //             <td>
    //               <Form>
    //                 <Form.Check
    //                   type="checkbox"
    //                   id="exampleCheckbox"
    //                   label="Select"
    //                 />
    //               </Form>
    //             </td>
    //             <td>Sales Register</td>
    //             <td>Otto</td>
    //             <td>23/3/23</td>
    //             <td>R</td>
    //             <td>NA</td>
    //             <td>
    //               <div className="actionIcons">
    //                 <BsFillShareFill />
    //                 <MdDriveFileRenameOutline />
    //                 <BsTrashFill />
    //               </div>
    //             </td>
    //           </tr>
    //           <tr>
    //             <td>
    //               <Form>
    //                 <Form.Check
    //                   type="checkbox"
    //                   id="exampleCheckbox"
    //                   label="Select"
    //                 />
    //               </Form>
    //             </td>
    //             <td>Sales Register 2</td>
    //             <td>Otto</td>
    //             <td>23/3/23</td>
    //             <td>R</td>
    //             <td>NA</td>
    //             <td>
    //               <div className="actionIcons">
    //                 <BsFillShareFill />
    //                 <MdDriveFileRenameOutline />
    //                 <BsTrashFill />
    //               </div>
    //             </td>
    //           </tr>
    //         </tbody>
    //       </Table>
    //       <Button className="primary_btn">Add new register</Button>
    //     </Tab>
    //     <Tab
    //       eventKey="Purchases/Inventory"
    //       title="Purchases/Inventory Registers"
    //     >
    //       <Table bordered hover>
    //         <thead>
    //           <tr>
    //             <th></th>
    //             <th>Name</th>
    //             <th>Company Name</th>
    //             <th>Date Ended</th>
    //             <th>Link to present</th>
    //             <th>Related Project Name</th>
    //             <th></th>
    //           </tr>
    //         </thead>
    //         <tbody>
    //           <tr>
    //             <td>
    //               <Form>
    //                 <Form.Check
    //                   type="checkbox"
    //                   id="exampleCheckbox"
    //                   label="Select"
    //                 />
    //               </Form>
    //             </td>
    //             <td>Purchases/Inventory Register</td>
    //             <td>Otto</td>
    //             <td>23/3/23</td>
    //             <td>R</td>
    //             <td>NA</td>
    //             <td>
    //               <div className="actionIcons">
    //                 <BsFillShareFill />
    //                 <MdDriveFileRenameOutline />
    //                 <BsTrashFill />
    //               </div>
    //             </td>
    //           </tr>
    //           <tr>
    //             <td>
    //               <Form>
    //                 <Form.Check
    //                   type="checkbox"
    //                   id="exampleCheckbox"
    //                   label="Select"
    //                 />
    //               </Form>
    //             </td>
    //             <td>Purchases/Inventory Register 2</td>
    //             <td>Otto</td>
    //             <td>23/3/23</td>
    //             <td>R</td>
    //             <td>NA</td>
    //             <td>
    //               <div className="actionIcons">
    //                 <BsFillShareFill />
    //                 <MdDriveFileRenameOutline />
    //                 <BsTrashFill />
    //               </div>
    //             </td>
    //           </tr>
    //         </tbody>
    //       </Table>
    //       <Button className="primary_btn">Add new register</Button>
    //     </Tab>
    //   </Tabs>
    // </Container>

    // <Container>
    //   <div
    //     style={{ display: "flex", justifyContent: "right", marginTop: "5rem" }}
    //   >
    //     <Button className="primary_btn">Back</Button>
    //   </div>
    //   <Form style={{ width: "30%", margin: "auto" }}>
    //     <Form.Group className="mb-3" controlId="formRegisterName">
    //       <Form.Label>Register Name</Form.Label>
    //       <Form.Control type="email" placeholder="Enter register name" />
    //     </Form.Group>

    //     <Form.Group className="mb-3" controlId="formCompanyName">
    //       <Form.Label>Company Name</Form.Label>
    //       <Form.Control type="password" placeholder="Enter company name" />
    //     </Form.Group>
    //     <Form.Group className="mb-3">
    //       <Form.Label>Link Preset</Form.Label>
    //       <Form.Select>
    //         <option value="1">One</option>
    //         <option value="2">Two</option>
    //         <option value="3">Three</option>
    //       </Form.Select>
    //     </Form.Group>
    //     <Row>
    //       <Col style={{ textAlign: "center" }}>
    //         <Button className="primary_btn" variant="primary" type="submit">
    //           Create Register <br />
    //           <i>Create the register is MyFinalyst</i>
    //         </Button>
    //       </Col>
    //       <Col style={{ textAlign: "center" }}>
    //         <Button className="primary_btn" variant="primary" type="submit">
    //           Upload Register <br />
    //           <i>Upload excel/csv files with the list of</i>
    //         </Button>
    //       </Col>
    //     </Row>
    //   </Form>
    // </Container>

    <Container style={{ paddingTop: "5rem" }}>
      <div>
        <b>Receivable register format</b>
        <p>- Please ensure header columns are in the first row.</p>
        <p>- Remove subtotal values in the middle or at the end.</p>
        <p>
          - Mandatory columns includes Invoice date, Party name, Due date,
          Credit period, Nature of receivables,Amount.
        </p>
      </div>

      <div>
        <b>Upload register</b>
        {onlyOneSheet === true ? (
          <Dropzone
            onDrop={(acceptedFiles) => {
              const file = acceptedFiles[0];
              console.log(file);
              const reader = new FileReader();
              reader.onload = (event: ProgressEvent<FileReader>) => {
                const data = new Uint8Array(
                  event.target?.result as ArrayBuffer
                );
                const workbook = XLSX.read(data, { type: "array" });
                const sheetNames = workbook.SheetNames;

                setOnlyOneSheet(sheetNames.length === 1);
              };

              reader.readAsArrayBuffer(file);
              setExcelFile([...excelFiles, file]);
            }}
          >
            {({ getRootProps, getInputProps }) => (
              <section>
                <div className="dropZone" {...getRootProps()}>
                  <input {...getInputProps()} />
                  <ImFolderUpload
                    style={{
                      width: "60px",
                      height: "50px",
                      color: "green",
                      marginTop: "2rem",
                    }}
                  />
                  <p style={{ margin: "auto" }}>
                    Drop your files here, or click to select files.
                  </p>
                </div>
              </section>
            )}
          </Dropzone>
        ) : (
          <></>
        )}

        {excelFiles.length != 0 ? (
          <h4 style={{ marginTop: "1rem" }}>File(s) Uploaded:</h4>
        ) : (
          <h4 style={{ marginTop: "1rem" }}>No Files Uploaded</h4>
        )}
        {excelFiles &&
          excelFiles.map((file) => {
            return (
              <div style={{ display: "flex", alignItems: "center" }}>
                <h5
                  style={{ margin: "0", marginRight: "1rem" }}
                  key={file.name}
                >
                  {file.name}
                </h5>
                <BsTrashFill
                  onClick={() => handleFileDelete(file.name)}
                  style={{
                    color: "red",
                    height: "35px",
                    width: "25px",
                    cursor: "pointer",
                  }}
                />
              </div>
            );
          })}
      </div>
    </Container>
  );
}

export default App;
