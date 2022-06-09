import React, { Component } from "react";
import ShowBooks from "../../components/ShowBooks/ShowBooks";
import { motion } from 'framer-motion/dist/framer-motion'
import "./HomePage.css";

class HomePage extends Component {
  render() {
    return (
      <motion.main className="main-page__content"
      initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: {duration: 0.1}}}>
        <section className="main-page__main-section">
          <ShowBooks />
        </section>
      </motion.main>
    );
  }
}

export default HomePage;
