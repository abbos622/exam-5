import React, {useState} from 'react';
import "./Paginate.scss";
import ReactPaginate from 'react-paginate';


const Paginate = (state) => {
  
  const itemsPerPage = 10; // Har bir sahifada ko'rsatiladigan elementlar soni
  
  const pageCount = Math.ceil(100 / itemsPerPage); // Umumiy sahifalar soni
  console.log(pageCount)

  const [currentPage, setCurrentPage] = useState(0);
  console.log(currentPage + 1)
  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  // const currentItems = state.slice(indexOfFirstItem, indexOfLastItem);
  
  
  const handlePageClick = ({ selected }) => {
      setCurrentPage(selected);
  };
  
  


  return (
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
  )
}

export default Paginate