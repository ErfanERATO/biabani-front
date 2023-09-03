import "bootstrap/dist/css/bootstrap.min.css";
import "./Assets/Style/index.scss"
import Routing from "./Components/Routing";
import Router from "./Router";


function App() {
  return (
    <div className="App">
      <Routing routes={Router} />
    </div>
  );
}

export default App;
