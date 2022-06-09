import { Component } from "react";
import "./ShowBooks.css";

export default class ShowBooks extends Component {
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
      <div className="books">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    );
  }
}
