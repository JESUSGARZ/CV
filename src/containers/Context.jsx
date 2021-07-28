import useData from '../hooks/useData'
import {  createContext } from "react";
export const AppContext= createContext();


const ContextProvider =({children}) => {
  const dataFromApi = useData('http://localhost:4000/data');




    return (

        <AppContext.Provider value={dataFromApi}>
            {children}
        </AppContext.Provider>
    )
}

export default ContextProvider;