import React, { useState } from "react";
import { useContext } from "react";
import { store } from "../App";
// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { students, setStudents, teachers, setTeachers } = useContext(store);
  const [StuorTID, setStuorTID] = useState("");
  const [password, setPassword] = useState("");
  const [stuorteach, setStuorteach] = useState(true);
  const [adminID, setAdminID] = useState("");
  const [adminPassword, setAdminPassword] = useState("");
  const onsubmitHandler = (e) => {
    e.preventDefault();
    if (stuorteach) {
      const found = students.find(
        (student) =>
          student.rollno === StuorTID && student.password === password
      );
      if (found) {
        navigate(`/studentdashboard/${StuorTID}`);
      }
    } else {
      const found = teachers.find(
        (teacher) =>
          teacher.teachID === StuorTID && teacher.password === password
      );
      if (found) {
        navigate(`/teacherdashboard/${StuorTID}`);
      }
    }
  };

  const adminhandler = (e) => {
    if (adminID === "Admin" && adminPassword === "Admin@123") {
      navigate(`/admindashboard`);
    }
  };
  return (
    <>
      <div className="demo bg-orange-600 text-white text-center">
        DEMO LOGIN For StudentLogin: (StudentID = "S01" Password = "J@123" ) ||
        For TeacherLogin: ( TeacherID ="T01" Password ="J@123" )
      </div>
      <div className="login flex items-center flex-col justify-center mt-5">
        <h2 className="text-center text-3xl text-gray-500">
          Student/ Teacher Login
        </h2>
        <form
          action=""
          className="flex flex-col items-center justify-center w-48 mt-5"
          onSubmit={onsubmitHandler}
        >
          <select
            name=""
            id=""
            className="w-full border-2 rounded p-2"
            onChange={(e) => {
              if (e.target.value === "Teacher") setStuorteach(false);
              else if (e.target.value === "Student") setStuorteach(true);
            }}
          >
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
          </select>
          <input
            type="text"
            placeholder={stuorteach ? "StudentID" : "TeacherId"}
            className="border-2 rounded p-2 my-2 w-full"
            onChange={(e) => {
              setStuorTID(e.target.value);
            }}
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="border-2 rounded p-2 my-2 w-full"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            required
          />
          <button className="bg-green-400 px-3 py-2 rounded">Submit</button>
        </form>
        <div className="line w-96 h-0.5 bg-gray-400 my-4"></div>
        <div className="demo bg-blue-500 text-white text-center w-full mb-3">
          DEMO LOGIN For AdminLogin: ( AdminID ="Admin" Password ="Admin@123" )
        </div>
        <h2 className="text-center text-3xl text-gray-500">Admin Login</h2>
        <form
          action=""
          className="flex flex-col items-center justify-center w-48 mt-5"
        >
          <input
            type="text"
            placeholder="AdminID"
            className="border-2 rounded p-2 my-2 w-full"
            required
            onChange={(e) => {
              setAdminID(e.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Password"
            className="border-2 rounded p-2 my-2 w-full"
            onChange={(e) => {
              setAdminPassword(e.target.value);
            }}
            required
          />
          <button
            className="bg-green-400 px-3 py-2 rounded"
            type="button"
            onClick={() => {
              adminhandler();
            }}
          >
            Submit
          </button>
        </form>
      </div>
      {/* {!found?navigate(`/sdashboard/${StuorTID}`):} */}
    </>
  );
};

export default Login;
