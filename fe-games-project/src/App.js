import "./App.css";
import { Reviews } from "./components/Reviews";
import { Route, Routes } from "react-router-dom";
import { Nav } from "./components/Nav";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <h1 id="mainTitle">Board Games</h1>
        <Routes>
          <Route path="/" id="reviewContainer" element={<Reviews />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
