function Navbar() {
  const img = React.createElement("img", {
    src: "./6887bbbd362fae74a65328f7_Logo.svg",
    alt: "Logo"
  });

  const ul = React.createElement("ul", null, [
    React.createElement("li", { id: "logo" }, img),
    React.createElement("li", null, "About Me"),
    React.createElement("li", null, "Portfolio"),
    React.createElement("li", null, "Services"),
    React.createElement("li", null, "Blog")
  ]);

  const icon = React.createElement("i", {
    className: "ri-arrow-right-up-line"
  });

  const link = React.createElement(
    "a",
    { href: "#" },
    ["Book A Call ", icon]
  );

  return React.createElement(
    "div",
    { className: "nav" },
    [ul, link]
  );
}

export default Navbar;
