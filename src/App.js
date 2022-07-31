import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FetchApi from "./FetchApi/FetchApi";
import { Counter } from "./Redux/Counter";
import { Provider } from "react-redux";

import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { Provider } from "react-redux";
import { Home } from "./ReduxPages/home";
import Cart from "./ReduxPages/cart";
import Navbar from "./component/navbar";
import Store from "./Redux-toolkit-store/store";

function App() {
  return (
    <div className="App">
      <Provider store={Store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/cart" element={<Cart />}></Route>
          </Routes>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
