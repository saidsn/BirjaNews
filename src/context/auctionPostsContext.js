import { createContext, useContext, useReducer } from "react";
import { auctionPostReducer } from "../reducers/auctionPostsRecducer";


const initialState = {
    data: [],
    loading: false,
    error: false,
};

const AuctionPostsContext = createContext();
export const AuctionPostsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(auctionPostReducer, initialState);

    return (
        <AuctionPostsContext.Provider value={{ state, dispatch }}>
            {children}
        </AuctionPostsContext.Provider>
    );
};

export const useAuctionPosts = () => useContext(AuctionPostsContext)

