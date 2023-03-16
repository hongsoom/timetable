import React, { createContext, useState } from 'react';
import Serach from './Serach';

const TableContainer = () => {
  return (
    <>
      <div className='flex flex-col lg:flex-row w-full justify-between'>
        <Serach />
        <p>시간표 테이블</p>
      </div>
      <div>
        <p>장바구니</p>
      </div>
    </>
  );
};

export default TableContainer;
