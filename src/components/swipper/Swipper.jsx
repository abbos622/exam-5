import React, { useRef, useState, useEffect, useReducer } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';


import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Swipper.scss';

import instance from '../../api';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';

const reducer = (state, action) => {
    return action
}

const Swipper = () => {
 

    const [state, dispatch] = useReducer(reducer, [])
    useEffect(()=>{
        try{
            instance("/coins/")
            .then(res => {
                dispatch(res.data)
            })
        }
        catch(error){
            console.log(error)
        }
    },[])
   return (
    <>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        startedSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}

        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
            state.map((data, index) => 
                <SwiperSlide className='swiper-card' key={index}>
                    <Link to={`/${data.id}`}>
                      <img width={80} src={data.image.large} alt="" />
                      <div className="card__price">
                          <span className='card__symbol'>{data.symbol}</span>
                          <span className={data.market_data.market_cap_change_percentage_24h.toFixed(2)== 0.00 ? "price__null": data.market_data.market_cap_change_percentage_24h > 0 ? "price__true" : "price__false"}> {data.market_data.market_cap_change_percentage_24h.toFixed(2) > 0 ? "+" : ""} {data.market_data.market_cap_change_percentage_24h.toFixed(2) == 0 ? 0 : data.market_data.market_cap_change_percentage_24h.toFixed(2)}%</span>
                      </div>
                      <h3 className='market__data-priec'>₹{data.market_data.current_price.aed}</h3>
                    </Link>
                </SwiperSlide>
            )
        }
      </Swiper>
    </>
  );
}

export default Swipper