import "./styles.css";

import HomePage from "./pages/HomePage/HomePage.js";
import About from "./pages/About/About.js";
import Discover from "./pages/Discover/Discover.js";
import Books from "./pages/Books/Books.js";
import Header from "./components/Header/Header.js";
import Favorites from "./pages/Favorites/Favorites.js";
import BookDetails from "./pages/BookDetails/BookDetails.js";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion/dist/framer-motion'

export default function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Header />
      <main className="main-page__content">
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<HomePage />} />
            <Route path="/About" element={<About />} />
            <Route path="/Discover" element={<Discover />} />
            <Route path="/Books/:q" element={<Books />} />
            <Route path="/Favorites" element={<Favorites />} />
            <Route path="/BookDetails" element={<BookDetails />} />
          </Routes>
        </AnimatePresence>
      </main>
      <div className="black-background"></div>
      {/* <Route path="/list/:id" exact component={ListPage} /> */}
      {/* <Header />
      <ShowBooks /> */}
    </div>
  );
}
