import { useContext } from "react";
import { UserDataContext } from "../context/UserContext";

const Sections = () => {
  const providedData = useContext(UserDataContext);
  console.log(providedData);
  return (
    <div>
      <h1 className="text-2xl h-110 bg-zinc-500">All Sections</h1>
      <h1 className="text-2xl absolute top-30">
        Accessing data directly using context api : {providedData}
      </h1>
    </div>
  );
};

export default Sections;
