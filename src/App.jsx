import { Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import PageNavbar from "./components/PageNavbar";
import GameCategories from "./components/GameCategories";
import MovieCategories from "./components/Movies";
import CartoonCategories from "./components/Cartoons";

const NotFound = () => {
  return (
    <>
      <h1>404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for could not be found.</p>
    </>
  );
};

const App = () => {
  return (
    <>
      <PageNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/videogames" element={<GameCategories />} />
        <Route path="/movies" element={<MovieCategories />} />
        <Route path="/cartoons" element={<CartoonCategories />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
