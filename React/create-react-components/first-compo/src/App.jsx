import MyButton from './MyButton.jsx'
// Importing MyButton.jsx component 
import Hello from './Hello.jsx';
// Importing Hello.jsx component
import Random from './Random.jsx';
// Importing Hello.jsx component

function App() {
  return <div>
      <h1>Hello World!</h1>

      <MyButton></MyButton>

      <Hello></Hello>

      <Random></Random>
      <Random></Random>
      <Random></Random>
      <Random></Random>
      <Random></Random>
      {/* Resuing Random components again and again */}
    </div>

}

export default App;

// App is a compoenet
// For using custom components you have to import them in main.jsx

// Firstky App component ne Mybutton ko impoert kiya aur use kiya and last mai khud export ho gaya to main.jsx(main.jsx mai App component imported hoga)