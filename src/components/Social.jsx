import React, { useContext} from 'react';
import {AppContext} from '../containers/Context'


import '../assets/styles/components/Social.scss';

const Social = () => {
  const {social} = useContext(AppContext);
  
    return (
      <section className="social">
        <h2 className="title">Social</h2>
      <div className="social__container">
        
        {social.map(({icon,title,user})=> {
          return(
            <div className="social__item">
              <div className="social__icon">
                <i className={icon}></i>
              </div>
              <div className="social__data">
                <h5 className="social__data-paragrf">{title}</h5>
                <p>{user}</p>
              </div>
           </div>

          )
        })}
    
      </div>
    </section>
      

  )

  
    
}

export default Social;