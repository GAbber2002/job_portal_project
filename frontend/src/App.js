import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Register from "./pages/Register";
import Login from "./pages/Login";
import JobList from "./pages/JobList";
import PostJob from "./pages/PostJob";
import ApplyJob from "./pages/ApplyJob";

function App() {
  return (
    <Router>
      <Header />
      <Navbar />
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/jobs" element={<JobList />} />
        <Route path="/post-job" element={<PostJob />} />
        <Route path="/apply/:jobId" element={<ApplyJob />} />
        <Route path="/" element={<h2 style={{ padding: "20px" }}>Welcome to Job Portal</h2>} />
      </Routes>
    </Router>
  );
}

export default App;
