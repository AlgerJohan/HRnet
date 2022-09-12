import React from "react";
import Homepage from "./Components/homepage";
import Employee from "./Components/employee";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { homepage, employee } from "./Components/routes";
import Footer from "./Components/partials/_footer";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path={homepage} element={<Homepage />} />
          <Route path={employee} element={<Employee />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
