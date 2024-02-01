import { createContext, useContext, useReducer } from "react";
import { organizersReuducer } from "../reducers/organizersReducer";

const initialState = {
    data: [],
    loading: false,
    error: false,
};

const OrganizersContext = createContext();

export const OrganizersProvider = ({ children }) => {
    const [state, dispatch] = useReducer(organizersReuducer, initialState);

    return (
        <OrganizersContext.Provider value={{ state, dispatch }}>
            {children}
        </OrganizersContext.Provider>
    );
};

export const useOrganizers = () => useContext(OrganizersContext);
