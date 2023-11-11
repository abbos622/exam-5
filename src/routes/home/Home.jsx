import React, { useState } from 'react'
import Nav from '../../layout/nav/Nav'
import Hero from '../../components/hero/Hero'
import CryptocurrencyPrice from '../../components/cryptocurrency-prices/CryptocurrencyPrice'
import SideBar from '../../layout/side-bar/SideBar'



const Home = () => {
const [barValue, setBarValue] = useState(false)
  const hendleHome = (e)=> {
    if(e.target){
      localStorage.setItem("sid", false);
      setBarValue(false)
    }
  }
  return (
    <div onClick={hendleHome}>
      <Nav value={barValue} setValue={setBarValue} />
      <Hero/>
      <CryptocurrencyPrice/>
      <SideBar value={barValue} setValue={setBarValue}/>
    </div>
  )
}

export default Home