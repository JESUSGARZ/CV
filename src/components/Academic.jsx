
import React, { useContext} from 'react';
import {AppContext} from '../containers/Context'

import '../assets/styles/components/Academic.scss';

const Academic = () => {
  const {academic} = useContext(AppContext);
 

   
    return (
      <section className="academic">
          <h2 className="title">Academic</h2>
          {academic.map(({date,title,description}) => { 
            return(
              <div className="academic__item">
              <p className="academic__date">{date}</p>
              <p className="academic__title">{title}</p>
              <p className="academic__description">{description}</p>
              </div>
            )

             } ) }

      </section>

  )

  
    
}

export default Academic;