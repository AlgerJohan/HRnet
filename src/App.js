import React from "react";
import Homepage from "./Components/homepage";
import Employee from "./Components/employee";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { homepage, employee } from "./Components/routes";
import Footer from "./Components/partials/_footer";
import { Provider } from "react-redux";
import { store } from "./app/store";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

let persistor = persistStore(store);

const App = () => {
  return (
    <div className="App">
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <BrowserRouter>
            <Routes>
              <Route path={homepage} element={<Homepage />} />
              <Route path={employee} element={<Employee />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </PersistGate>
      </Provider>
    </div>
  );
};

export default App;
