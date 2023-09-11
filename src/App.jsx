import React from "react";
import Klasnakomponenta from "./Klasnakomponeta";
import Komponentafunkc from "./Komponentafunkc";

function App() {
  return (
    <>
      <div>
        <Klasnakomponenta title="klasna komponenta" />
        <Komponentafunkc title="funkcijska komponenta" />
      </div>
    </>
  );
}

export default App;