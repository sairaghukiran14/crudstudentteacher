import React, { useState, useContext } from "react";
import { store } from "../App";

const StudentCrudForm = () => {
  const { students, setStudents } = useContext(store);
  const [edit, setEdit] = useState("false");
  const [e, setE] = useState({});
  //   const { prevStudent, setPrevStudent } = useState();
  const [isDisabled, setIsDisabled] = useState(false);
  //   console.log(students);

  const [student, setStudent] = useState({
    name: "",
    rollno: "",
    studyclass: "",
    password: "",
  });
  const { name, rollno, studyclass, password } = student;
  //   INPUT HANDLER
  const inputHandler = (e) => {
    setStudent((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };
  // CREATE USER
  const CreateStudent = () => {
    if (edit === "false") {
      setStudents([...students, student]);

      setStudent({ name: "", rollno: "", studyclass: "", password: "" });
    } else {
      students.find((u) => u.rollno === student.rollno)
        ? students.splice(students.indexOf(e), 1, student)
        : console.log("I dont Know");
      setStudent({ name: "", rollno: "", studyclass: "", password: "" });
      setIsDisabled(false);
    }
  };
  // EDIT USER
  const EditStudent = (rollno) => {
    const currentStudent = students;
    const i = currentStudent.find((stud) => stud.rollno === rollno);

    setStudent(i);
    setEdit("true");
    setE(i);
    setIsDisabled(true);
  };
  //   DELETE USER
  const DeleteStudent = (rollno) => {
    const currentStudent = students;
    const i = currentStudent.filter((stud) => stud.rollno !== rollno);
    setStudents(i);
  };

  return (
    <div className="studentsection flex justify-center items-center">
      <table className="border-2 rounded ">
        <thead className="bg-blue-500 text-white rounded">
          <tr>
            <th className="border-2">Student Id</th>
            <th className="border-2">Student Name</th>
            <th className="border-2">Student Class</th>
            <th className="border-2">Password</th>
            <th className="border-2">Edit Section</th>
            <th className="border-2">Delete Section</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr>
              <td className="border-2">{student.rollno}</td>
              <td className="border-2">{student.name}</td>
              <td className="border-2">{student.studyclass}</td>
              <td className="border-2">{student.password}</td>
              <td className="border-2">
                <button
                  className="bg-blue-800 text-white py-1 px-6 rounded"
                  onClick={() => {
                    EditStudent(student.rollno);
                  }}
                >
                  Edit
                </button>
              </td>
              <td className="border-2">
                <button
                  className="bg-red-400 text-white py-1 px-6 rounded"
                  onClick={() => {
                    DeleteStudent(student.rollno);
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
        <h2 className="text-xl">Add / Edit Student Details</h2>

        <form
          action=""
          className="flex flex-col items-center justify-center p-4 px-5"
        >
          <input
            type="text"
            placeholder="Student ID"
            name="rollno"
            value={rollno}
            className="border-2 rounded p-2 my-2 w-full"
            disabled={isDisabled}
            onChange={(e) => {
              inputHandler(e);
            }}
            required
          />
          <input
            type="text"
            placeholder="Student name"
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
            placeholder="Study Class"
            name="studyclass"
            value={studyclass}
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
              CreateStudent(e);
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default StudentCrudForm;
