import axios from "axios"; // Import Axios after Install
import User from "./components/User";
import { useState } from "react";

const App = () => {
  const [allUser, setAllUser] = useState([]);

  let getdata = async () => {
    // Create async-await func with axios cause it's promised based
    console.log("Fethcing Details...");

    let response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    console.log(response.data);

    setAllUser(response.data);
  };

  return (
    <div>
      <button onClick={getdata}>Get Data</button>

      <div className="card-container">
        {allUser.map((elem, idx) => {
          return (
            <div key={idx}>
              <User elem={elem} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
