const INITIAL_STATE = {
    order: "",
  };
  const applySetAuthUser = (state, action) => ({
    ...state,
  order: action.order,
  });
 export default function orderReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'ORDER': {

        return applySetAuthUser(state, action);
      }
      
      default:
        return state;
    }
  }