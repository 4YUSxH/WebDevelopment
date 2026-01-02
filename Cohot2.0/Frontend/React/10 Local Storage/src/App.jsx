import React, { useState } from "react";
import Card from "./components/Card";

const App = () => {
  // localStorage.clear()
  const [name, setName] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [role, setRole] = useState("");
  const [desc, setDesc] = useState("");
  
  // Implementing LocalStorage
  const localData = JSON.parse(localStorage.getItem("all-users")) || [];
  const [allUser, setAllUser] = useState(localData);

  const sumbitHandler = (e) => {
    e.preventDefault();
    console.log("Form Submbitted");

    console.log(name, imageUrl, role, desc);
    let oldUser = [...allUser];
    oldUser.push({ name, imageUrl, role, desc });
    setAllUser(oldUser);
    console.log(oldUser);
    localStorage.setItem("all-users", JSON.stringify(oldUser));

    setName("");
    setImageUrl("");
    setRole("");
    setDesc("");
  };

  const deleteHandler = (idx) => {
    const copyUser = [...allUser];
    copyUser.splice(idx, 1);
    setAllUser(copyUser);
    localStorage.setItem("all-users", JSON.stringify(copyUser));
  };

  return (
    <div className="h-screen bg-black text-white">
      <form
        className="px-2 py-2 flex flex-wrap"
        onSubmit={(dets) => {
          sumbitHandler(dets);
        }}
      >
        <input
          className="border-2 text-xl font-semibold px-5 py-2 rounded m-2 lg:w-[48%]"
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(evt) => {
            setName(evt.target.value);
          }}
        />

        <input
          className="border-2 text-xl font-semibold px-5 py-2 rounded m-2 lg:w-[48%]"
          type="text"
          placeholder="Image URL"
          value={imageUrl}
          onChange={(evt) => {
            setImageUrl(evt.target.value);
          }}
        />

        <input
          className="border-2 text-xl font-semibold px-5 py-2 rounded m-2 lg:w-[48%]"
          type="text"
          placeholder="Enter Role"
          value={role}
          onChange={(evt) => {
            setRole(evt.target.value);
          }}
        />

        <input
          className="border-2 text-xl font-semibold px-5 py-2 rounded m-2 lg:w-[48%]"
          type="text"
          placeholder="Enter Description"
          value={desc}
          onChange={(evt) => {
            setDesc(evt.target.value);
          }}
        />

        <button className=" px-5 py-2 text-xl active:scale-95 cursor-pointer font-semibold bg-emerald-700 rounded m-2 w-[97%]">
          Create User
        </button>
      </form>

      {allUser.map((elem, idx) => {
        return <Card elem={elem} key={idx} deleteHandler={deleteHandler} />;
      })}
    </div>
  );
};

export default App;
