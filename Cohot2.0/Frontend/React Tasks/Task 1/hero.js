function Hero() {
  return React.createElement(
    "div",
    { className: "hero" },
    [
      React.createElement("img", {
        className: "right",
        src: "./Screenshot 2025-12-21 at 23-18-19 22ec81b97ab8b01d78aa7619c66fdbf7.jpg (JPEG Image 1200 × 1200 pixels)(1).png",
        alt: "Hero visual"
      }),

      React.createElement(
        "div",
        { className: "container" },
        [
          React.createElement(
            "div",
            { className: "up" },
            [
              React.createElement(
                "div",
                { className: "upcol" },
                [
                  React.createElement("h2", null, "+200"),
                  React.createElement("p", null, "Project completed")
                ]
              ),
              React.createElement(
                "div",
                { className: "upcol" },
                [
                  React.createElement("h2", null, "+50"),
                  React.createElement("p", null, "Startup raised")
                ]
              )
            ]
          ),

          React.createElement(
            "div",
            { className: "middle" },
            [
              React.createElement("h1", null, "Hello"),
              React.createElement(
                "p",
                null,
                "- It's D.Nova a design wizard"
              )
            ]
          ),

          React.createElement("a", { href: "#" }, "Scroll down")
        ]
      )
    ]
  );
}

export default Hero;
