import React, { createContext, useState } from 'react';
import Serach from './Serach';
import Table from './Table';
import Basket from './Basket';

const TableContainer = () => {
  return (
    <>
      <div className='flex flex-col lg:flex-row w-full justify-between'>
        <Serach />
        <Table />
      </div>
      <div>
        <Basket />
      </div>
    </>
  );
};

export default TableContainer;
