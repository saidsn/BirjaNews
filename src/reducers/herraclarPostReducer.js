

export const herraclarPostsActions = {
    start: "FETCH_START",
    success: "FETCH_SUCCESS",
    error: "FETCH_ERROR",
  };



export const herraclarPostReducer = (state, action) => {
    switch (action.type) {
        case herraclarPostsActions.start:
            return { loading: true, error: false };
        case herraclarPostsActions.success:
            return { ...state, data: action.payload, loading: false, error: false };
        case herraclarPostsActions.error:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};