import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";
import { listenerCreator, dispatcher } from "./lib/communicator";
function App() {
  useEffect(() => {
    listenerCreator(window, (...m) => console.log("child Listener", ...m));
  }, []);
  const dispatchMessage = () =>
    dispatcher(window.parent, {
      type: "microFrontEnd",
      payload: "sample payload from child",
    });

  return (
    <div className="App" onClick={dispatchMessage}>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
