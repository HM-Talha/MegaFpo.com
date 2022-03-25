import "./App.css";
import LoginPage from "./Pages/LoginPage/LoginPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignUpPage from "./Pages/SignupPage/SignUp";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<SignUpPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
