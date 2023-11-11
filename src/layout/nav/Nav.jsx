import React from 'react'
import "./Nav.scss"
import { Container } from '../../utils'

import NavLogo from "../../assets/images/nav-logo.svg"
import { Link } from 'react-router-dom'

const Nav = ({value, setValue}) => {

  const handleWathList = (e) => {
      localStorage.setItem("sid", true)
      e.stopPropagation()
      setValue(true)
  }
  return (
    <nav className='nav'>
      <Container>
        <div className="nav__wrapper">
          <div className="nav__title">
            <h1 className='seo-title'>CRYPTOFOLIO</h1>
           <Link to={"/"}> <img src={NavLogo} alt="" /> </Link>
          </div>

          <ul className='nav__menu'>
            <li>
              <select className='nav__select'>
                <option value="usd">USD</option>
                <option value="usd">USD</option>
                <option value="usd">USD</option>
              </select>
            </li>

            <li><button onClick={handleWathList} className='nav__btn'>WATCH LIST</button></li>
          </ul>
        </div>
      </Container>
    </nav>
  )
}

export default Nav