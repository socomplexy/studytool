import { useLayoutEffect } from "react";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import "./Styles/App.scss";
import { Components } from "./Components";
import { Views } from "./Views";

const Inner = () => {
  const location = useLocation();

  // scroll to top of page after a page transition.
  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/base-practice" element={<Views.DNABasePractice />} />
      <Route path="/genetics" element={<Views.Genetics />} />
      <Route path="/molarity" element={<Views.Molarity />} />
      <Route
        path="/understanding-molarity"
        element={<Views.UnderstandingMolarity />}
      />
      <Route path="/molarity-practice" element={<Views.MolarityPractice />} />

      <Route path="/EquationPractice" element={<Views.EquationPractice />} />
      <Route
        path="/MolarityConversion"
        element={<Views.MolarityConversion />}
      />
      <Route path="/MoleculeGenerator" element={<Views.MoleculeGenerator />} />
      <Route path="/PedigreePractice" element={<Views.PedigreePractice />} />
      <Route
        path="/PunnettSquarePractice"
        element={<Views.PunnettSquarePractice />}
      />
      <Route path="/" element={<Views.Home />} />
    </Routes>
  );
};

function App() {
  return (
    <HashRouter className="App">
      <Components.AppBar />
      <Inner />
    </HashRouter>
  );
}

export default App;
