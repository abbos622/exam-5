import React, {useState, useReducer, useEffect} from 'react'
import "./SideBar.scss"
import instance from '../../api'

const reducer = (state, action) => {
  return action
}

const SideBar = ({value, setValue}) => {

  const [card, setCard] = useState(JSON.parse(localStorage.getItem("liked")))
  const [newCard, setNewCard] = useState([])
  // console.log(card)

  const [state, dispatch] = useReducer(reducer, [])
    useEffect(()=>{
        try{ 
              instance(`/coins/`)
              .then(res => {
                dispatch([...newCard, res.data])
                console.log(newCard)
              }  
              )
        }
        catch(error){
            console.log(error)
        }
    },[])


    // setNewCard(state.filter(data => card.includes(data.id)))
  console.log(state.filter(data => card.includes(data.id)))
  const removeBar = () =>{}
  return (
    <div onClick={(e)=> e.stopPropagation()}  className={value? "side-bar bar-auto" : "side-bar bar-hidden"}>
      <h2 className="bar__title">WATCHLIST</h2>

      <div className="bar__cards">
      {
  state.filter(data => card.includes(data.id)).map(card => 
    <div key={card.id} className="bar__card">
      <img src={card.image.large} alt="" />
      <h3>₹ 3,045,665.00</h3>
      <button onClick={(e) => removeBar(card.id)}>Remove</button>
    </div>
  )
}
      </div>
    </div>
  )
}

export default SideBar