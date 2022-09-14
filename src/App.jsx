import React, { useState } from "react";
import About from "./components/About";
import Alert from "./components/Alert";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";

const App = () => {
  const [mode, setMode] = useState("light");
  const [showAlert, setShowAlert] = useState(null);

  // function for set an alert
  const showAlertHandler = (message, type) => {
    setShowAlert({
      msg: message,
      alertType: type,
    });

    setTimeout(() => {
      setShowAlert(null);
    }, 1000);
  };

  const toggleModeHandler = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#222222";
      showAlertHandler("Dark Mode has been enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
      showAlertHandler("Light Mode has been enabled", "success");
    }
  };

  return (
    <>
      <Navbar title="Twist" mode={mode} toggleMode={toggleModeHandler} />
      <Alert alert={showAlert} />
      <div className="my-5">
        <TextForm
          heading="Enter the text below for transformation"
          toggleMode={mode}
          alertShow={showAlertHandler}
        />
        <About toggleMode={mode} />
      </div>
    </>
  );
};

export default App;
