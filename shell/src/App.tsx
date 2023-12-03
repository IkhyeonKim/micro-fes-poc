import React from "react";

const Button = React.lazy(() => import("remoteApp/Button"))

function App() {
  return <div>
    This is shell application
    <Button label="Yooo" /> 
  </div>;
}

export default App;
