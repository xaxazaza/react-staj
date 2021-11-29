import React, { useState } from "react";
import StudentDataService from "../services/StudentService";

const AddStudent = () => {
  const initialStudentState = {
    id: null,
    firstName: "",
    lastName: "",
    phone: "",
    city: "",
    district: "",
    description: ""
  };
  const [student, setStudent] = useState(initialStudentState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = event => {
    const { name, value } = event.target;
    setStudent({ ...student, [name]: value });
  };

  const saveStudent = () => {
    var data = {
      firstname: student.firstName,
      lastname: student.lastName,
      phone: student.phone,
      district: student.district,
      description: student.description,
      isactive: 0,
    };

    fetch('http://localhost:8080/Netas_staj/webresources/students.student', {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        setStudent({
          id: response.data.id,
          firstName: response.data.firstName,
          lastName: response.data.lastName,
          phone: response.data.phone,
          description: response.data.description,
          district: response.data.district
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch(e => {
        console.log(e);
      });
  };

  const newStudent = () => {
    setStudent(initialStudentState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newStudent}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              required
              value={student.firstName}
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
              value={student.lastName}
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
              value={student.phone}
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
              value={student.city}
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
              value={student.district}
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
              value={student.description}
              onChange={handleInputChange}
              name="description"
            />
          </div>

          <button onClick={saveStudent} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
};

export default AddStudent;
