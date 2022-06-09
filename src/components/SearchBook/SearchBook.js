import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./SearchBook.css";

function SearchBook(props) {
    const book = props.book;
    //   const addToFavorite = (e) => {
    //     if (e.target.src === `${window.location.origin}/heart-empty.svg`) {
    //       e.target.src = `${window.location.origin}/heart-filled.svg`;
    //       props.addToFavorite(book);
    //     } else {
    //       e.target.src = `${window.location.origin}/heart-empty.svg`;
    //       props.removeItem(book.id);
    //     }
    //   };
    return (
        <div className="search-result__book">
            <Link to={"/BookDetails"}>
                {/* <img
                    onClick={() => props.addOneBook(book)}
                    src={
                        book.volumeInfo.imageLinks === undefined
                            ? "https://www.researchpad.co/dataresources/articles/819/19970/assets/doca057402.ww1.pdf"
                            : book.volumeInfo.imageLinks.thumbnail
                    }
                    alt={book.volumeInfo.title}
                /> */}
                <p>{book.volumeInfo.title}</p>
            </Link>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        addOneBook: (book) => dispatch({ type: "ADD_DETAILS", payload: book })
    };
};

export default connect(null, mapDispatchToProps)(SearchBook);
