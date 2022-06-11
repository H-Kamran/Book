const initialState = {
  book: null,
  favBooks: []
};

export const reducer = (state = initialState, action) => {
  let favBooks, book, id;
  switch (action.type) {
    case "ADD_TO_FAVORITE":
      const r = state.favBooks.find((item) => item.id === action.payload.id);
      if (r === undefined) {
        favBooks = [...state.favBooks, action.payload];
        return { ...state, favBooks };
      }
      return state;
    case "DELETE_FROM_FAVORITE":
      id = action.payload;
      favBooks = state.favBooks.filter((item) => item.id !== id);
      return { ...state, favBooks };
    case "DELETE_DETAILS":
      book = null;
      return { ...state, book };
    case "ADD_DETAILS":
      book = action.payload;
      return { ...state, book };
    default:
      return state;
  }
};
