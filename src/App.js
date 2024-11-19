import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import "./App.css";
import store from "./store/store";
import { Provider } from "react-redux";
import Layout from "./Layout/Layout";
import ElectronicItems from "./components/Items/ElectronicItems/ElectronicItems";

function App() {
  return (
    <div className="App">
      <Router>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/items/:name" element={<ElectronicItems />} />
            </Route>
            {/* <Route path="/" element={<Home />}>
            <Route index element={<Dashboard />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Dashboard />} />
            <Route exact path="shop/:collection" component={Items}>
              <Route exact path="collection/:name" component={ItemDetail} />
            </Route>
          </Route> */}
          </Routes>
        </Provider>
      </Router>
    </div>
  );
}

export default App;
