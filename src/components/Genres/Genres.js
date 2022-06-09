import { Component } from "react";
import "./Genres.css";
import AllGenres from "../AllGenres/AllGenres.js";
import PopularGenres from "../PopularGenres/PopularGenres";

export default class Genres extends Component {
  state = {
    clickedMore: false
  };
  getAllList = (e) => {
    this.setState({ clickedMore: true });
  };
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
      <>
        <div
          className={this.state.clickedMore ? "clicked-more-button" : ""}
        ></div>
        {this.state.clickedMore ? (
          <AllGenres />
        ) : (
          <PopularGenres getAllList={this.getAllList} />
        )}
      </>
    );
  }
}
