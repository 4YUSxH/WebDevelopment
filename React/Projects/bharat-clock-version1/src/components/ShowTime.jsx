let ShowTime = () => {
 let time = new Date();
  return (
    <h1 class="display-6">
      This is the current time: {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </h1>
  );
};
export default ShowTime;
