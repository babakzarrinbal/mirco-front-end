import "./App.css";
import IframeComponent from "./Iframe-component";

function App() {
  return (
    <div className="App">
      {[
        { title: "frame1", url: "/child1" },
        { title: "frame2", url: "/child2" },
      ].map((f, i) => (
        <IframeComponent
          key={`frame-${i}`}
          title={f.title}
          url={f.url}
          messageCallback={(...m) => console.log("parent Listener", ...m)}
        />
      ))}
    </div>
  );
}

export default App;
