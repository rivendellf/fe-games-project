import "./App.css";
import { Reviews } from "./components/Reviews";
import { Route, Routes } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Header } from "./components/Header";
import { SingleReview } from "./components/SingleReview";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Header />
        <Routes>
          <Route path="/reviews" id="reviewContainer" element={<Reviews />} />
          <Route
            path="/reviews/:review_id"
            id="singleReviewContainer"
            element={<SingleReview />}
          />
        </Routes>
      </header>
    </div>
  );
}

export default App;
