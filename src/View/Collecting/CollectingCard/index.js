import React from 'react';
import './style.css'
import collectingImg from './collecting.png'
import {Link} from "react-router-dom";

const CollectingCard = () => {
    return (
       <div className="container">
           <div className='collectingItem'>
               <img src={collectingImg} alt="" className="collectingItem__img"/>
               <h2 className="collectingItem__title">Повседневная одежда</h2>
               <Link to='/collectionsPage' className="collectingItem__body">
                   <h2 className="collectingItem__subtitle">Смотреть все</h2>
                   <i className="fa-solid fa-angle-right"/>
               </Link>
           </div>
       </div>
    );
};

export default CollectingCard;