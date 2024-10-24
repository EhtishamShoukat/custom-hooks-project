import React, { useState, useEffect } from 'react';
import { usePagination } from './components/usePagination';

const data = [...Array(100).keys()].map((i) => `Item ${i + 1}`); // Mock data

const App = () => {
  const itemsPerPage = 10;
  const { currentPage, totalPages, nextPage, prevPage, goToPage, startIndex, endIndex } = usePagination(data.length, itemsPerPage);
  
  const currentItems = data.slice(startIndex, endIndex);

  return (
    <div  className='container'>
      <h1>Pagination Example</h1>
      <ul>
        {currentItems.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <div>
        <button  className='btn btn-danger' style={{marginRight:"10px"}} onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button className='btn btn-info' style={{marginLeft:"10px"}} onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>

      <div>
        <input style={{margin:"20px"}}
          type="number"
          value={currentPage}
          onChange={(e) => goToPage(Number(e.target.value))}
          min={1}
          max={totalPages}
        />
        <span> / {totalPages}</span>
      </div>
    </div>
  );
};

export default App;
