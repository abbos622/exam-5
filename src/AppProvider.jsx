import { createContext, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({reducer, initalState, children})=>{
   return(
    <AppContext.Provider value={useContext(reducer, initalState)}>
        {children}
    </AppContext.Provider>
)}  

export const useValue = () => useContext(AppContext)