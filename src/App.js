import logo from "./logo.svg";
import "./App.css";
import AppRouter from "./config/router";
import "./style.css";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <AppRouter />
      </Provider>
    </div>
  );
}

export default App;
