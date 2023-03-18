import React, { createContext, useState } from 'react';
import Serach from './Serach';
import Table from './Table';

const TableContainer = () => {
  return (
    <>
      <div className='flex flex-col lg:flex-row w-full justify-between'>
        <Serach />
        <Table />
      </div>
      <div>
        <p>장바구니</p>
      </div>
    </>
  );
};

export default TableContainer;
