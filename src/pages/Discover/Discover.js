import React, { Component } from "react";
import Genres from "../../components/Genres/Genres.js";
import { motion } from 'framer-motion/dist/framer-motion'
import "./Discover.css";

class Discover extends Component {
  render() {
    return (
      <motion.section className="main-page__main-section"
        initial={{ width: 0 }}
        animate={{ width: "100%" }}
        exit={{ x: window.innerWidth, transition: {duration: 0.1} }}>
        <Genres />
      </motion.section>
    );
  }
}

export default Discover;
