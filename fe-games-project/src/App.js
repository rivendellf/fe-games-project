import "./App.css";
import { Reviews } from "./components/Reviews";
import { Route, Routes } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Header } from "./components/Header";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Header />
        <Routes>
          <Route path="/" id="reviewContainer" element={<Reviews />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
