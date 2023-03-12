import { createContext, useContext, useReducer } from "react";

// create the context
const AppContext = createContext();
// provider

const AppProvider = ({ initialState, reducer, children }) => {
    // const [state, dispatch] = useReducer(reducer, initialState);
    return <AppContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </AppContext.Provider >
};

// create the custom hook
const useGlobalContext = () => {
    return useContext(AppContext)
}
export { AppProvider, useGlobalContext };
