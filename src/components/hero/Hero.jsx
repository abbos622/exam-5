import React, { useEffect } from 'react';
import "./Hero.scss"
import { Container } from '../../utils';
import Swipper from '../swipper/Swipper';
import instance from '../../api';

const Hero = () => {


    
  return (
    <div className='hero'>
        <Container>
            <h2 className="hero__title">CRYPTOFOLIO WATCH LIST</h2>
            <p className="hero__text">Get all the Info regarding your favorite Crypto Currency</p>

            <Swipper/>
        </Container>
    </div>
  )
}

export default Hero