import axios from "axios";
import { useEffect, useState } from "react";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [showUpdateId, setShowUpdateId] = useState(null); // controls popup

  // GET
  const fetchingData = async () => {
    const res = await axios.get("http://localhost:3000/api/notes");
    setNotes(res.data.fetched_notes);
  };

  // POST
  const handelSumbit = async (e) => {
    e.preventDefault();
    const { title, desc } = e.target.elements;

    const res = await axios.post("http://localhost:3000/api/notes", {
      title: title.value,
      desc: desc.value,
    });

    fetchingData();
    console.log(res)
    e.target.reset();
  };

  // DELETE
  const noteDelete = async (noteId) => {
    const res = await axios.delete(`http://localhost:3000/api/notes/${noteId}`);
    fetchingData();
    console.log(res)
  };

  // Updating Note
  const updateSubmit = async (e, noteId) => {
    e.preventDefault()

    const {updated_title} = e.target.elements

    console.log(updated_title.value, noteId)

    const res = await axios.patch(`http://localhost:3000/api/notes/${noteId}`, {title: updated_title.value})
    fetchingData()
    console.log(res)
  }

  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <>
      {/* CREATE FORM */}
      <form className="note-create-form" onSubmit={handelSumbit}>
        <input name="title" type="text" placeholder="Enter title" />
        <input name="desc" type="text" placeholder="Enter description" />
        <button>Create note</button>
      </form>

      <div className="notes">
        {notes.map((note, idx) => {
          return (
            <div key={idx} className="note">
              <h1>{note.title}</h1>
              <p>{note.desc}</p>

              <div className="btn-container">
                <button
                  onClick={() => noteDelete(note._id)}
                  className="delete-btn"
                >
                  Delete
                </button>

                <button
                  className="update-btn"
                  onClick={() => setShowUpdateId(note._id)}
                >
                  Update title
                </button>
              </div>

              {/* UPDATE FORM (UI ONLY) */}
              {showUpdateId === note._id && (
                <form onSubmit={(e) => {updateSubmit(e, note._id)}} className="note-update-form">
                  <input
                    name="updated_title"
                    type="text"
                    placeholder="Update description"
                  />
                  <button>Update</button>

                  {/* cancel button */}
                  <button
                    type="button"
                    onClick={() => setShowUpdateId(null)}
                  >
                    Cancel
                  </button>
                </form>
              )}
            </div>
          );
        })}
      </div>
    </>
  );
};

export default App;
