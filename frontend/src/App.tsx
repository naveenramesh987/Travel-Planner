import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [apiMessage, setApiMessage] = useState("");
  useEffect(() => {
    fetch("http://localhost:5000/api/test")
      .then((res) => res.json())
      .then((data) => setApiMessage(data.message))
      .catch(() => setApiMessage("Failed to connect"));
  }, []);

  return (
    <div>
      <h1>Travel Planner</h1>
      <p>API says: {apiMessage}</p>
    </div>
  );
}

export default App;
