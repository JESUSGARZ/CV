import React from 'react'


import "../assets/styles/containers/App.scss";


import Header from '../components/Header';
import Profile from '../components/Profile';
import Experience from '../components/Experience';
import Academic from '../components/Academic';
import Skills from '../components/Skills';
import Interest from '../components/Interest';
import Social from '../components/Social';
import Languages from '../components/Languages';

const App = ()=>  {
    
   
        
          
    
       
        return (
            
            <>
          
            <div className= "App">
        
                    <Header />
        
                <main>
                    <Profile  /> 
                    <Experience />
                    <Academic/>
                    <Skills/>
                    <Interest/>
                    <Languages/>
                    <Social/>
               
                    
        
                </main>
         
            </div> 
            </>         
            )
    
 
};

export default App;