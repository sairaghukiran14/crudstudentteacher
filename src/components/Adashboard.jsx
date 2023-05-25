import React, { useState } from "react";
import { GoSignOut } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import StudentCrudForm from "./StudentCrudForm";
import { useContext } from "react";
import { store } from "../App";
import TeacherCrudForm from "./TeacherCrudForm";
const Adashboard = () => {
  const { teachers, setTeachers } = useContext(store);

  const navigate = useNavigate();

  return (
    <div className="adashboard">
      <div className="navbar w-full h-10 bg-slate-200 flex items-center justify-between">
        <div className="title ml-2 font-bold text-xl">Admin Dashboard</div>
        <div
          className="signout flex justify-evenly items-center w-46 mr-2 bg-white p-1 rounded px-2"
          onClick={() => navigate("/")}
        >
          <GoSignOut className="text-xl " />
          <div className="ml-1">SignOut</div>
        </div>
      </div>
      <div className="welcome text-center text-xl mt-2">
        --- Welcome Admin ---
      </div>
      <div className="dash flex flex-col mt-2">
        <div className="stu mt-2">
          <StudentCrudForm />
        </div>

        <div className="tea mt-2">
          <TeacherCrudForm />
        </div>
      </div>
    </div>
  );
};

export default Adashboard;
