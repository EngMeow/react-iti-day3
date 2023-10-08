import React from "react";

export default function StudentList({ listOfStudents, removeStudent }) {
  return (
    <div className="container mt-5">
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody id="studentTable">
          {listOfStudents.map((student, id) => (
            <tr key={id}>
              <td>{id + 1}</td> {/* Adjust ID calculation */}
              <td>{student.name}</td>
              <td>{student.age}</td>
              <td>
                <button
                  onClick={() => removeStudent(id)}
                  className="btn btn-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
