import logo from "./logo.svg";
import "./App.css";
import Newuser from "./component/Newuser";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import { useState } from "react";

function App() {
  const [staus, setStatus] = useState(true);
  window.addEventListener("online", () => setStatus(true));
  window.addEventListener("offline", () => setStatus(false));
  // i am not check this status because if internet is off then test is cancel
  console.log(staus);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/newuser" element={<Newuser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
