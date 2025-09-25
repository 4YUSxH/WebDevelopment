import Container from "./componenets/Container";
import "./App.css";

function App() {
  return <>
    <Container>
      <h1>I am children 1</h1>
      <h3>I am children 2</h3>
    </Container>
    <Container>
      <h1>We can create multiple Container according to our need</h1>
    </Container>
    <Container>
      <p>Container doesn't care about its inside data(child props) like 1st time we parse h1,h1 and, 2nd time h1 and now a paragraph(p)</p>
    </Container>
  </>;
}

export default App;
