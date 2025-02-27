import { useState } from "react";
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
      <Components.Header onClick={toggleIsOpen} isOpen={isOpen} />
      <Components.Menu isOpen={isOpen} onClick={updateView} />
      {view === "Home" ? <Views.Home /> : null}
      {view === "MolarityConversion" ? <Views.MolarityConversion /> : null}
      {view === "MolarityPractice" ? <Views.MolarityPractice /> : null}
      {view === "MoleculeGenerator" ? <Views.MoleculeGenerator /> : null}
      {view === "UnderstandingMolarity" ? (
        <Views.UnderstandingMolarity updateView={updateView} />
      ) : null}
    </div>
  );
}

export default App;
