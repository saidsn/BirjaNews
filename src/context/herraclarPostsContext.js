import { createContext, useContext, useReducer } from "react";
import { herraclarPostReducer } from "../reducers/herraclarPostReducer";


const initialState = {
    data: [],
    loading: false,
    error: false,
};

const HerraclarPostsContext = createContext();
export const HerraclarPostsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(herraclarPostReducer, initialState);

    return (
        <HerraclarPostsContext.Provider value={{ state, dispatch }}>
            {children}
        </HerraclarPostsContext.Provider>
    );
};

export const useHerraclarPosts = () => useContext(HerraclarPostsContext)

