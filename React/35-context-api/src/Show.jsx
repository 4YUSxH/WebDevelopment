import { useContext } from "react";
import { contextdata } from "./contexts/Context";

function Show() {
    const data = useContext(contextdata);
    console.log(data);
    return (
    <div>
      <h1>That is showed by using Context API: {data}</h1>
    </div>
  );
}

export default Show;
