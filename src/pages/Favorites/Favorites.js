import { Component } from "react";
import "./Favorites.css";
import Book from "../../components/Book/Book.js";
import { connect } from "react-redux";

class Favorites extends Component {
  render() {
    return (
      <div className="books">
        {this.props.favBooks.map((item) => (
          <Book book={item} />
        ))}
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     removeItem: (id) => dispatch({ type: "DELETE_FROM_FAVORITE", payload: id })
//   };
// };

const mapStateToProps = (state) => {
  return { favBooks: state.favBooks };
};
export default connect(mapStateToProps, null)(Favorites);
