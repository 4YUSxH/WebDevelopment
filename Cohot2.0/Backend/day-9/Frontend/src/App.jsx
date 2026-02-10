import React, { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [updated_note, setUpdated_note] = useState(); // For updating desc

  // Callin GET
  const fetchNotes = () => {
    axios
      .get("http://localhost:3000/api/notes")
      .then((res) => {
        console.log(res.data.notes);
        setNotes(res.data.notes);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  // Calling POST
  const handelSubmit = (e) => {
    e.preventDefault();

    const { title, desc } = e.target.elements;

    console.log(title.value, desc.value);

    axios
      .post("http://localhost:3000/api/notes", {
        title: title.value,
        desc: desc.value,
      })
      .then((res) => {
        console.log(res);
        fetchNotes(); // This will run setNotes
      });
  };

  // Calling DELETE
  const handelDeleteNote = (noteId) => {
    console.log(noteId);
    axios
      .delete(`http://localhost:3000/api/notes/${noteId}`)
      .then((res) => console.log(res), fetchNotes());
  };

  // Takind updated input from user
  const handelUpdatedTitle = (e) => {
    e.preventDefault();

    const { updated_title } = e.target.elements;

    console.log(updated_title.value);
    setUpdated_note(updated_title.value);
  };

  // Calling PATCH 
  const handelUpdateNote = (noteId) => {
    console.log(noteId);
    console.log(updated_note);

    axios
      .patch(`http://localhost:3000/api/notes/${noteId}`, {
        desc: updated_note,
      })
      .then((res) => {
        console.log(res);
        fetchNotes(); // This will run setNotes
      });
  };
  return (
    <>
      <form className="note-create-form" onSubmit={handelSubmit}>
        <input name="title" type="text" placeholder="Enter title" />
        <input name="desc" type="text" placeholder="Enter description" />
        <button>Create note</button>
      </form>

      <form className="note-create-form" onSubmit={handelUpdatedTitle}>
        <input name="updated_title" type="text" placeholder="Update description" />
        <button>Update</button>
      </form>

      <div className="notes">
        {notes.map((note, idx) => {
          return (
            <div key={idx} className="note">
              <h1>{note.title}</h1>
              <p>{note.desc}</p>
              <div className="btn-container">
                <button
                  onClick={() => {
                    handelDeleteNote(note._id);
                  }}
                  className="delete-btn"
                >
                  Delete
                </button>
                <button
                  onClick={() => handelUpdateNote(note._id)}
                  className="update-btn"
                >
                  Update desc
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
