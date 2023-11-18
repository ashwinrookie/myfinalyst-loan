import "./App.css";
import { Route, Routes } from "react-router-dom";
import BasicInfo from "./AddRegisterFlow/BasicInfo";
import Home from "./home/Home";
import UploadPage from "./AddRegisterFlow/UploadPage";
import CreateRegister from "./AddRegisterFlow/CreateRegister";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import MappingPage from "./AddRegisterFlow/MappingPage";
import MainMappingPage from "./AddRegisterFlow/mainMappingPage";
import ShowData from "./AddRegisterFlow/showData";

import logo from "./assets/logo.png";
function App() {
  return (
    <>
      <Navbar style={{ background: "#03565C" }}>
        <Container>
          <Navbar.Brand href="/">
            <img style={{ height: "50px", width: "120px" }} src={logo} alt="" />
          </Navbar.Brand>
        </Container>
      </Navbar>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<BasicInfo />} />
        <Route path="/uploadPage" element={<UploadPage />} />
        <Route path="/createRegister" element={<CreateRegister />} />
        <Route path="/mainMappingPage" element={<MainMappingPage />} />
        <Route path="/mappingPage" element={<MappingPage />} />
        <Route path="/showData" element={<ShowData />} />
      </Routes>
    </>
  );
}

export default App;
