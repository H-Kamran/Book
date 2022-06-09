import { connect } from "react-redux";
import "./BookDetails.css";

function BookDetails(props) {
  const book = props.book;
  console.log(book);
  // useEffect(() => {
  //   fetch(`https://www.googleapis.com/books/v1/volumes/${id}`)
  //     .then((response) => response.json())
  //     .then((data) => {
  //       setBook(data.items);
  //       // console.log(data);
  //     });
  // }, [id]);
  if (book === null) {
    return null;
  }
  return (
    <div className="book">
      <div className="book__img">
        <img
          src={
            book.volumeInfo.imageLinks === undefined
              ? "https://www.researchpad.co/dataresources/articles/819/19970/assets/doca057402.ww1.pdf"
              : book.volumeInfo.imageLinks.thumbnail
          }
          alt={book.volumeInfo.title}
        />
      </div>
      <div className="book__info">
        <h1 className="title">{book.volumeInfo.title}</h1>
        <p className="author">Author: {book.volumeInfo.authors[0]}</p>
        <p className="description">Author: {book.volumeInfo.description}</p>
        <div className="published-date">
          <p>First published: {book.volumeInfo.publishedDate}</p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return { book: state.book };
};

export default connect(mapStateToProps, null)(BookDetails);
