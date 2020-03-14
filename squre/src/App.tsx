import React from "react";
import Layout from "./pages/Layout";
import ScrollTop from "./Component/ScrollTop";
import { BrowserRouter } from "react-router-dom";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout />
        <ScrollTop />
      </BrowserRouter>
    </div>
  );
};

export default App;
