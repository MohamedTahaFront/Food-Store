/* eslint-disable react-refresh/only-export-components */
import { createContext } from "react";
import { useScroll } from "../hooks/useScroll";

export const scrollContext = createContext()
export const ScrollContextProvider = ({children})=>{

    const { scrollActive, setScrollActive ,top} = useScroll()
    return (
        <scrollContext.Provider value={{scrollActive, setScrollActive ,top}}>
            {children}
        </scrollContext.Provider>
    )
} 