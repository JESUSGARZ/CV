
import React, { useContext} from 'react';
import {AppContext} from '../containers/Context';


import '../assets/styles/components/Experience.scss';

const Experience = () => {
    const {experience} = useContext(AppContext);
    
    
    

        return (
       
            <section className="experience">
            <h2 className="title">Experience</h2>
                <div className="experience__container-item">
                {experience.map(({title,description,url}) => {
                    return(
                    <div  title className="experience__item">
                        <h3 className="item__title">{title}</h3>
                        <p className="item__description">{description}</p>
                        <a className="item__url" href={url}>Ir al Proyecto</a>
                    </div>
                    )
                            

                })}

                </div>
               
               

            </section>

        )

}

export default Experience;