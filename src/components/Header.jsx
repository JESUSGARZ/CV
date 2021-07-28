
import React, { useContext} from 'react';
import {AppContext} from '../containers/Context'
import '../assets/styles/components/Header.scss';




const Header = () => {
  const {name, profession, address, country, phone, email} = useContext(AppContext);
 
    return (
     
      <header>
          <div className="header__photo" >
          <img src="https://subir-imagen.com/images/2021/07/20/PHOTO-2021-06-25-21-54-46.jpg" alt="" alt=" this is my photo" />
          </div>
          
          
    <div className="header__info">
        <div className="header__job-title">
          
          <p className="bold">{name}</p>
          
          <p >{profession}</p>
        </div>
        <ul>
          <li>
            <div className="icon">
              <i className="fas fa-map-signs"></i>
            </div>
            <div className="header__address">
              {address} <br /> {country}
            </div>
          </li>
          <li>
            <div className="icon">
              <i className="fas fa-mobile-alt"></i>
            </div>
            <div className="header__phone">
              {phone}
            </div>
          </li>
          <li>
            <div className="icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="header__e-mail">
              {email}
            </div>
          </li>
        </ul>
      </div> 
      </header>  
  )

  

}

export default Header;