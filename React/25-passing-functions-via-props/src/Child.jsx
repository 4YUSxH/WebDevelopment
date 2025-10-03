const Child = (props) => {
  return (
    <div>
        {props.children}
      <button onClick={props.updatevalue}>{props.text}</button>
    </div>
  );
};

export default Child;
