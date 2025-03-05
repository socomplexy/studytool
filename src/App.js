import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./Styles/App.scss";
import { Components } from "./Components";
import { Views } from "./Views";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = (status) => setIsOpen(status);

  const [view, setView] = useState("Home");
  const updateView = (newView) => {
    newView !== view && setView(newView);
    toggleIsOpen(false);
  };

  return (
    <div className="App">
      <Router>
        {/* <Components.Header onClick={toggleIsOpen} isOpen={isOpen} /> */}
        <Components.AppBar />
        <Routes>
          <Route path="/base-practice" element={<Views.DNABasePractice />} />
          <Route path="/genetics" element={<Views.Genetics />} />
          <Route path="/molarity" element={<Views.Molarity />} />
          <Route
            path="/understanding-molarity"
            element={<Views.UnderstandingMolarity />}
          />
          <Route
            path="/molarity-practice"
            element={<Views.MolarityPractice />}
          />

          <Route
            path="/EquationPractice"
            element={<Views.EquationPractice />}
          />
          <Route
            path="/MolarityConversion"
            element={<Views.MolarityConversion />}
          />
          <Route
            path="/MoleculeGenerator"
            element={<Views.MoleculeGenerator />}
          />
          <Route
            path="/PedigreePractice"
            element={<Views.PedigreePractice />}
          />
          <Route
            path="/PunnettSquarePractice"
            element={<Views.PunnettSquarePractice />}
          />
          <Route path="/" element={<Views.Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
