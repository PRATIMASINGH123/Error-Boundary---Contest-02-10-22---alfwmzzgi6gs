import React, { useState } from "react";
import "../styles/App.css";
import Component from "./Component";
import ErrorBoundary from "./ErrorBoundary";
const App = () => {

  const[Error , setError] = useState(false);

  const errorGenerator = (error , setError) =>{
   setError(!error);
  }

  return (

    <div id="main">
    <h2>React Error Boundaries</h2>
      <ErrorBoundary>
        <Component change={errorGenerator} error={Error} />
      </ErrorBoundary>
      <button id="gen" onClick={()=>setError(!Error)}>Generate Error</button>
    </div>

  );
};

export default App;
