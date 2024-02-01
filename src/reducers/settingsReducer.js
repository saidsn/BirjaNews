export const settingsActions = {
  start: "FETCH_START",
  success: "FETCH_SUCCESS",
  error: "FETCH_ERROR",
}

export const settingsReducer = (state, action) => {
  switch (action.type) {
    case settingsActions.start:
      return {
        ...state, loading: true, error: false
      };
    case settingsActions.success:
      return {
        ...state, data: action.payload, loading: false, error: false
      };
    case settingsActions.error:
      return {
        ...state, loading: false, error: action.payload
      };
    default:
      return state;
  }
};