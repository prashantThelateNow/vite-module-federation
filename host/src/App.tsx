import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import RouteConfig from "./routes/RouteConfig";

function App() {
  return (
    <Router>
      <RouteConfig />
    </Router>
  );
}

export default App;
