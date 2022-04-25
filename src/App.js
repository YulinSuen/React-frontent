import logo from "./logo.svg";
import "./App.css";
import ListEmployeeComponent from "./components/ListEmployeeComponent";

function App() {
  return (
    // bootstrap的className
    <div className="container">
      <ListEmployeeComponent />
    </div>
  );
}

export default App;
