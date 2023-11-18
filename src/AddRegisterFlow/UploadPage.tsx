import Dropzone from "react-dropzone";
import { ImFolderUpload } from "react-icons/im";
import * as XLSX from "xlsx";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import { BsTrashFill } from "react-icons/bs";
import { Button } from "react-bootstrap";
import axios from "axios";

import { useNavigate } from "react-router-dom";

function UploadPage() {
  const loanId = localStorage.getItem("loanId");
  const [excelFiles, setExcelFile] = useState<Array<File>>([]);
  const [onlyOneSheet, setOnlyOneSheet] = useState<Boolean>(true);
  const handleFileDelete = (name: string) => {
    const filteredFiles = excelFiles.filter((file) => file.name !== name);
    console.log(filteredFiles);

    setExcelFile((currentFiles) => {
      return currentFiles.filter((file) => file.name !== name);
    });
    console.log(filteredFiles);

    if (filteredFiles.length === 0) {
      setOnlyOneSheet(true);
    }
  };
  const navigate = useNavigate();

  function fileToDataURI(file: any) {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        const key = reader.result;

        // Get the filename and extension
        const originalName = file.name;
        const extension = originalName.split(".").pop();
        resolve({ key, originalName, extension });
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }
  const dataObjectPromises = excelFiles.map((file) => fileToDataURI(file));

  const handleUpload = async () => {
    console.log(loanId);

    Promise.all(dataObjectPromises)
      .then((dataObjects) => {
        // Define the data you want to send in the request body, including the Data URIs

        const requestData = { files: dataObjects };

        let headers = {
          "Content-Type": "application/json",
          Authorization: "Bearer 6437243509fa58a26d4c7af3",
        };

        console.log(requestData);

        // Make a POST request with headers and the Data URIs in the request body
        axios
          .patch(
            "https://loan.test.api.myfinalyst.com/loan/files?id=" + loanId,
            requestData,
            {
              headers: headers,
            }
          )
          .then((response) => {
            console.log(response);
            navigate("/mainMappingPage");

            // Handle the response
          })
          .catch((error) => {
            // Handle errors
            console.log(error.response.data.error);
            alert(error.response.data.error);
          });
      })
      .catch((error) => {
        console.error("Error converting the files to Data URIs:", error);
      });
  };

  return (
    <Container style={{ paddingTop: "5rem" }}>
      <div>
        <b>Upload Loan Register</b>
        <p>
          File you upload must contain all the mandatory fields for mapping.
        </p>
      </div>

      <div>
        {onlyOneSheet === true && (
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
              const selectedFiles = Array.from(acceptedFiles);
              setExcelFile(selectedFiles);
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
                      color: "#03565C",
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
        )}

        {excelFiles.length != 0 ? (
          <h4 style={{ marginTop: "1rem" }}>File(s) Uploaded:</h4>
        ) : (
          <h4 style={{ marginTop: "1rem" }}>No Files Uploaded!</h4>
        )}
        {excelFiles &&
          excelFiles.map((file) => {
            return (
              <div
                key={file.name}
                style={{ display: "flex", alignItems: "center" }}
              >
                <h5 style={{ margin: "0", marginRight: "1rem" }}>
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
      <div style={{ textAlign: "center", marginTop: "2rem" }}>
        <Button
          onClick={handleUpload}
          style={{ background: "#03565C", border: "none" }}
        >
          Proceed
        </Button>
      </div>
    </Container>
  );
}

export default UploadPage;
