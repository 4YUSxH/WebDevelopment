import React, { useEffect, useState } from "react";
import axios from "axios";

const Usecase1 = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  let getData = async () => {
    let res = await axios.get("https://randomuser.me/api/");
    console.log(res.data.results[0].name.first);
    setName(res.data.results[0].name.first);
  };

  useEffect(function () {
    getData();
  }, [count]); // count ke change hone par ye function chalega
  return (
    <div>
      <h1>{name}</h1>

      {/* <button onClick={() => {
        getData()
      }}>Change User</button> Instead of using this we use useEffect */}

      <p>{count}</p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Change User
      </button>
    </div>
  );
};

export default Usecase1;
