import React from "react";

const Userinput = ({id, type, placeholder, heading, onChange}) => {
  return (
    <>
      <label htmlFor={id}>{id}</label>
      <input id={id} type={type} placeholder={placeholder} onChange={onChange} />
    </>
  );
};

export default Userinput;
