import React, { useState, useEffect } from "react";
import StudentDataService from "../services/StudentService";

const Student = props => {
  const initialStudentState = {
    id: null,
    firstName: "",
    lastName: "",
    phone: "",
    city: "",
    district: "",
    description: ""
  };
  const [currentStudent, setCurrentStudent] = useState(initialStudentState);
  const [message, setMessage] = useState("");

  const getStudent = id => {
    StudentDataService.get(id)
      .then(response => {
        setCurrentStudent(response.data);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  useEffect(() => {
    getStudent(props.match.params.id);
  }, [props.match.params.id]);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setCurrentStudent({ ...currentStudent, [name]: value });
  };

  const updateStudent = () => {
    StudentDataService.update(currentStudent.id, currentStudent)
      .then(response => {
        console.log(response.data);
        setMessage("The Student was updated successfully!");
      })
      .catch(e => {
        console.log(e);
      });
  };

  const deleteStudent = () => {
    StudentDataService.remove(currentStudent.id)
      .then(response => {
        console.log(response.data);
        props.history.push("/Students");
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <div>
      {currentStudent ? (
        <div className="edit-form">
          <h4>Student</h4>
          <form>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              required
              value={currentStudent.firstName}
              onChange={handleInputChange}
              name="firstName"
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              required
              value={currentStudent.lastName}
              onChange={handleInputChange}
              name="lastName"
            />
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              className="form-control"
              id="phone"
              required
              value={currentStudent.phone}
              onChange={handleInputChange}
              name="phone"
            />
          </div>

          <div className="form-group">
            <label htmlFor="city">City</label>
            <input
              type="text"
              className="form-control"
              id="city"
              required
              value={currentStudent.city}
              onChange={handleInputChange}
              name="city"
            />
          </div>

          <div className="form-group">
            <label htmlFor="district">District</label>
            <input
              type="text"
              className="form-control"
              id="district"
              required
              value={currentStudent.district}
              onChange={handleInputChange}
              name="district"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={currentStudent.description}
              onChange={handleInputChange}
              name="description"
            />
          </div>

           
          </form>

          <button className="badge badge-danger mr-2" onClick={deleteStudent}>
            Delete
          </button>

          <button
            type="submit"
            className="badge badge-success"
            onClick={updateStudent}
          >
            Update
          </button>
          <p>{message}</p>
        </div>
      ) : (
        <div>
          <br />
          <p>Please click on a Student...</p>
        </div>
      )}
    </div>
  );
};

export default Student;
