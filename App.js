import { useState } from "react";
import "./App.css";
// import About from "./component/About";
import Alert from "./component/Alert";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
import React from "react";

// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);
  const [modeGreen, setModeGreen] = useState("light");
  // const [buttonText, setButtonText] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      // setButtonText("light");
      showAlert("Dark Mode is Enabled", "success");
      document.body.style.backgroundColor = "#05153a";
      document.body.style.color = "White";
      document.title = "TextUtiles - DarkMode";
      // setInterval(() => {
      //   document.title = "TextUtiles - is Amazing";
      // }, 2000);
      // setInterval(() => {
      //   document.title = "Install TextUtiles Now";
      // }, 1500);
    } else {
      setMode("light");
      // setButtonText("dark");
      showAlert("light Mode is Enabled", "success");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      document.title = "TextUtiles - LightMode";
    }
  };

  const toggleModeGreen = () => {
    if (mode === "light") {
      setModeGreen("dark");
      // setButtonText("light");
      showAlert("Green Mode is Enabled", "success");
      document.body.style.backgroundColor = "#073607";
      document.body.style.color = "White";
    } else {
      setModeGreen("light");
      // setButtonText("dark");
      showAlert("light Mode is Enabled", "success");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };
  return (
    <>
      {/* <Router> */}
        <Navbar
          title="TextUtiles"
          AboutText="Rohit"
          mode={mode}
          modeGreen={modeGreen}
          toggleMode={toggleMode}
          toggleModeGreen={toggleModeGreen}
          // buttonText={toggleMode}
        />
        <div className="container my-3 ">
          {/* <Switch>
            <Route exact path="/about">
              <About />
            </Route>

            <Route exact path="/"> */}
              <TextForm
                heading="Enter the Text to Analyze"
                mode={mode}
                modeGreen={modeGreen}
                showAlert={showAlert}
              />
            {/* </Route>
          </Switch> */}

          <Alert Alert={alert} />

          {/* <About /> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
