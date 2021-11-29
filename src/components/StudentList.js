import React, { useState, useEffect } from "react";
import StudentDataService from "../services/StudentService";
import { Link } from "react-router-dom";

const StudentsList = () => {
  const [students, setStudents] = useState([]);
  const [currentStudent, setCurrentStudent] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(-1);

  useEffect(() => {
    retrieveStudents();
  }, []);


  const retrieveStudents = () => {
    fetch("http://localhost:8080/Netas_staj/webresources/students.student", {
      method: "GET",
      mode: "no-cors",
      headers: {
        Accept: 'application/json',
        "Content-Type": 'text/plain',
        "Access-Control-Allow-Origin": "*"
      }
    })
    .then(response => response.json())
.then(obj => {
  setStudents(obj);
  console.log(obj)}
  )
      .catch(e => {
        console.log(e);
      });
  };


  const refreshList = () => {
    retrieveStudents();
    setCurrentStudent(null);
    setCurrentIndex(-1);
  };

  const setActiveStudent = (student, index) => {
    setCurrentStudent(student);
    setCurrentIndex(index);
  };

  const removeAllStudents = () => {
    StudentDataService.removeAll()
      .then(response => {
        console.log(response.data);
        refreshList();
      })
      .catch(e => {
        console.log(e);
      });
  };


  return (
    <div className="list row">
          
      <div className="col-md-6">
        <h4>Students List</h4>

        <ul className="list-group">
          {students &&
            students.map((student, index) => (
              <li
                className={
                  "list-group-item " + (index === currentIndex ? "active" : "")
                }
                onClick={() => setActiveStudent(student, index)}
                key={index}
              >
                {student.firstName} {student.lastName}
              </li>
            ))}
        </ul>

        <button
          className="m-3 btn btn-sm btn-danger"
          onClick={removeAllStudents}
        >
          Remove All
        </button>
      </div>
      <div className="col-md-6">
        {currentStudent ? (
          <div>
            <h4>Student</h4>
            <div>
              <label>
                <strong>First Name:</strong>
              </label>{" "}
              {currentStudent.firstName}
            </div>
            <div>
              <label>
                <strong>Last Name:</strong>
              </label>{" "}
              {currentStudent.lastName}
            </div>
            <div>
              <label>
                <strong>Phone:</strong>
              </label>{" "}
              {currentStudent.Phone}
            </div>
            <div>
              <label>
                <strong>City:</strong>
              </label>{" "}
              {currentStudent.City}
            </div>
            <div>
              <label>
                <strong>District:</strong>
              </label>{" "}
              {currentStudent.District}
            </div>

            <div>
              <label>
                <strong>Description:</strong>
              </label>{" "}
              {currentStudent.Description}
            </div>
            <div>
              <label>
                <strong>Status:</strong>
              </label>{" "}
              {currentStudent.isActive ? "Active" : "Deleted"}
            </div>

            <Link
              to={"/students/" + currentStudent.id}
              className="badge badge-warning"
            >
              Edit
            </Link>
          </div>
        ) : (
          <div>
            <br />
            <p>Please click on a Student...</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StudentsList;
