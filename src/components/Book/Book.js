import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Book.css";

function Book(props) {
  const book = props.book;
  const r = props.favBooks.find((item) => item.id === book.id);
  // const AddToFavorite=()=>{
  //   console.log(1);
  // }
  // const goToBookDetails = () => {
  //   props.addOneBook(book);
  //   // window.open("/BookDetails");
  //   // window.location.href = "/BookDetails";
  // };
  const addToFavorite = (e) => {
    if (e.target.src === `${window.location.origin}/heart-empty.svg`) {
      e.target.src = `${window.location.origin}/heart-filled.svg`;
      props.addToFavorite(book);
    } else {
      e.target.src = `${window.location.origin}/heart-empty.svg`;
      props.removeItem(book.id);
    }
  };
  return (
    <div className="book-card" key={book.id}>
      <div className="book-card__img">
        {/* {console.log(book)} */}
        <Link to={"/BookDetails"}>
          <img
            onClick={() => props.addOneBook(book)}
            src={
              book.volumeInfo.imageLinks === undefined
                ? "https://www.researchpad.co/dataresources/articles/819/19970/assets/doca057402.ww1.pdf"
                : book.volumeInfo.imageLinks.thumbnail
            }
            alt={book.volumeInfo.title}
          />
        </Link>
      </div>
      <div className="book-card__info">
        {/* <Link to="/BookDetails"> */}
        <p>{book.volumeInfo.title}</p>
        {/* </Link> */}
        <div className="info-images">
          <img
            onClick={addToFavorite}
            src={
              r === undefined
                ? window.location.origin + "/heart-empty.svg"
                : window.location.origin + "/heart-filled.svg"
            }
            alt="Add to favorite"
          />
          <img src={window.location.origin + "/check.svg"} alt="Add to reads" />
        </div>
      </div>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => {
  return {
    addToFavorite: (book) =>
      dispatch({ type: "ADD_TO_FAVORITE", payload: book }),
    removeItem: (id) => dispatch({ type: "DELETE_FROM_FAVORITE", payload: id }),
    addOneBook: (book) => dispatch({ type: "ADD_DETAILS", payload: book })
  };
};
const mapStateToProps = (state) => {
  return { favBooks: state.favBooks };
};

export default connect(mapStateToProps, mapDispatchToProps)(Book);
