import React, {useReducer, useEffect, useState, useLayoutEffect} from 'react';
import instance from '../../api';
import "./SinglePage.scss"
import Nav from '../../layout/nav/Nav';
import SideBar from '../../layout/side-bar/SideBar';
import { formattedNumber } from '../../helpers';


const reducer = (state, action) => {
  return action
}

const SinglePage = () => {
  const [location, setLocation] = useState(window.location.pathname);
  const [data, setData] = useState(null);

  const [state, dispatch] = useReducer(reducer, []);

  const [barValue, setBarValue] = useState(false)

    useLayoutEffect(()=>{
        try{
            instance(`/coins${location}`)
            .then(res => {
                setData(res.data)
                console.log(res.data);
            })
        }
        catch(error){
            console.log(error)
        }
    },[])


  return (
    data && <div  className='single-page'>
      <Nav/>
      <div className="single-page__wrapper">
        <div className="single__about">
          <img src={data.image.large} alt="" />
          <h2>{data.name}</h2>
          <div>{data.description.en.slice(0, 150)}</div>
          <h3>Rank: <span>{data.market_cap_rank}</span></h3>
          <h3>Current Price: <span>{formattedNumber(data.market_data.current_price.usd)}</span></h3>
          <h3>Rank: <span>{formattedNumber(data.market_data.market_cap_change_24h)}</span></h3>
        </div>
      </div>
      {/* <SideBar value={barValue} setValue={setBarValue}/> */}
    </div>
  )
}

export default SinglePage