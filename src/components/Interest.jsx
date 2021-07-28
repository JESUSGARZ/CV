import React, { useContext} from 'react';
import {AppContext} from '../containers/Context'
import '../assets/styles/components/Interest.scss';


const Interest = () => {
    const {interest} = useContext(AppContext);
   
        return (
            <section className="interest"> 
                <h2 className="title">Interest</h2>
                <div className="interest__container-item">
                {interest.map((item) => (<div key={item}  className="interest__item-tiitle">{item}</div>) ) }
                </div>
                
            </section>
            
    
        )

    
    
}

export default Interest;