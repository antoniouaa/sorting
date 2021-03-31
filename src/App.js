import "./App.css";
import BubbleSort from "./Components/BubbleSort";
import QuickSort from "./Components/QuickSort";

function App() {
  return (
    <div className="App">
      <h1>Visualisation Tool</h1>
      <div>
        <BubbleSort />
        <QuickSort />
      </div>
    </div>
  );
}

export default App;
