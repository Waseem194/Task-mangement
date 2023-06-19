import { Provider } from "react-redux";
import Store from "./Component/Store/Store";
import './App.css';

function App() {
  return (
    <div className="App">
     

    <Provider store={Store}>

    </Provider>

    </div>
  );
}

export default App;
