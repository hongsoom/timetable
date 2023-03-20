import React from 'react';

const Table = () => {
  return (
    <>
      <div className='flex flex-col lg:flex-row w-full justify-between'>
        <TableHeaderBox>
          <tr>
            <HeaderColumn id='id' className='sort'>
              주문번호 ▲
            </HeaderColumn>
            <HeaderColumn>고객번호</HeaderColumn>
            <HeaderColumn>고객명</HeaderColumn>
            <HeaderColumn>가격</HeaderColumn>
            <HeaderColumn id='transaction_time' className='sort'>
              거래일 & 거래시간 ▲
            </HeaderColumn>
            <HeaderColumn>주문 처리 상태</HeaderColumn>
          </tr>
        </TableHeaderBox>
      </div>
    </>
  );
};

export default Table;
