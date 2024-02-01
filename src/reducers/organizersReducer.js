

export const organizersActions = {
  start: "FETCH_START",
  success: "FETCH_SUCCESS",
  error: "FETCH_ERROR",

};
export const organizersReuducer = (state, action) => {
  switch (action.type) {
    case organizersActions.start:
      return { ...state, loading: true, error: false };
    case organizersActions.success:
      return { ...state, data: action.payload, loading: false, error: false };
    case organizersActions.error:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};