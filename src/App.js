import { useState, useLayoutEffect } from "react";
import { HashRouter, Route, Routes, useLocation } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import "./Styles/App.scss";
import "./Styles/Images.scss";
import { Components } from "./Components";
import { Utils } from "./utils";
import { Views } from "./Views";

const Inner = ({ isLargeScreen, handleNavOpen }) => {
  const location = useLocation();

  // scroll to top of page after a page transition.
  useLayoutEffect(() => {
    document.documentElement.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [location.pathname]);

  const sharedProps = {
    isLargeScreen,
    handleNavOpen,
    MenuIcon: (
      <MenuIcon
        onClick={handleNavOpen}
        style={{ position: "absolute", top: 10, left: 10, cursor: "pointer" }}
      />
    ),
  };

  return (
    <Routes>
      {Object.keys(Views).map((v) => {
        const currentView = Views[v];

        return currentView.active ? (
          <Route
            key={v}
            path={currentView.path}
            element={<currentView.element {...sharedProps} />}
          />
        ) : null;
      })}
    </Routes>
  );
};

function App() {
  const { width } = Utils.useWindowDimensions();
  const isLargeScreen = width > 1000;
  const [navOpen, setNavOpen] = useState(false);
  const handleNavClose = () => setNavOpen(false);
  const handleNavOpen = () => setNavOpen(true);

  return (
    <HashRouter className="App">
      <div style={{ display: isLargeScreen ? "flex" : "block" }}>
        <Components.Drawer
          isLargeScreen={isLargeScreen}
          navOpen={navOpen}
          handleNavClose={handleNavClose}
          handleNavOpen={handleNavOpen}
        />
        <Inner
          isLargeScreen={isLargeScreen}
          navOpen={navOpen}
          handleNavClose={handleNavClose}
          handleNavOpen={handleNavOpen}
        />
      </div>
    </HashRouter>
  );
}

export default App;
