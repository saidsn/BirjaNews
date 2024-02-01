

export const auctionPostsActions = {
    start: "FETCH_START",
    success: "FETCH_SUCCESS",
    error: "FETCH_ERROR",
  };



export const auctionPostReducer = (state, action) => {
    switch (action.type) {
        case auctionPostsActions.start:
            return { loading: true, error: false };
        case auctionPostsActions.success:
            return { ...state, data: action.payload, loading: false, error: false };
        case auctionPostsActions.error:
            return { loading: false, error: action.payload };
        default:
            return state;
    }
};