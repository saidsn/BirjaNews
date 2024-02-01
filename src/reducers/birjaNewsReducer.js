

export const birjaNewsActions = {
    start: "FETCH_START",
    success: "FETCH_SUCCESS",
    error: "FETCH_ERROR",
  
  };
  export const birjaNewsReducer = (state, action) => {
    switch (action.type) {
      case birjaNewsActions.start:
        return { ...state, loading: true, error: false };
      case birjaNewsActions.success:
        return { ...state, data: action.payload, loading: false, error: false };
      case birjaNewsActions.error:
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };