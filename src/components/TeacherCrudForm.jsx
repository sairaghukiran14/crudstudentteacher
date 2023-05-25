import React, { useState, useContext } from "react";
import { store } from "../App";

const TeacherCrudForm = () => {
  const { teachers, setTeachers } = useContext(store);
  const [tedit, setTedit] = useState("false");
  const [t, setT] = useState({});

  const [isDisabled, setIsDisabled] = useState(false);

  const [teacher, setTeacher] = useState({
    name: "",
    teachID: "",
    teachSubj: "",
    password: "",
  });
  const { name, teachID, teachSubj, password } = teacher;
  //   INPUT HANDLER
  const inputHandler = (e) => {
    setTeacher((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  // CREATE USER
  const CreateTeacher = () => {
    if (tedit === "false") {
      setTeachers([...teachers, teacher]);
      setTeacher({ name: "", teachID: "", teachSubj: "", password: "" });
    } else {
      teachers.find((u) => u.teachID === teacher.teachID)
        ? teachers.splice(teachers.indexOf(t), 1, teacher)
        : console.log("I dont Know");
      setTeacher({
        name: "",
        teachID: "",
        teachSubj: "",
        password: "",
      });
      setIsDisabled(false);
    }
  };
  // EDIT USER
  const EditTeacher = (teachID) => {
    const currentTeacher = teachers;
    const i = currentTeacher.find((t) => t.teachID === teachID);

    setTeacher(i);
    setTedit("true");
    setT(i);
    setIsDisabled(true);
  };
  //   DELETE USER
  const DeleteTeacher = (teachID) => {
    const currentTeacher = teachers;
    const i = currentTeacher.filter((t) => t.teachID !== teachID);
    setTeachers(i);
    console.log(teachers);
  };

  return (
    <div className="teachsection flex justify-center items-center mt-3">
      <table className="border-2 rounded ">
        <thead className="bg-orange-500 text-white rounded">
          <tr>
            <th className="border-2">Teacher Id</th>
            <th className="border-2">Teacher Name</th>
            <th className="border-2">Subject </th>
            <th className="border-2">Password </th>
            <th className="border-2">Edit Section</th>
            <th className="border-2">Delete Section</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher) => (
            <tr>
              <td className="border-2">{teacher.teachID}</td>
              <td className="border-2">{teacher.name}</td>
              <td className="border-2">{teacher.teachSubj}</td>
              <td className="border-2">{teacher.password}</td>
              <td className="border-2">
                <button
                  className="bg-blue-800 text-white py-1 px-6 rounded"
                  onClick={() => {
                    EditTeacher(teacher.teachID);
                  }}
                >
                  Edit
                </button>
              </td>
              <td className="border-2">
                <button
                  className="bg-red-400 text-white py-1 px-6 rounded"
                  onClick={() => {
                    DeleteTeacher(teacher.teachID);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* CRUD FORM STARTS HERE */}
      <div className="cudform flex border-2 flex-col justify-center items-center ml-6">
        <h2 className="text-xl">Add / Edit Teacher Details</h2>

        <form
          action=""
          className="flex flex-col items-center justify-center p-4 px-5"
        >
          <input
            type="text"
            placeholder="Teacher ID"
            name="teachID"
            value={teachID}
            className="border-2 rounded p-2 my-2 w-full"
            disabled={isDisabled}
            onChange={(e) => {
              inputHandler(e);
            }}
            required
          />
          <input
            type="text"
            placeholder="Teacher name"
            name="name"
            value={name}
            className="border-2 rounded p-2 my-2 w-full"
            onChange={(e) => {
              inputHandler(e);
            }}
            required
          />
          <input
            type="text"
            placeholder="Subjects"
            name="teachSubj"
            value={teachSubj}
            className="border-2 rounded p-2 my-2 w-full"
            onChange={(e) => {
              inputHandler(e);
            }}
            required
          />
          <input
            type="password"
            placeholder="Password"
            name="password"
            value={password}
            className="border-2 rounded p-2 my-2 w-full"
            onChange={(e) => {
              inputHandler(e);
            }}
            required
          />
          <button
            className="bg-green-400 px-3 py-2 rounded"
            onClick={(e) => {
              CreateTeacher(e);
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default TeacherCrudForm;
