export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "add":
      return [...initialState, action.payload];

    default:
      return initialState;
  }
};
