import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./login";
import Navbar from "./components/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </div>
  );
}

export default App;
