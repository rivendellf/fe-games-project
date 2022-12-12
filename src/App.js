import "./App.css";
import { Reviews } from "./components/Reviews";
import { Route, Routes } from "react-router-dom";
import { Nav } from "./components/Nav";
import { Header } from "./components/Header";
import { SingleReview } from "./components/SingleReview";
import { Categories } from "./components/Categories";

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
          <Route path="/categories" element={<Categories />}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
