import React, {useReducer, useEffect, useState} from 'react'
import "./CryptocurrencyPrice.scss"
import { Container } from '../../utils';
import {AiFillEye} from "react-icons/ai"

import instance from '../../api';
import { formattedNumber } from '../../helpers';

import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';


const reducer = (state, action) => {
    return action
}
const CryptocurrencyPrice = () => {

    const itemsPerPage = 10; // Har bir sahifada ko'rsatiladigan elementlar soni
  
    const pageCount = Math.ceil(100 / itemsPerPage); // Umumiy sahifalar soni
  
    const [currentPage, setCurrentPage] = useState(0);
    console.log(currentPage + 1)
    const indexOfLastItem = (currentPage + 1) * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;



    const [selectedItemId, setSelectedItemId] = useState(JSON.parse(localStorage.getItem("liked"))||[]);



 
    const [state, dispatch] = useReducer(reducer, [])
    useEffect(()=>{
        try{
            instance(`/coins/markets?vs_currency=USD&order=gecko_desc&per_page=5&page=${currentPage+1}&sparkline=false&price_change_percentage=24h`)
            .then(res => {
                dispatch(res.data)
            })
        }
        catch(error){
            console.log(error)
        }
    },[currentPage])

   
    
    useEffect(()=>{
        localStorage.setItem("liked", JSON.stringify(selectedItemId))
    },[selectedItemId])

    const handleItemClick = (id) => {
    
        if(!selectedItemId.includes(id)){
            setSelectedItemId([...selectedItemId, id]);
        }
        else{
            setSelectedItemId(selectedItemId.filter(k => k != id))
        }  
        console.log(selectedItemId);
      
    }

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected);
    };

  return (
    <div className='cryptocurrency-price'>
        <Container>
            <h2 className='price__title'>Cryptocurrency Prices by Market Cap</h2>
            <input type="text" className="priec__search" placeholder='Search For a Crypto Currency..' />

            <table className='price__table'>
                <thead>
                    <tr>
                        <th colSpan={2} className='coin'>Coin</th>
                        <th>Price</th>
                        <th>24h Change</th>
                        <th>Market Cap</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        state.slice(0, 10).map((data, index)=> 
                        <tr key={data.id}>
                            <td colSpan={2}>
                                <div>
                                    <Link className='table__link' to={`/${data.id}`}>
                                        <img src={data.image} alt="" />
                                        <div>
                                            <p className='table__symbol'>{data.symbol}</p>
                                            <p className='table__name'>{data.name}</p>
                                        </div>
                                    </Link>
                                </div>
                            </td>
                            <td className='current__price'><Link to={`/${data.id}`}>{ formattedNumber(data.current_price.toFixed(2)*1)}</Link></td>
                            <td>
                                <div className="eye">
                                    <div onClick={() => handleItemClick(data.id)} className={selectedItemId.includes(data.id) ? "eye-icon green" : "eye-icon"}><AiFillEye/></div>
                                    <span className={data.market_cap_change_percentage_24h.toFixed(2) === 0.00 ? "price__null": data.market_cap_change_percentage_24h > 0 ? "price__true" : "price__false"}> {data.market_cap_change_percentage_24h.toFixed(2) > 0 ? "+" : ""} {data.market_cap_change_percentage_24h.toFixed(2) === 0 ? 0 : data.market_cap_change_percentage_24h.toFixed(2)}%</span>
                                </div>
                            </td>
                            <td className='current__price'><Link to={`/${data.id}`}>{formattedNumber(data.market_cap)}M</Link></td>
                        </tr>
                        )
                    }

                    
                </tbody>
            </table>
            <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={'...'}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                activeClassName={'active'}
            />
        </Container>
    </div>
  )
}

export default CryptocurrencyPrice