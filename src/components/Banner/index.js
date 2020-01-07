import React from 'react';
import {titleBanner,wrapperBanner} from './styles'
import workImg from '@images/work.svg';

const Banner =()=> {
    return ( <div className={wrapperBanner}>
        <img src={workImg} width="350" alt=""/>
        <h1 className={titleBanner}>Collaborate.</h1>
    </div> );
}
 
export default Banner;