import "./App.css";
import { Route, Routes } from "react-router-dom";
import BasicInfo from "./AddRegisterFlow/BasicInfo";
import Home from "./home/Home";
import UploadPage from "./AddRegisterFlow/UploadPage";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

function App() {
  return (
    <>
      <Navbar style={{ background: "green" }}>
        <Container>
          <Navbar.Brand href="/">
            <b style={{ color: "white" }}>My Finalyst</b>
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/basicInfo" element={<BasicInfo />} />
        <Route path="/uploadPage" element={<UploadPage />} />
      </Routes>
    </>
  );
}

export default App;
