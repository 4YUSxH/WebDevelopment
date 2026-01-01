function Card({ propic, cntname, number }) {
  return (
    <div className="card">
      <img src={propic || "https://via.placeholder.com/150"} alt="profile" />
      <h3>{cntname}</h3>
      <p>{number}</p>
    </div>
  );
}

export default Card;
