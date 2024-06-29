import React from "react";
import "./App.css";
import CodeEditor from "./CodeEditor";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Simple React Code Editor</h1>
      </header>
      <div className="App-content">
        <CodeEditor />
      </div>
    </div>
  );
}

export default App;
