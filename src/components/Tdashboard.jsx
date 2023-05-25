import { GoSignOut } from "react-icons/go";
import React, { useContext } from "react";
import { store } from "../App";
import "./dashboard.css";
import { useNavigate, useParams } from "react-router-dom";
import StudentCrudForm from "./StudentCrudForm";
const Tdashboard = () => {
  const navigate = useNavigate();
  const { teachers, SetTeachers } = useContext(store);
  const { teachid } = useParams();
  const currentfound = teachers.find((teacher) => teacher.teachID === teachid);
  const remainingteachers = teachers.filter(
    (teacher) => teacher.teachID !== teachid
  );

  return (
    <div className="sdashboard">
      <div className="navbar w-full h-10 bg-slate-200 flex items-center justify-between">
        <div className="title ml-2 font-bold text-xl">Teacher Dashboard</div>
        <div
          className="signout flex justify-evenly items-center w-46 mr-2 bg-white p-1 rounded px-2"
          onClick={() => navigate("/")}
        >
          <GoSignOut className="text-xl " />
          <div className="ml-1">SignOut</div>
        </div>
      </div>
      <div className="scontent text-center text-xl mt-2">
        --- Welcome {currentfound.name} ---
      </div>

      <div className="content flex justify-center items-center p-3">
        {/* Teacher Table Display */}
        <div className="teachersection">
          <table className="border-2 rounded mt-3 mb-4">
            <thead className="bg-orange-500 text-white rounded">
              <tr>
                <th className="border-2">Teacher Id</th>
                <th className="border-2">Teacher Name</th>
                <th className="border-2">Subject</th>
              </tr>
            </thead>
            <tbody>
              {remainingteachers.map((teacher) => (
                <tr>
                  <td className="border-2">{teacher.teachID}</td>
                  <td className="border-2">{teacher.name}</td>
                  <td className="border-2">{teacher.teachSubj}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Student Table Display */}
      <StudentCrudForm />
    </div>
  );
};

export default Tdashboard;
