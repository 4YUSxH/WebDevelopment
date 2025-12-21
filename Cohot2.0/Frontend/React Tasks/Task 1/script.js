import Navbar from "./nav.js";
import Hero from "./hero.js";

const root = ReactDOM.createRoot(
  document.getElementById("root")
);

root.render(
  React.createElement(
    React.Fragment,
    null,
    [
      React.createElement(Navbar),
      React.createElement(Hero)
    ]
  )
);
