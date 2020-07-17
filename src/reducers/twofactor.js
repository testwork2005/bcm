const INITIAL_STATE = {
    passed: window.localStorage.getItem('passed')||"false",
  };
  const applySetAuthUser = (state, action) => ({
    ...state,
   passed: action.passed,
  });
 export default function twofaReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
      case 'PASSED': {

        return applySetAuthUser(state, action);
      }
      
      default:
        return state;
    }
  }