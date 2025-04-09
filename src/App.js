import "./App.css";
import TopBar from "./component/topbar";
import { Routes, Route } from "react-router-dom";
import Introduksyon from "./page/introduksyon";
import Proseso from "./page/proseso";
import Implikasyon from "./page/implikasyon";
import Kasaysayan from "./page/kasaysayan";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#FDE5D4" }}>
      <TopBar />
      <Routes>
        <Route path="/" element={<Introduksyon />} />
        <Route path="/implikasyon at paniniwala" element={<Implikasyon />} />
        <Route path="/proseso" element={<Proseso />} />
        <Route path="/kasaysayan" element={<Kasaysayan />} />
      </Routes>
    </div>
  );
}

export default App;
