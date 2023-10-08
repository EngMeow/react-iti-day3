import React, { useState } from "react";

export default function StudentForm({ addStudent }) {
  const [studentName, setStudentName] = useState("");
  const [studentAge, setStudentAge] = useState("");
  const [nameError, setNameError] = useState("");
  const [ageError, setAgeError] = useState("");

  const register = (event) => {
    event.preventDefault();
    let isValid = true;

    if (studentName.length < 3) {
      setNameError("Name is required and must be at least 3 characters");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!studentAge) {
      setAgeError("Age is required");
      isValid = false;
    } else {
      setAgeError("");
    }

    if (isValid) {
      addStudent({ name: studentName, age: studentAge });

      setStudentName("");
      setStudentAge("");
    }
  };

  return (
    <div className="container mt-5 border border-2-rounded p-3">
      <h1 className="text-center">Student Information</h1>
      <form onSubmit={register}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Student Name:
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="Enter student name"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
          />
          <p className="text-danger">{nameError}</p>
        </div>
        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Student Age:
          </label>
          <input
            type="number"
            className="form-control"
            id="age"
            placeholder="Enter student age"
            value={studentAge}
            onChange={(e) => setStudentAge(e.target.value)}
          />
          <p className="text-danger">{ageError}</p>
        </div>
        <button type="submit" className="btn btn-primary">
          Add Student
        </button>
      </form>
    </div>
  );
}
