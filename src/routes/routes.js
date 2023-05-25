import { Route, Routes } from "react-router-dom";
import BasicInfo from "./../AddRegisterFlow/BasicInfo";
import Home from "../home/Home";

function Routes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/basicInfo" element={<BasicInfo />} />
    </Routes>
  );
}

export default Routes;
