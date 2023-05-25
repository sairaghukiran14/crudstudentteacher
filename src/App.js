import "./App.css";
import { createContext, useState } from "react";
import Login from "./components/Login";
import Sdashboard from "./components/Sdashboard";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import Tdashboard from "./components/Tdashboard";
import Adashboard from "./components/Adashboard";

export const store = createContext();

function App() {
  const [students, setStudents] = useState([
    { name: "John", rollno: "S01", studyclass: "7th", password: "J@123" },
    { name: "Sai", rollno: "S02", studyclass: "6th", password: "S@123" },
    { name: "Raghu", rollno: "S03", studyclass: "8th", password: "R@123" },
    { name: "Kiran", rollno: "S04", studyclass: "7th", password: "K@123" },
    { name: "Conor", rollno: "S05", studyclass: "8th", password: "C@123" },
    { name: "Babu", rollno: "S06", studyclass: "7th", password: "B@123" },
    { name: "Arat", rollno: "S07", studyclass: "9th", password: "A@123" },
  ]);
  const [teachers, setTeachers] = useState([
    {
      name: "TeacherJ",
      teachID: "T01",
      teachSubj: "English",
      password: "J@123",
    },
    {
      name: "TeacherS",
      teachID: "T02",
      teachSubj: "Mathematics",
      password: "S@123",
    },
    {
      name: "TeacherR",
      teachID: "T03",
      teachSubj: "Economics",
      password: "R@123",
    },
    {
      name: "TeacherK",
      teachID: "T04",
      teachSubj: "Biology",
      password: "K@123",
    },
    {
      name: "TeacherC",
      teachID: "T05",
      teachSubj: "Physical Science",
      password: "C@123",
    },
    {
      name: "TeacherB",
      teachID: "T06",
      teachSubj: "Programming",
      password: "B@123",
    },
    {
      name: "TeacherA",
      teachID: "T07",
      teachSubj: "Social Studies",
      password: "A@123",
    },
  ]);
  return (
    <div>
      <Router>
        <store.Provider
          value={{ students, setStudents, teachers, setTeachers }}
        >
          {/* <Login /> */}

          <Routes>
            <Route path="/" element={<Login />}></Route>
            <Route
              path="/studentdashboard/:stuid"
              element={<Sdashboard />}
            ></Route>
            <Route
              path="/teacherdashboard/:teachid"
              element={<Tdashboard />}
            ></Route>
            <Route
              path="/admindashboard/"
              element={<Adashboard />}
            ></Route>
          </Routes>
        </store.Provider>
      </Router>
    </div>
  );
}

export default App;
