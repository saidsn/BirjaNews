import { createContext, useContext, useReducer } from "react";
import { birjaNewsReducer } from "../reducers/birjaNewsReducer";

 const BirjaNewsContext = createContext();

 const initialState = {
  data: [],
  loading: false,
  error: false,
};
 
 export const BirjaNewsProvider = ({children}) => {
  const [state, dispatch] = useReducer(birjaNewsReducer, initialState);
   return (
     <BirjaNewsContext.Provider value={{state, dispatch}}>
        {children}
     </BirjaNewsContext.Provider>
   )
 }

 export const useBirjaNews  = ()=> useContext(BirjaNewsContext)
 