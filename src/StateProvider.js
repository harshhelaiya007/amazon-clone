import React , {createContext , useContext , useReducer} from "react";

export const   Statecontext  = createContext();


export const Stateprovider = ({reducer , intialstate , children}) =>(
    <Statecontext.Provider value={useReducer(reducer , intialstate)}>
        {children}
    </Statecontext.Provider>
)


export const useStateValue = () => useContext( Statecontext)