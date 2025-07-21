const initialState = {
  items: [],  
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_PRODUCTS':
      return {
        ...state,
        items: action.payload,
      };
    case 'ADD_PRODUCT':
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    default:
      return state;
  }
};

export default productsReducer;