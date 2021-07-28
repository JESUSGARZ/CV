
import React, { useContext} from 'react';
import {AppContext} from '../containers/Context'

import '../assets/styles/components/Skills.scss';

const Skills =() => {
    const {skills} = useContext(AppContext);
    
        return (

            <section className="skills">
                <h2 className="title">Skills</h2>
                {skills.map(({title,percentage}) =>{
                    return(
                        <div className="skills__item">{title} <progress value={percentage} max="100"> </progress> {percentage}%</div>
                    )
                    

                })}
                
            </section>
            )
        
    
}

export default Skills;