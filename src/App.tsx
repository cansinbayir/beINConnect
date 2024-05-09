import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import Movies from "./components/Movies";
import MovieDetailPage from "./components/MovieDetailPage";
import { Header } from "./elements/Header";
import Footer from "./elements/Footer";
import { MovieProvider } from "./context/MovieContext";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <MovieProvider>
        <div>
          <Header></Header>
          <ScrollToTop></ScrollToTop>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/movies" element={<Movies />} />
            {/* <Route path="/test" element={<Test />} /> */}
            <Route path="/movie/:id" element={<MovieDetailPage />} />
          </Routes>
          <Footer></Footer>
        </div>
      </MovieProvider>
    </Router>
  );
};

export default App;
