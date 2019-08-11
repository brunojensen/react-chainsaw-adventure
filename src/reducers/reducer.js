export const ADD = "ADD";

const initialState = {values: []}

const RootReducer = (state = initialState, action) => {
  switch(action.type) {
    case ADD:
      return {
        ...state, values: [action.payload]
      }
    default:
      return state;
  }
}

export default RootReducer;