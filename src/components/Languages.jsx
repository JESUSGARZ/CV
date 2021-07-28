import React, { useContext} from 'react';
import {AppContext} from '../containers/Context'


import '../assets/styles/components/Languages.css';

const Languages = () => {
    const {languages} = useContext(AppContext);
    
        return (
            <section className="languages">
                <h2 className="title">Languages</h2>
                {languages.map(({name,percentage})=> {
                    return(
                        
                        <div className="languages__item">
                            {name} <progress value={percentage} max="100"> </progress>{percentage}%
                        </div>
                    
                    )
                })}
  
            </section>
            )

    
}

export default Languages;