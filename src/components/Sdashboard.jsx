import { useParams } from "react-router-dom";
import { GoSignOut } from "react-icons/go";
import React from "react";
import { useContext } from "react";
import { store } from "../App";
import "./dashboard.css";
import { useNavigate } from "react-router-dom";
const Sdashboard = () => {
  const navigate = useNavigate();
  const { students, setStudents } = useContext(store);
  const { stuid } = useParams();
  const currentfound = students.find((student) => student.rollno === stuid);
  const remainingStudents = students.filter(
    (student) => student.rollno !== stuid
  );

  return (
    <div className="sdashboard">
      <div className="navbar w-full h-10 bg-slate-200 flex items-center justify-between">
        <div className="title ml-2 font-bold text-xl">Student Dashboard</div>
        <div
          className="signout flex justify-evenly items-center w-46 mr-2 bg-white p-1 rounded px-2"
          onClick={() => navigate("/")}
        >
          <GoSignOut className="text-xl " />
          <div className="ml-1">SignOut</div>
        </div>
      </div>
      <div className="scontent text-center text-xl mt-5">
        --- Welcome {currentfound.name} ---
      </div>
      {/* Student Table Display */}
      <div className="content flex items-center justify-center p-3">
        <table className="border-2 rounded mt-10">
          <thead className="bg-blue-500 text-white rounded">
            <tr>
              <th className="border-2">Student Id</th>
              <th className="border-2">Student Name</th>
              <th className="border-2">Student Class</th>
  
            </tr>
          </thead>
          <tbody>
            {remainingStudents.map((student) => (
              <tr>
                <td className="border-2">{student.rollno}</td>
                <td className="border-2">{student.name}</td>
                <td className="border-2">{student.studyclass}</td>
                
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Sdashboard;
