import React, { useState } from "react";
// import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap

function StudentsNotes() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState([]);
  // Add note at the beginning
  function addNote() {
    if (title.trim() && description.trim()) {
      setNotes([{ title, description }, ...notes]);
      setTitle("");
      setDescription("");
    }
  }
  return (
    <div className="container mt-4">
      <h1 className="text-center text-primary">Student Notes</h1>
      <div className="card shadow p-4 mt-3">
        <input
          type="text"
          className="form-control mb-3"
          value={title}
          placeholder="Enter title..."
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          className="form-control mb-3"
          value={description}
          placeholder="Write your note here..."
          onChange={(e) => setDescription(e.target.value)}
          rows="3"
        />
        <button className="btn btn-primary w-100" onClick={addNote}>
          ADD NOTE
        </button>
      </div>
      <div className="mt-4">
        {notes.length === 0 ? (
          <p className="text-center text-muted">No notes added yet.</p>
        ) : (
          <div className="row">
            {notes.map((note, i) => (
              <div key={i} className="col-md-6">
                <div className="card mt-3 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{note.title}</h5>
                    <p className="card-text">{note.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
export default StudentsNotes;
