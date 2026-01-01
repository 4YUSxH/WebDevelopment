import { useState } from "react";
import Card from "./components/Card";

function App() {
  const [pfp, setPfp] = useState("");
  const [name, setName] = useState("");
  const [num, setNum] = useState("");
  const [cards, setCards] = useState([]);

  const sumbitHandler = (evt) => {
    evt.preventDefault();
    console.log("Form Submitted");

    const newCard = {
      pfp: pfp,
      name: name,
      num: num,
    };
    const updatedCards = cards.slice();
    updatedCards.push(newCard);
    setCards(updatedCards);

    setPfp("");
    setName("");
    setNum("");
  };

  const binding = (evt) => {
    // console.log(evt.target.placeholder);

    if (evt.target.placeholder === "Profile Url") {
      setPfp(evt.target.value);
    }
    if (evt.target.placeholder === "Name") {
      setName(evt.target.value);
    }
    if (evt.target.placeholder === "Contact Number") {
      setNum(evt.target.value);
    }
  };

  return (
    <div>
      <form
        onSubmit={(dets) => {
          sumbitHandler(dets);
        }}
      >
        <input
          type="text"
          placeholder="Profile Url"
          required
          value={pfp}
          onChange={(dets) => {
            binding(dets);
          }}
        />
        <input
          type="text"
          placeholder="Name"
          required
          value={name}
          onChange={(dets) => {
            binding(dets);
          }}
        />
        <input
          type="text"
          placeholder="Contact Number"
          required
          value={num}
          onChange={(dets) => {
            binding(dets);
          }}
        />
        <button>Sumbit</button>
      </form>

      <div className="container">
        {cards.map((card, index) => (
          <Card
            key={index}
            propic={card.pfp}
            cntname={card.name}
            number={card.num}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
