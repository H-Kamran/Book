import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Header.css";
import SearchBook from "../SearchBook/SearchBook";

class Header extends Component {
  constructor(props) {
    super(props);
    this.searchList = React.createRef();
  }
  state = {
    searchLine: "",
    searchResult: [],
    menuActive: "none"
  };
  searchLineChangeHandler = async (e) => {
    this.setState({ searchLine: e.target.value })
    if (e.target.value !== "") {
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${e.target.value}&maxResults=5`);
      const data = await response.json();
      // console.log(data.items)
      this.setState({ searchResult: data.items });
    } else {
      this.setState({ searchResult: [] });
    }
  };

  onSearchFocus = () => {
    this.searchList.current.style.display = "block"
  }
  onSearchblur = () => {
    this.searchList.current.style.display = "none"
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("resize", this.handleMenu);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("resize", this.handleMenu);
  }

  handleScroll(event) {
    var header = document.getElementById("header");
    var sticky = header.offsetTop;

    if (window.pageYOffset > sticky) {
      header.classList.add("sticky");
    } else {
      header.classList.remove("sticky");
    }
  }

  handleMenu(){
    if(window.innerWidth>600){
      const menu = document.getElementById("menu");
      menu.style.display="flex";
      menu.parentElement.nextElementSibling.style.display="none";
    }else{
      menu.style.display="none";
    }
  }

  toggleMenu = (e) => {
    // if(this.state.menuActive==="none"){
    //   this.setState({menuActive: "flex"});
    // }else{
    //   this.setState({menuActive: "none"});
    // }
    if (this.state.menuActive === "none") {
      e.target.parentElement.nextElementSibling.style.display = "flex"
      e.target.parentElement.parentElement.nextElementSibling.style.display = "block";
      this.setState({ menuActive: "flex" });
    } else {
      e.target.parentElement.nextElementSibling.style.display = "none";
      e.target.parentElement.parentElement.nextElementSibling.style.display = "none";
      this.setState({ menuActive: "none" });
    }
  }

  render() {
    const { searchLine } = this.state;
    return (
      <header id="header" className="header">
        <div className="header__menu">
          <div className="menu-img" onClick={this.toggleMenu}>
            <img src={window.location.origin + "/menu.svg"} />
          </div>
          <div id="menu" className="menu-nav" display={this.menuActive}>
            <Link className="link" to="/">
              Home
            </Link>
            <Link className="link" to="/About">
              About
            </Link>
            <Link className="link" to="/Discover">
              Discover
            </Link>
          </div>
          {/* <form className="header__search-form"> */}
          <div className="header__search-box">
            <img
              className="header__search-box-img"
              src="../search_icon.svg"
              alt="Search icon"
            />
            <input
              value={searchLine}
              type="text"
              className="header__search-box-input"
              placeholder="Search"
              onChange={this.searchLineChangeHandler}
              onFocus={this.onSearchFocus}
              onBlur={this.onSearchblur}
            />
            {/* <button
              className="header__search-box-button"
              disabled={!searchLine}
            >
              x
            </button> */}
          </div>
          <div className="search-result" ref={this.searchList}>
            {
              this.state.searchResult.map((book) => {
                return (
                  <SearchBook book={book} />
                )
              })

            }
          </div>
        </div>
        <div className="menu-background">
        </div>
        <div className="header__fav">
          <Link to="/Favorites">
            <img
              src={window.location.origin + "/heart-filled.svg"}
              alt="See favorites"
            />
          </Link>
        </div>
      </header>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addOneBook: (book) => dispatch({ type: "ADD_DETAILS", payload: book })
  };
};

export default connect(null, mapDispatchToProps)(Header);