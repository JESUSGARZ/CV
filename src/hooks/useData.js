import {  useEffect, useState } from 'react';


const useData = (API) => {
  const [data, setData] = useState({ 
    header: [],
    experience: [],
    academic:[],
    skills:[],
    interest:[],
    languages:[],
    social:[]
  
});

useEffect(() => {
  fetch(API)
  .then(response => response.json())
  .then(data => setData(data))
},[]);
return data;

}


export default useData;
