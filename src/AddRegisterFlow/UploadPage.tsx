import Dropzone from "react-dropzone";
import { ImFolderUpload } from "react-icons/im";
import * as XLSX from "xlsx";
import Container from "react-bootstrap/Container";
import { useState } from "react";
import { BsTrashFill } from "react-icons/bs";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function UploadPage() {
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
  return (
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
              setExcelFile([...excelFiles, file]);
              console.log(excelFiles, "after set");
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
        <Link to={"/mappingPage"}>
          <Button style={{ background: "green", border: "none" }}>
            Proceed
          </Button>
        </Link>
      </div>
    </Container>
  );
}

export default UploadPage;
