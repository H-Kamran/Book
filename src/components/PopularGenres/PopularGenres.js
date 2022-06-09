import { Component } from "react";
import { Link } from "react-router-dom";
import { motion } from 'framer-motion/dist/framer-motion'
import "./PopularGenres.css";

export default class PopularGenres extends Component {
  componentDidMount() {
    // "https://www.googleapis.com/books/v1/volumes?q=subject:fiction"
    // fetch("https://www.googleapis.com/books/v1/volumes?q=flowers&maxResults=40")
    //   .then((response) => response.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
  }
  render() {
    return (
      <motion.div className="popularGenres">
        <div className="popularGenres-header">
          <h2>Popular Genres</h2>
        </div>
        <ul className="popularGenres-list">
          <li>
            <Link className="popularGenres-list-link" to="/Books/Fantasy">
              Fantasy
            </Link>
          </li>
          <li>
            <Link className="popularGenres-list-link" to="/Books/Drama">
              Drama
            </Link>
          </li>
          <li>
            <Link className="popularGenres-list-link" to="/Books/Fiction">
              Fiction
            </Link>
          </li>
          <li>
            <Link className="popularGenres-list-link" to="/Books/History">
              History
            </Link>
          </li>
          <li>
            <Link className="popularGenres-list-link" to="/Books/Education">
              Education
            </Link>
          </li>
          <li>
            <Link className="popularGenres-list-link" to="/Books/Psychology">
              Psychology
            </Link>
          </li>
          <li>
            <Link className="popularGenres-list-link" to="/Books/Humor">
              Humor
            </Link>
          </li>
          <li>
            <Link className="popularGenres-list-link" to="/Books/Comics">
              Comics
            </Link>
          </li>
          <li>
            <Link className="popularGenres-list-link" to="/Books/Education">
              Education
            </Link>
          </li>
        </ul>
        <div className="popularGenres__button-div">
          <motion.button whileHover={{ scale: 1.1 }} className="more-button" onClick={this.props.getAllList}>
            More
          </motion.button>
        </div>
      </motion.div>
    );
  }
}
