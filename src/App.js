import Navbar from "./components/Navbar";
import Pictures from "./components/Pictures";
import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Link,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={<Pictures key="nature" category="nature" />}
          ></Route>
          <Route
            exact
            path="/science"
            element={<Pictures key="science" category="science" />}
          ></Route>
          <Route
            exact
            path="/education"
            element={<Pictures key="education" category="education" />}
          ></Route>
          <Route
            exact
            path="/feelings"
            element={<Pictures key="feelings" category="feelings" />}
          ></Route>
          <Route
            exact
            path="/music"
            element={<Pictures key="music" category="music" />}
          ></Route>
          <Route
            exact
            path="/computer"
            element={<Pictures key="computer" category="computer" />}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
