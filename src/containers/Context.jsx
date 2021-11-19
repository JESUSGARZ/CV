import useData from '../hooks/useData'
import {  createContext } from "react";
import {data} from '../../data.json';
export const AppContext= createContext();


const ContextProvider =({children}) => {
  const dataFromApi = data;  //useData('http://localhost:4000/data');




    return (

        <AppContext.Provider value={dataFromApi}>
            {children}
        </AppContext.Provider>
    )
}

export default ContextProvider;