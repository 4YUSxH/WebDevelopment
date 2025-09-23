import styles from "./Show.module.css" // Css module

const Show = (props) => { // Acceping name as props send by App.jsx
  return <h1 className={`${styles["show-name"]}`}>My name is {props.name}</h1>;// Using name from props(props can contain multiple data)
// 2nd wah to use parse props to h1:  let name = {props.name}; Destrucitng 
// 3rd wah to use parse props to h1:  const Show = ({{name}}) => {} Destrucitng 

// Css module: show-name par ek unique id assign ho gayi for avoiding css conflict \
// className={`${styles["show-name"]}`} Using show-name class with css module
};
export default Show;
