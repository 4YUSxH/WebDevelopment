import { useState } from "react";

function App() {
  const [value, setValue] = useState(""); 

  let sumbitHandler = (e) => {
    e.preventDefault();
    console.log(value); // log final value after sumbit 
    console.log("Form Submitted");
    setValue(""); // This will clear input's value after sumbit
  };
 
  return (
    <div>
      <form onSubmit={(evt) => {
          sumbitHandler(evt);
        }}>
        <input 
          type="text"
          placeholder="Enter name"
//        value="Ayush" Hamesha yahi likha rahega input mai
          value={value}
          required // This attribute to apply required isse empty sting fill nahi hogi input mai
          onChange={(dets) => {
            // console.log(dets.target.value);
            setValue(dets.target.value);       
          }}       
        />
        <button>Sumbit</button>
      </form>
    </div>
  )
}

export default App
