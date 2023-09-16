import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import SignUp from "./pages/Register";
import Home from "./pages/Home";
import Teacher from "./pages/Teacher";
import Student from "./pages/Student";
import Alumni from "./pages/Alumni";
import FeedBack from "./pages/FeedBack";
const App = () => {
  return (
    <>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/" element={<Home />} />
            <Route path="/teacher" element={<Teacher />} />
            <Route path="/student" element={<Student />} />
            <Route path="/alumni" element={<Alumni />} />
            <Route path="/feedback" element={<FeedBack />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};
export default App;
