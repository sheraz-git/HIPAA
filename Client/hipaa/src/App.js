import "./App.css";
import Dashboard from "./Dashboard";
import Home from "./Home";
import SignupForm from "../src/LoginComponent/SignupForm";
import Loginform from "./LoginComponent/Loginform";
import HomeafterLogin from "./LoginComponent/HomeafterLogin";
import PatientRecord from "../src/PatientRecord/Patientrecord";
import View_allrecords from "./PatientRecord/View_allrecords";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Home />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/SignupForm" element={<SignupForm />} />
        <Route path="/Loginform" element={<Loginform />} />
        <Route path="/HomeafterLogin" element={<HomeafterLogin />} />
        <Route path="/PatientRecord" element={<PatientRecord />} />
        <Route
          path="/View_specificuser_records"
          element={<View_allrecords />}
        />

      </Routes>
    </>
  );
}

export default App;
