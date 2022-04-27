import React from "react";
import { BrowserRouter } from "react-router-dom";
import HeaderComponent from "./components/HeaderComponent";
import BodyComponent from "./components/BodyComponent";
import FooterComponent from "./components/FooterComponent";
import "./App.css";

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <HeaderComponent />
        <BodyComponent />
        <FooterComponent />
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
